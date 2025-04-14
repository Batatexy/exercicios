/*1 - Inserir campo data conclusão na tabela Ordem_servico (caso não houver)*/
select data_fim from ordem_servico;

/*2 - Liste todas as ordens de serviço, incluindo o nome do cliente, modelo do veículo e valor total*/
select c.nome, v.modelo, os.custo from ordem_servico os
join clientes c on c.id_cliente = os.id_cliente
join veiculos v on v.id_veiculo = os.id_veiculo;

/*3 - Calcule o valor total de todas as ordens de serviço concluídas*/
select sum(os.custo) from ordem_servico os
where os.data_fim < (SELECT SYSDATE FROM DUAL);

/*4 - Exiba o total de ordens de serviço por status*/
select count(distinct os.id_ordem_servico) from ordem_servico os
where os.id_status = 1;

/*5 - Liste os funcionários com o nome da função e aqueles que possuem "Mecanico" no nome da função
façam utilizando o LIKE  - Pesquise o que é a comparação com LIKE  e envie um resumo de como e porque utilizar*/
select f.nome from funcionarios f
where f.cargo like 'Mecânico';

/*6 - Conte quantas peças existem em cada categoria*/
select c.descricao, sum(p.quantidade) from pecas p
join categorias c on c.id_categoria = p.id_categoria
group by c.descricao;

/*7 - Exiba os nomes dos clientes que possuem mais de 1 veículo cadastrado (pesquisar sobre HAVING COUNT)*/
insert into veiculos values (5, 2, '911', 'Porsche', 2011, 'SKT2J56',  'vermelho', 1299.99);

/*Tentativa 1*/
select cli.nome, v.modelo from clientes cli
join veiculos v on v.id_cliente = cli.id_cliente
where count(v.id_cliente) > 1;

/*Tentativa 2*/
select cli.nome, v.modelo from clientes cli
join veiculos v on v.id_cliente = cli.id_cliente
where cli.id_cliente in 
(
    select cli.id_cliente from veiculos v
    group by cli.id_cliente
    having count(v.id_veiculo) > 1
);

/*ChatGPT*/
SELECT cli.nome, COUNT(v.id_veiculo) AS total_veiculos
FROM clientes cli
JOIN veiculos v ON v.id_cliente = cli.id_cliente
GROUP BY cli.nome
HAVING COUNT(v.id_veiculo) > 1;

/*8 - Exiba todas as ordens de serviço com uma coluna adicional indicando se a ordem está "Concluída" ou "Aberta" 
(baseado na presença de DATA_CONCLUSAO).( pesquisar CASE  para verficar se existe  data de conclusão, se sim informar
CONCLUIDA senão ABERTA)*/
select os.*, 
case
    when os.data_fim is null then 'Aberta'
    else 'Concluida'
end as Estado
from ordem_servico os;

/*9 - Atualize o valor total das ordens de serviço para incluir um desconto de 10%,
apenas para ordens concluídas após 01/03/2025*/
select os.*, 
case           
    when os.data_fim <= '01/03/2025' then round(os.custo * 0.9, 2) /*Arredonda 2 casas após a ,*/
    else null
end as Com_Desconto
from ordem_servico os;

/*10  - Liste todas as peças que têm códigos repetidos (duplicados). (utilizar um self join, join para a mesma 
tabela de consulta)
mesmo que nao houver retorno do resultado ou se o código for PK  fazer a query*/
select a.* from pecas a
join pecas b on b.serial = a.serial
where a.id_peca <> b.id_peca; /*Evitar duplicação de resultados*/

/*11 - Liste todas as ordens de serviço criadas nos últimos 30 dias (Pesquise sobre SYSDATE para comparar a data)*/
select os.* from ordem_servico os
where os.data_inicio >= (SELECT SYSDATE - 110 FROM DUAL); /*100 dias anteriores a hoje*/

/*12 - Liste todos os veículos que não possuem ordens de serviço associadas*/
select * from veiculos order by id_veiculo;
select v.* from ordem_servico os
right join veiculos v on v.id_veiculo = os.id_veiculo
where os.id_veiculo is null;

/*13 - Calcule o valor total de serviços realizados por cada funcionário, agrupados por tipo de serviço*/
select t.descricao, f.nome, sum(s.preco) as Valor from servicos s
join tipo t on t.id_tipo_servico = s.id_tipo_servico
join funcionarios f on f.id_funcionario = s.id_funcionario
group by (t.descricao, f.nome);

/*14 - Remova todas as peças que não estão associadas a nenhum serviço. 
( Não precisa remover de fato, me envie apenas a QUERY para remover as peças)*/
delete from pecas
where id_peca in
(
    select p.id_peca, p.descricao, ps.id_servico from pecas p
    full join pecas_servico ps on ps.id_peca = p.id_peca
    where ps.id_servico is null
);

/*15 - Crie uma View que exiba o relatório de ordens com informações do cliente, veículo, status e valor total. 
( Pesquise o que é VIEW e envie um resumo de como e porque utilizar)*/
CREATE OR REPLACE VIEW Relatorio AS
select os.id_ordem_servico as ID, c.nome, c.cpf, v.modelo, v.ano, v.placa, v.cor, os.data_inicio, os.data_fim, s.descricao, os.custo
from clientes c
join veiculos v on v.id_cliente = c.id_cliente
join ordem_servico os on os.id_cliente = v.id_cliente
join status s on s.id_status = os.id_status;

/*Uma view é como se fosse uma tabela personalizada com dados especificos, como no caso acima, onde se cria
uma tabela apenas com os dados importantes de clientes, veiculos, ordem_servico e status
e também é possivel realizar selects a partir desta view criada*/

/*lower, upper*/
select r.nome from relatorio r where lower(r.nome) like lower('carlos lima');

/*LISTAGG*/
select t.descricao, listagg(p.descricao, '; ') as peças_usadas from pecas p
join pecas_servico ps on ps.id_peca = p.id_peca
join servicos s on s.id_servico = ps.id_servico
join tipo t on t.id_tipo_servico = s.id_tipo_servico
group by t.descricao;

select c.descricao as categorias, listagg(p.descricao, '; ') as peças from pecas p
join categorias c on c.id_categoria = p.id_categoria
group by c.descricao;

/*Concatenações*/
SELECT 'Peça: ' || p.descricao || '-Novo' AS Peças FROM pecas p;

SELECT 
  'UPDATE Materiais SET peca = ''' || descricao || ''' WHERE id_peca = ' || id_peca || ';' AS comando_sql
FROM pecas;

/*   SQL Injection Nome: ' or '1'='1   */
SELECT * FROM clientes WHERE nome ='' or '1'='1';


select * from veiculos  
where lower(modelo) in lower('onix');



