/*Consultas básicas e Comparações:*/  
/*1. Liste todos os clientes cadastrados, ordenados por nome*/
select * from clientes order by nome;

/*2. Exiba os motoristas contratados antes de uma determinada data*/
select * from motoristas where data_admissao < '20/11/2020';

/*3. Mostre todos os veículos que têm capacidade de carga acima de um valor específico*/
select * from veiculos where capacidade_carga > 900;

/*4. Liste os pedidos realizados em um intervalo de datas*/
select * from pedidos where data_pedido > '01/04/2025' and data_entrega < '08/04/2025';

/*5. Consulte os endereços registrados para um cliente específico*/
select c.id_cliente, c.nome, listagg(e.logradouro, '; ') as Logradouro, listagg(e.numero, '; ') as numero,  
listagg(e.complemento, '; ') as complemento, listagg(e.bairro, '; ') as bairro, listagg(e.cidade, '; ') as cidade, 
listagg(e.estado, '; ') as estado,listagg(e.cep, '; ') as cep  from enderecos e
join clientes c on c.id_cliente = e.id_cliente
group by c.nome, c.id_cliente
order by c.id_cliente;

/*6. Consulte a quantidade de veiculos com multas*/
select * from multas m
join veiculos v on v.id_veiculo = m.id_veiculo;

/*7. Consute a quantidade total de veiculos na frota*/
select count(id_veiculo) as frota from veiculos;

/*8. Liste a quantidade de veículos com mais de cinco anos*/
select * from veiculos where ano <= (SELECT EXTRACT(YEAR FROM SYSDATE) - 5 FROM DUAL);

/*9. Liste os despachos da semana*/
select * from despachos where data_despacho >= (SELECT SYSDATE - 7 FROM DUAL);

/*10. Liste os veiculos em que a placa contenha o numero 07*/
select * from veiculos where placa like '%07%';

/*11. Liste os motoristas cuja categoria de CNH seja "E"*/
select * from motoristas where upper(categoria_cnh) like upper('e');

/*12. Exiba os veículos fabricados após um determinado ano*/
select * from veiculos where ano >= 2023;

/*13. Mostre os pedidos que ainda estão com o status "pendente"*/
select * from pedidos where lower(status) = lower('pendente');

/*14. Consulte os custos operacionais acima de um valor específico*/
select * from custos_operacionais where valor > 1500;

/*15. Exiba os despachos realizados por um motorista específico*/
select m.nome, listagg(d.id_pedido, ' - ') as pedidos from despachos d
join motoristas m on m.id_motorista = d.id_motorista
where lower(m.nome) = lower('joão mendes')
group by m.nome;

/****************************Ordenação****************************/  
/*16. Ordene os pedidos por data de entrega em ordem decrescente*/
select * from pedidos
order by data_entrega desc;

/*17. Liste os veículos por capacidade de carga em ordem ascendente*/
select * from veiculos
order by capacidade_carga;

/*18. Ordene os motoristas pelo nome em ordem alfabética*/
select * from motoristas
order by nome;

/*19. Organize os relatórios operacionais por data*/
select * from relatorios_operacionais
order by data_relatorio;

/*20. Liste os inventários em um armazém específico, ordenados por quantidade*/
select * from inventarios i
join armazens a on a.id_armazem = i.id_armazem
order by i.quantidade;

/****************************Utilização de JOINs****************************/
/*21. Faça uma consulta que relacione motoristas e os veículos que eles utilizam*/
select m.nome, v.modelo from veiculos v
join despachos d on d.id_veiculo = v.id_veiculo
join motoristas m on m.id_motorista = d.id_motorista ;

/*22. Relacione os pedidos com os clientes que os realizaram*/
select * from pedidos p
join clientes c on c.id_cliente = p.id_cliente;

/*23. Mostre os itens de cada pedido, incluindo os detalhes do cliente e do pedido*/
select c.nome, c.cpf_cnpj, c.telefone, c.email, c.data_cadastro, 
p.id_pedido, p.data_pedido, p.data_entrega, listagg(i.descricao, ' - ') as itens 
from itens_pedido i
join pedidos p on p.id_pedido = i.id_pedido
join clientes c on c.id_cliente = p.id_cliente
group by p.id_pedido, p.data_pedido, p.data_entrega, 
c.nome, c.cpf_cnpj, c.telefone, c.email, c.data_cadastro;

/*24. Exiba as rotas vinculadas aos despachos realizados*/
select * from despachos d
join rotas r on r.id_rota = d.id_rota;

/*25. Relacione os veículos às manutenções registradas*/
select * from manutencoes m
join veiculos v on v.id_veiculo = m.id_veiculo;

/****************************Funções agregadas****************************/
/*26. Calcule o total de custos operacionais registrados*/
select sum(valor) as total from custos_operacionais;

/*27. Mostre a quantidade de pedidos realizados por cada cliente*/
select c.nome, count(p.id_cliente) as nº_pedidos from pedidos p
join clientes c on c.id_cliente = p.id_cliente
group by c.nome, p.id_cliente;

/*28. Exiba o consumo total de combustível por veículo*/
select v.modelo, sum(c.quantidade_litros) as consumo from combustivel c
join veiculos v on v.id_veiculo = c.id_veiculo
group by v.modelo;

