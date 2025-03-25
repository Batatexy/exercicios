#1)
SELECT empregado.nome, empregado.salario, empregado.depto_num
FROM empregado 
JOIN departamento ON empregado.depto_num = departamento.numero
WHERE departamento.nome = "Principais";

#2)
SELECT empregado.nome, empregado.salario, empregado.datanasc
FROM empregado
WHERE empregado.salario > 
(
    SELECT empregado1.salario 
    FROM empregado empregado1 
    WHERE empregado1.nome = "Cebolinha"
)
AND empregado.salario > 
(
    SELECT empregado2.salario 
    FROM empregado empregado2 
    WHERE empregado2.nome = "Franjinha"
);

#3)
SELECT empregado.nome, departamento.numero, empregado.salario
FROM empregado
JOIN departamento ON empregado.depto_num = departamento.numero
JOIN depto_localizacoes ON departamento.numero = depto_localizacoes.depto_num
WHERE depto_localizacoes.localizacao = "Caatinga";

#4)
SELECT codigo, nome, sexo, salario
FROM empregado
WHERE datanasc < 
(
    SELECT MIN(empregado.datanasc)
    FROM empregado
    JOIN departamento ON empregado.depto_num = departamento.numero
    WHERE departamento.nome = "Roça"
);

#5)
SELECT empregado.codigo, empregado.nome
FROM empregado
JOIN trabalha_em ON empregado.codigo = trabalha_em.codigo_emp
GROUP BY empregado.codigo, empregado.nome;

#6)
SELECT departamento.numero, departamento.nome
FROM departamento
LEFT JOIN empregado ON departamento.numero = empregado.depto_num
WHERE empregado.depto_num IS NULL;

#7)
SELECT projeto.nome, departamento.nome, COUNT(trabalha_em.codigo_emp)
FROM projeto
JOIN departamento ON projeto.depto_num = departamento.numero
LEFT JOIN trabalha_em ON projeto.numero = trabalha_em.projeto_num
GROUP BY projeto.nome, departamento.nome;

#8)
SELECT COUNT(*)
FROM empregado
WHERE empregado.codigo NOT IN 
(
	SELECT departamento.codigo_ger 
	FROM departamento 
	WHERE departamento.codigo_ger IS NOT NULL
);