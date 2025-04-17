/*Gabriel Carrascosa*/

create table tb_clientes (
    cli_id integer not null primary key,
    nome varchar2(255),
    endereco varchar2(100),
    cidade varchar2(100),
    telefone varchar2(50),
    data_nasc date
);

insert into tb_clientes values (1, 'Carlos', 'Rua 1', 'Araraquara',  '(16)9934534-4355', '12/04/2000');
insert into tb_clientes values (2, 'Rodrigo', 'Rua 2', 'São Carlos', '(17)2343424-7562', '13/08/1990');
insert into tb_clientes values (3, 'João', 'Rua 3', 'Ribeirão Preto',  '(18)9934534-4355', '14/07/1992');
insert into tb_clientes values (4, 'Cleber', 'Rua 4', 'Araraquara',  '(19)686639-4355', '15/09/1985');
insert into tb_clientes values (5, 'Luiz', 'Rua 5', 'Rio Claro',  '(20)58953-4355', '16/10/1995');
insert into tb_clientes values (6, 'Daniel', 'Rua 6', 'Santa Lucia',  '(21)468447-4355', '17/11/1976');
insert into tb_clientes values (7, 'Anderson', 'Rua 7', 'Rio Claro',  '(22)547547457-4355', '18/12/1991');
insert into tb_clientes values (8, 'Felipe', 'Rua 8', 'São Carlos',  '(23)6799-4355', '19/05/1987');
insert into tb_clientes values (9, 'Kaue', 'Rua 9', 'Ribeirão Preto',  '(24)78424-4355', '22/06/1972');
insert into tb_clientes values (10, 'André', 'Rua 10', 'Araraquara', '(25)84454-4355', '21/01/1969');

/******************************************************************************************************************/

create table tb_vendas (
    venda_id integer not null primary key,
    cli_id integer not null,
    vendedor_id integer not null,
    data date,
    
    constraint fk_vendas_clientes foreign key (cli_id) references tb_clientes(cli_id),
    constraint fk_vendas_produtos foreign key (vendedor_id) references tb_vendedores(vendedor_id)
);

insert into tb_vendas values (1, 1, 1, '01/04/2025');
insert into tb_vendas values (2, 2, 2, '02/02/2025');
insert into tb_vendas values (3, 2, 1, '03/03/2025');
insert into tb_vendas values (4, 3, 3, '04/03/2025');
insert into tb_vendas values (5, 2, 2, '05/01/2025');
insert into tb_vendas values (6, 3, 1, '06/02/2025');
insert into tb_vendas values (7, 4, 3, '07/02/2025');
insert into tb_vendas values (8, 5, 1, '08/03/2025');
insert into tb_vendas values (9, 2, 2, '09/03/2025');
insert into tb_vendas values (10, 2, 1, '10/03/2025');
insert into tb_vendas values (11, 4, 2, '11/01/2025');
insert into tb_vendas values (12, 5, 3, '12/03/2025');
insert into tb_vendas values (13, 3, 3, '13/02/2025');
insert into tb_vendas values (14, 4, 3, '14/02/2025');
insert into tb_vendas values (15, 2, 2, '15/03/2025');
insert into tb_vendas values (16, 3, 2, '16/04/2025');
insert into tb_vendas values (17, 2, 3, '17/03/2025');
insert into tb_vendas values (18, 4, 2, '18/04/2025');
insert into tb_vendas values (19, 7, 1, '19/03/2025');
insert into tb_vendas values (20, 6, 2, '20/04/2025');
insert into tb_vendas values (21, 4, 1, '21/03/2025');
insert into tb_vendas values (22, 8, 3, '22/02/2025');
insert into tb_vendas values (23, 5, 3, '23/03/2025');
insert into tb_vendas values (24, 2, 2, '24/01/2025');
insert into tb_vendas values (25, 5, 1, '25/03/2025');

/******************************************************************************************************************/

