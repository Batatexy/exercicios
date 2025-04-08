/*1 - Liste todos os clientes com seus respectivos veículos, mesmo que não possuam 
nenhum veículo cadastrado.*/
select c.nome, v.modelo from clientes c
left join veiculos v 
on c.id_cliente = v.id_cliente;

/*2 - Liste todos os veículos com as manutenções realizadas, mesmo que o veículo nunca 
tenha passado por manutenção.*/
select v.modelo, m.custo from veiculos v
left join manutencoes m 
on m.id_veiculo = v.id_veiculo;

/*3 - Exiba os dados completos das manutenções realizadas, incluindo o nome do cliente, 
modelo do veículo, nome do funcionário responsável e o custo*/
select c.nome as cliente, v.modelo, f.nome as funcionário, s.nome_servico as serviço, m.custo from Manutencoes m
join Veiculos v on m.id_veiculo = v.id_veiculo
join Clientes c on v.id_cliente = c.id_cliente
join Funcionarios f on m.id_funcionario = f.id_funcionario
join Servicos s on s.id_servico = m.id_servico;

/*4 - Liste os nomes dos funcionários que nunca participaram de nenhuma manutenção*/
select f.nome from Funcionarios f
left join Manutencoes m on m.id_funcionario = f.id_funcionario
where m.id_manutencao IS NULL;

/*5 - Exiba todas as manutenções, mostrando também o status atual (se existir) e a data
da última atualização do status*/
select m.*, s.status_servico, s.data_atualizacao from Manutencoes m
left join Status s on s.id_manutencao = m.id_manutencao;

/*6 - Liste todos os clientes que não possuem nenhum veículo vinculado ao seu cadastro*/
select c.* from Clientes c
left join Veiculos v on v.id_cliente = c.id_cliente
where v.id_veiculo IS NULL;

/*7 - Liste os serviços realizados em veículos pertencentes ao cliente "João Silva"*/
select s.* from Manutencoes m
join Servicos s on m.id_servico = s.id_servico
join Veiculos v on m.id_veiculo = v.id_veiculo
join Clientes c on v.id_cliente = c.id_cliente
where c.nome = 'João Silva'; /*Veiculo de João Silva não teve manutenções*/

/*8 - Exiba o total de manutenções realizadas por cada funcionário, incluindo aqueles 
que nunca realizaram nenhuma*/
select f.* from Funcionarios f
left join Manutencoes m on m.id_funcionario = f.id_funcionario;

/*9 - Liste os veículos que já passaram por manutenção, mas que ainda não possuem 
nenhum status registrado*/
select v.* from Veiculos v
left join Manutencoes m on m.id_veiculo = v.id_veiculo
left join Status s on s.id_manutencao = m.id_manutencao;

/*10 - Exiba os nomes dos clientes, seus veículos e os serviços realizados, apenas 
para os casos em que houve manutenção*/
select c.nome, v.modelo, s.nome_servico from Clientes c
join Veiculos v on v.id_cliente = c.id_cliente
join Manutencoes m on m.id_veiculo = v.id_veiculo
join Servicos s on s.id_servico = m.id_servico;





