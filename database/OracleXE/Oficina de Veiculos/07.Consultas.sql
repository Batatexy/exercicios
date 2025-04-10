/******************************************EXERCICIO*2******************************************/

/*1 - Contar o total de clientes  que fizeram Manutenção*/
select count(distinct cli.nome) as qnt_clientes_ordem_servico from clientes cli
join ordem_servico os on os.id_cliente = cli.id_cliente;

/*2 - Contar o total de clientes  que fizeram Serviços*/
select count(distinct cli.nome) as qnt_clientes_servicos from clientes cli
join servicos s on s.id_cliente = cli.id_cliente;

/*3 - Contar quantas manutençoes ocorreram a partir de 01/01/2025 
(caso nao houver o campo data de manutenção na tabela manutenção, adicionar o campo Data e popular  ) */
/*0bs, podemos comparar datas como strings
    campo_data > '01/01/2025';
    campo_data = '01/01/2025';
    campo_data <  '01/01/2025';
    campo_data >= '01/01/2025' and campo_data < '01/04/2025';
 */
 
select count(distinct os.id_ordem_servico) as Ordens_Serviço_01_01_2025 from ordem_servico os
where os.data_fim >= '01/01/2025' or os.data_inicio >= '01/01/2025';

select count(distinct s.id_servico) as Serviços_01_01_2025 from servicos s
where s.data_fim >= '01/01/2025' or s.data_inicio >= '01/01/2025';










