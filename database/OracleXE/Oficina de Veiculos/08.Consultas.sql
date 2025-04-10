/*1 - Inserir campo data conclusão na tabela Ordem_servico (caso não houver)*/
select data_fim from ordem_servico;

/*2 - Liste todas as ordens de serviço, incluindo o nome do cliente, modelo do veículo e valor total*/
select c.nome, v.modelo, os.custo from ordem_servico os
join clientes c on c.id_cliente = os.id_cliente
join veiculos v on v.id_veiculo = os.id_veiculo;

/*3 - Calcule o valor total de todas as ordens de serviço concluídas*/
select sum(os.custo) from ordem_servico os
where os.data_fim < (SELECT SYSDATE FROM dual);

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

/*7 - Exiba os nomes dos clientes que possuem mais de 1 veículo cadastrado. ( pesquisar sobre HAVING COUNT)*/
insert into veiculos values (5, 2, '911', 'Porsche', 2011, 'SKT2J56',  'vermelho', 1299.99);

/*Tentativa*/
select cli.nome, v.modelo from clientes cli
join veiculos v on v.id_cliente = cli.id_cliente
where count(v.id_cliente) > 1;

/*ChatGPT*/
SELECT cli.nome, COUNT(v.id_veiculo) AS total_veiculos
FROM clientes cli
JOIN veiculos v ON v.id_cliente = cli.id_cliente
GROUP BY cli.nome
HAVING COUNT(v.id_veiculo) > 1;

/*8 - Exiba todas as ordens de serviço com uma coluna adicional indicando se a ordem está "Concluída" ou "Aberta" 
(baseado na presença de DATA_CONCLUSAO).( pesquisar CASE  para verficar se existe  data de conclusão, se sim informar
CONCLUIDA senão ABERTA)*/


/*9 - Atualize o valor total das ordens de serviço para incluir um desconto de 10%,
apenas para ordens concluídas após 01/03/2025*/


/*10  - Liste todas as peças que têm códigos repetidos (duplicados). (utilizar um self join, join para a mesma 
tabela de consulta)
mesmo que nao houver retorno do resultado ou se o código for PK  fazer a query*/


/*11 - Liste todas as ordens de serviço criadas nos últimos 30 dias (Pesquise sobre SYSDATE para comparar a data)*/


/*12 - Liste todos os veículos que não possuem ordens de serviço associadas*/


/*13 - Calcule o valor total de serviços realizados por cada funcionário, agrupados por tipo de serviço*/


/*14 - Remova todas as peças que não estão associadas a nenhum serviço. 
( Não precisa remover de fato, me envie apenas a QUERY para remover as peças)*/


/*15 - Crie uma View que exiba o relatório de ordens com informações do cliente, veículo, status e valor total. 
( Pesquise o que é VIEW e envie um resumo de como e porque utilizar)*/














