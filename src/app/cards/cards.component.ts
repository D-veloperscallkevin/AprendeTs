import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
info:Array<any>=[
  {
    title: 'Boolean',
    subtitle: 'culpa, possimus corporis?',
    info: 'Las variables booleanas se almacenan como números de 16 bits, aunque solo pueden tener los valores True o False. ',
  },
  {
    title: 'Array',
    subtitle: 'culpa, possimus corporis?',
    info: 'Los arrays son variables estructuradas, donde cada elemento se almacena de forma consecutiva en memoria',
  },
  {
    title: 'Tuple',
    subtitle: 'culpa, possimus corporis?',
    info: 'permiten expresar un arreglo con un número fijo conocido de elementos, pero que no requieren ser los mismos.',
  },
  {
    title: 'Enum',
    subtitle: 'culpa, possimus corporis?',
    info: 'Envolve en un objeto determinadas propiedades como constantes estáticas con valores específicos del negocio',
  },
  {
    title: 'Any',
    subtitle: 'culpa, possimus corporis?',
    info: 'Es la via de escape de TypeScript. Puedes usar any para declarar que una sección de tu código es dinámica y parecida a JavaScript.',
  },
  {
    title: 'Never',
    subtitle: 'culpa, possimus corporis?',
    info: 'Utilizar una función que retorna `never` permite agregar código adicional en lugares donde no debería ser posible.',
  }
]
}
