// Clinica.cs
using System;
using System.Collections.Generic;

namespace ClinicaVeterinaria 
{
    public class Clinica
    {
        public List<Animal> Animais {get; set;}

        public Clinica() 
        {
            this.Animais = new List<Animal>();
        }

        public void AdicionarAnimal(Animal animal)
        {
            Animais.Add(animal);
        }
    }
}