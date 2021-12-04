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
      title: 'Classes',
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
      title: 'Feats',
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
      title: 'Languages',
      content: 'Take a look at the languages D&D 5e has to offer',
      links: [
        {
          text: 'view',
          link: '/app/languages'
        }
      ],
      image: {
        link: '/assets/img/dashboard/languages.webp',
        type: 'img'
      }
    },
    {
      title: 'Magic Schools',
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
      title: 'Monsters',
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
      title: 'Skills',
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
      title: 'Spells',
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
      title: 'Races',
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
      title: 'Traits',
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
