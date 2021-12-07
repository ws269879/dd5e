import { Injectable } from '@angular/core';
import {ICard} from '../component/card/card.component'
import {IUserDetails} from './login.service'

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  adminCards: ICard[] = [
    {
      title: 'Users',
      content: 'Manage users',
      links: [
        {
          text: 'View Users',
          link: '/app/admin/users'
        },
        {
          text: 'Add user',
          link: '/app/admin/register'
        }
      ],
      image: {
        link: '/assets/img/add_user.svg',
        type: 'img'
      }
    },
    {
      title: 'Stats - In development',
      content: 'View website stats - Currently in development - Coming Soon',
      links: [],
      image: {
        link: '/assets/img/stats.svg',
        type: 'img'
      }
    }
  ]

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
    {
      title: 'Admin',
      content: 'Admin dashboard',
      links: [
        {
          text: 'admin',
          link: '/app/admin'
        }
      ],
      image: {
        link: '/assets/img/powerful.svg',
        type: 'img'
      },
      admin: true
    },
  ]

  constructor() { }

  public getCards(user: IUserDetails): ICard[] {
    return this.cards.filter((card) => !card.admin || user?.role.toLowerCase() === 'admin')
  }

  public getAdminCards(): ICard[] {
    return this.adminCards
  }
}
