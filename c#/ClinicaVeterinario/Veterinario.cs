// Veterinario.cs
using System;
using System.Collections.Generic;

namespace ClinicaVeterinaria 
{
    public class Veterinario
    {
        public string Nome {get; set;}
        public string Cnpj {get; set;}

        public Veterinario (string Nome, string Cnpj) 
        {
            this.Nome = Nome;
            this.Cnpj = Cnpj;
        }

        public void Examinar(Animal animal)
        {
            DateTime agora = DateTime.Now;
            Console.WriteLine("Iniciando exame do animal: " + animal.Nome + " em " + agora);

            Console.WriteLine("Tipo do animal: " + animal.GetType().Name);
        
            animal.EmitirSom();
            Console.WriteLine("Fim do exame do animal: " + animal.Nome);
        }

        public void Examinar(List<Animal> animais)
        {
            Console.WriteLine("Iniciando exame de lista de animais");
            foreach (Animal animal in animais)
            {
                Examinar(animal);
            }
            Console.WriteLine("Fim do exame de lista de animais");
        }
    }
}