/*29. Liste a soma dos valores de multas registradas por veículo*/
select v.modelo, m.descricao, sum(m.valor) as total from multas m
join veiculos v on v.id_veiculo = m.id_veiculo
group by v.modelo, m.descricao;

/*30. Mostre o total de horas trabalhadas por motorista em um período específico*/
select m.nome, (j.datafim - j.datainicio) * j.horastrabalhadas as horas_trabalhadas from jornadas_trabalho j
join motoristas m on m.id_motorista = j.id_motorista;

/****************************Subconsultas****************************/
/*31. Consulte os motoristas que possuem jornadas registradas superiores a um limite*/
select m.nome, j.datafim, j.datainicio, j.horastrabalhadas from jornadas_trabalho j
join motoristas m on m.id_motorista = j.id_motorista
where j.horastrabalhadas > 8;

/*32. Exiba os pedidos que têm itens com peso superior a um valor específico*/
select p.*, i.peso from pedidos p 
join itens_pedido i on i.id_pedido = p.id_pedido
where i.peso > 5;

/*33. Liste os armazéns que possuem capacidade maior que a média registrada*/
/*Media*/
select distinct (select sum(capacidade) from armazens) / (select count(id_armazem) from armazens) as media from armazens;

select * from armazens
where capacidade > (select sum(capacidade) from armazens) / (select count(id_armazem) from armazens);

/*34. Relacione os veículos que possuem mais de 3 registros de manutenção*/
select v.modelo, listagg(m.descricao, '; ') as manutençoes from manutencoes m
join veiculos v on v.id_veiculo = m.id_veiculo
where (select count(id_veiculo) from manutencoes) > 3
group by v.modelo;

/*35. Mostre os pedidos realizados em rotas com distância maior que um valor específico*/
select p.*, r.distancia_km from pedidos p
join despachos d on d.id_pedido = p.id_pedido
join rotas r on r.id_rota = d.id_rota
where r.distancia_km > 150;

/****************************Desafio****************************/
/*36. Crie uma consulta que relacione clientes, endereços e pedidos*/
select * from enderecos e
join clientes c on c.id_cliente = e.id_cliente
join pedidos p on p.id_cliente = c.id_cliente;

/*37. Liste os veículos que possuem manutenções mais recentes que os abastecimentos*/
select * from combustivel c
join veiculos v on v.id_veiculo = c.id_veiculo
join manutencoes m on m.id_veiculo = v.id_veiculo
where m.data_manutencao > c.data;

/*38. Mostre os despachos realizados por motoristas que possuem multas registradas*/
select d.*, m.nome, mu.valor from motoristas m
join despachos d on d.id_motorista = m.id_motorista
join veiculos v on v.id_veiculo = d.id_veiculo
join multas mu on mu.id_veiculo = v.id_veiculo;

/*39. Relacione os pedidos que têm seguros associados e seus valores de cobertura*/
select * from pedidos p
join seguros s on s.id_pedido = p.id_pedido;

/*40. Exiba os relatórios operacionais criados por funcionários com salário acima de um valor específico*/
select ro.*, f.nome, f.salario from relatorios_operacionais ro
join funcionarios f on f.id_funcionario = ro.responsavel
where f.salario > 3000;

/****************************Consultas Avançadas e Desafios****************************/

/*1. Crie uma consulta que mostre todos os pedidos entregues com atraso, calculando a diferença em dias entre a 
data prevista de entrega e a data real da entrega. Relacione também o cliente responsável pelo pedido*/


/*2. Liste os motoristas que realizaram mais de 5 despachos em rotas com distância superior a 500 km. Exiba o nome 
do motorista, o total de despachos realizados e a soma da distância percorrida*/


/*3. Identifique os veículos que possuem o maior consumo de combustível (em litros) em um período específico. 
Exiba o veículo, o total de litros consumidos e o custo total do combustível*/


/*4. Relacione os clientes que possuem mais de 3 pedidos realizados, mas que possuem ao menos 1 pedido com status 
"pendente". Exiba o cliente e o total de pedidos pendentes*/


/*5. Monte uma consulta para listar todas as rotas que foram realizadas por motoristas com multas registradas nos 
últimos 6 meses. Inclua o nome do motorista, os detalhes do veículo e as informações da multa*/


/*6. Liste os armazéns com inventário de itens cuja quantidade esteja abaixo da média geral de itens em estoque. 
Exiba o armazém, o item e a quantidade disponível*/


/*7. Crie uma consulta que calcule a eficiência operacional de cada veículo, considerando a distância total 
percorrida por cada um (com base nas rotas realizadas) e o consumo total de combustível. Exiba o veículo e sua 
eficiência (distância por litro)*/


/*8. Relacione os custos operacionais com as despesas de manutenção e de combustível. Liste o custo total agrupado 
por veículo e exiba separadamente as despesas de manutenção e combustível*/


/*9. Monte uma consulta que relacione todos os pedidos que possuem seguro associado e exiba o cliente, o valor do pedido,
o valor da cobertura do seguro e se o valor do seguro cobre totalmente o valor do pedido (sim ou não)*/


/*10. Gere um relatório que mostre o total de horas trabalhadas por cada motorista em um intervalo de datas. 
Inclua os motoristas que não possuem registros de jornada nesse intervalo, exibindo "0 horas" para eles*/