create table tb_produtos (
    produto_id integer not null primary key,
    descricao varchar2(255),
    valor float
)

insert into tb_produtos values (1, 'Garrafinha', 5.99);
insert into tb_produtos values (2, 'Mouse', 39.99);
insert into tb_produtos values (3, 'Teclado', 59.99);
insert into tb_produtos values (4, 'Estojo', 3.99);
insert into tb_produtos values (5, 'Tesoura', 1.99);
insert into tb_produtos values (6, 'Caneta', 1.99);
insert into tb_produtos values (7, 'Lapiz', 1.49);
insert into tb_produtos values (8, 'Borracha', 1.99);
insert into tb_produtos values (9, 'Apontador', 2.99);
insert into tb_produtos values (10, 'Fone', 29.99);

/******************************************************************************************************************/

create table tb_produtos_vendas (
    produto_id integer not null,
    venda_id integer not null,
    
    constraint fk_produtos_vendas_produtos foreign key (produto_id) references tb_produtos(produto_id),
    constraint fk_produtos_vendas_vendas foreign key (venda_id) references tb_vendas(venda_id)
)

insert into tb_produtos_vendas values (1, 1) ;
insert into tb_produtos_vendas values (4, 2) ;
insert into tb_produtos_vendas values (6, 3) ;
insert into tb_produtos_vendas values (2, 4) ;
insert into tb_produtos_vendas values (10, 5) ;
insert into tb_produtos_vendas values (2, 6) ;
insert into tb_produtos_vendas values (9, 7) ;
insert into tb_produtos_vendas values (4, 8) ;
insert into tb_produtos_vendas values (1, 9) ;
insert into tb_produtos_vendas values (8, 10) ;
insert into tb_produtos_vendas values (4, 11) ;
insert into tb_produtos_vendas values (7, 12) ;
insert into tb_produtos_vendas values (2, 13) ;
insert into tb_produtos_vendas values (1, 14) ;
insert into tb_produtos_vendas values (4, 15) ;
insert into tb_produtos_vendas values (10, 16) ;
insert into tb_produtos_vendas values (6, 17) ;
insert into tb_produtos_vendas values (4, 18) ;
insert into tb_produtos_vendas values (5, 19) ;
insert into tb_produtos_vendas values (7, 20) ;
insert into tb_produtos_vendas values (5, 21) ;
insert into tb_produtos_vendas values (3, 22) ;
insert into tb_produtos_vendas values (2, 23) ;
insert into tb_produtos_vendas values (5, 24) ;
insert into tb_produtos_vendas values (3, 25) ;

/******************************************************************************************************************/

create table tb_vendedores (
    vendedor_id integer not null primary key,
    nome_vendedor varchar2(255)
)

insert into tb_vendedores values (1, 'Gabriel');
insert into tb_vendedores values (2, 'João');
insert into tb_vendedores values (3, 'Aldair');

/******************************************************************************************************************/
/*Consultas:*/

/*1) o nome do cliente, data da venda, valor da venda*/
select c.nome, v.data, p.descricao, p.valor from tb_clientes c
join tb_vendas v on v.cli_id = c.cli_id
join tb_produtos_vendas pv on pv.venda_id = v.venda_id
join tb_produtos p on p.produto_id = pv.produto_id;

/*1) a quantidade total de produtos vendidos*/
select count(venda_id) as produtos_vendidos from tb_vendas;

/*2) o nome do cliente, descricao dos produtos (clientes que não possuem vendas como null)*/
select c.nome, p.descricao from tb_clientes c
left join tb_vendas v on v.cli_id = c.cli_id
left join tb_produtos_vendas pv on pv.venda_id = v.venda_id
left join tb_produtos p on p.produto_id = pv.produto_id
order by p.descricao nulls first;

