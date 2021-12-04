import { Injectable } from '@angular/core';
import {ICard} from '../component/card/card.component'

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  cards: ICard[] = [
    {
      title: 'Alignments',
      content: 'Take a look at the alignments D&D 5e has to offer',
      links: [
        {
          text: 'view',
          link: '/app/alignments'
        }
      ],
      image: {
        link: '/assets/img/dashboard/alignment.jpg',
        type: 'img'
      }
    },
    {
      title: 'classes',
      content: 'Take a look at the classes D&D 5e has to offer',
      links: [
        {
          text: 'view',
          link: '/app/classes'
        }
      ],
      image: {
        link: '/assets/img/dashboard/classes.jpg',
        type: 'img'
      }
    },
    {
      title: 'feats',
      content: 'Take a look at the feats D&D 5e has to offer',
      links: [
        {
          text: 'view',
          link: '/app/feats'
        }
      ],
      image: {
        link: '/assets/img/dashboard/feats.jpg',
        type: 'img'
      }
    },
    {
      title: 'languages',
      content: 'Take a look at the languages D&D 5e has to offer',
      links: [
        {
          text: 'view',
          link: '/app/languages'
        }
      ],
      image: {
        link: '/assets/img/dashboard/languages.jpg',
        type: 'img'
      }
    },
    {
      title: 'magic schools',
      content: 'Take a look at the magic schools D&D 5e has to offer',
      links: [
        {
          text: 'view',
          link: '/app/magicschools'
        }
      ],
      image: {
        link: '/assets/img/dashboard/magic-schools.webp',
        type: 'img'
      }
    },
    {
      title: 'monsters',
      content: 'Take a look at the monsters D&D 5e has to offer',
      links: [
        {
          text: 'view',
          link: '/app/monsters'
        }
      ],
      image: {
        link: '/assets/img/dashboard/monsters.jpg',
        type: 'img'
      }
    },
    {
      title: 'skills',
      content: 'Take a look at the skills D&D 5e has to offer',
      links: [
        {
          text: 'view',
          link: '/app/skills'
        }
      ],
      image: {
        link: '/assets/img/dashboard/skills.webp',
        type: 'img'
      }
    },
    {
      title: 'spells',
      content: 'Take a look at the spells D&D 5e has to offer',
      links: [
        {
          text: 'view',
          link: '/app/spells'
        }
      ],
      image: {
        link: '/assets/img/dashboard/spells.jpg',
        type: 'img'
      }
    },
    {
      title: 'races',
      content: 'Take a look at the races D&D 5e has to offer',
      links: [
        {
          text: 'view',
          link: '/app/races'
        }
      ],
      image: {
        link: '/assets/img/dashboard/races.jpg',
        type: 'img'
      }
    },
    {
      title: 'traits',
      content: 'Take a look at the traits D&D 5e has to offer',
      links: [
        {
          text: 'view',
          link: '/app/traits'
        }
      ],
      image: {
        link: '/assets/img/dashboard/traits.jpg',
        type: 'img'
      }
    },
  ]

  constructor() { }

  public getCards(): ICard[] {
    return this.cards
  }
}