/*3) a descricao dos protudos, nome dos clientes (produtos que não foram vendidos tambem)*/
/*Ambos (Clientes que não compraram, produtos que não foram vendidos)*/
select c.nome, p.descricao from tb_clientes c
full join tb_vendas v on v.cli_id = c.cli_id
full join tb_produtos_vendas pv on pv.venda_id = v.venda_id
full join tb_produtos p on p.produto_id = pv.produto_id;

/*Apenas produtos que foram ou não vendidos*/
select c.nome, p.descricao from tb_clientes c
right join tb_vendas v on v.cli_id = c.cli_id
right join tb_produtos_vendas pv on pv.venda_id = v.venda_id
right join tb_produtos p on p.produto_id = pv.produto_id
order by c.nome nulls first;

/*4) nome do cliente, soma total de seus produtos comprados, agrupando por cliente*/
select c.nome, sum(p.valor) as valor_total_por_cliente from tb_clientes c
left join tb_vendas v on v.cli_id = c.cli_id
left join tb_produtos_vendas pv on pv.venda_id = v.venda_id
left join tb_produtos p on p.produto_id = pv.produto_id
group by c.nome
order by valor_total_por_cliente nulls first;

/*5) o vendedor, id da venda, nome do cliente, valor total da venda*/
select ven.nome_vendedor, v.venda_id, c.nome,  sum(p.valor) as valor_total from tb_clientes c
join tb_vendas v on v.cli_id = c.cli_id
join tb_produtos_vendas pv on pv.venda_id = v.venda_id
join tb_produtos p on p.produto_id = pv.produto_id
join tb_vendedores ven on ven.vendedor_id = v.vendedor_id
group by ven.nome_vendedor, v.venda_id, c.nome;

/*6) todos os produtos vendidos por um vendedor*/
select ven.nome_vendedor, listagg(p.descricao, ', ' ) from tb_clientes c
join tb_vendas v on v.cli_id = c.cli_id
join tb_produtos_vendas pv on pv.venda_id = v.venda_id
join tb_produtos p on p.produto_id = pv.produto_id
join tb_vendedores ven on ven.vendedor_id = v.vendedor_id
where lower(ven.nome_vendedor) like lower('gabriel')
group by ven.nome_vendedor;

/*7) todos os produtos comprados por um determinado cliente*/
select c.nome, listagg(p.descricao, ', ' ) from tb_clientes c
join tb_vendas v on v.cli_id = c.cli_id
join tb_produtos_vendas pv on pv.venda_id = v.venda_id
join tb_produtos p on p.produto_id = pv.produto_id
group by c.nome;

/*8) produtos comprados por clientes com idades entre 20 e 30*/
select c.nome, p.descricao from tb_clientes c
join tb_vendas v on v.cli_id = c.cli_id
join tb_produtos_vendas pv on pv.venda_id = v.venda_id
join tb_produtos p on p.produto_id = pv.produto_id
/*Não sei como faz certo, mas é o que consegui fazer*/
where ((select sysdate from dual) - c.data_nasc) / (30) < 366
and ((select sysdate from dual) - c.data_nasc) / (20) >= 365;

/*9) total de vendas de cada vendedor*/
select ven.nome_vendedor, count(p.descricao) as quantidade_vendas from tb_clientes c
join tb_vendas v on v.cli_id = c.cli_id
join tb_produtos_vendas pv on pv.venda_id = v.venda_id
join tb_produtos p on p.produto_id = pv.produto_id
join tb_vendedores ven on ven.vendedor_id = v.vendedor_id
group by ven.nome_vendedor;

/*10) todos os clientes, todas as ids de vendas, data venda, produtos e vendedores*/
select c.*, v.venda_id, v.data, p.descricao, ven.nome_vendedor from tb_clientes c
full join tb_vendas v on v.cli_id = c.cli_id
full join tb_produtos_vendas pv on pv.venda_id = v.venda_id
full join tb_produtos p on p.produto_id = pv.produto_id
full join tb_vendedores ven on ven.vendedor_id = v.vendedor_id;





