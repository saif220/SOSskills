import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  toggled = false;
  _hasBackgroundImage = true;
  menus = [
    {
      title: 'Dashboard',
      icon: 'fas fa-home',
      active: true,
      path: ''
    },
    {
      title: 'Consultants',
      icon: 'fas fa-address-card',
      active: false,
      path: 'Liste',
      type: 'dropdown',
      submenus: [
        {
          title: 'Liste',
          icon: 'fas fa-list',
          path: 'Liste'
        },
        {
          title: 'Recherche',
          icon: 'fas fa-search',
          path: 'Recherche'
        },
        {
          title: 'Ajout',
          icon: 'fas fa-user-plus',
          path: 'ajoutc'
        }
      ]
    },
    {
      title: 'Rappels',
      icon: 'far fa-calendar-alt',
      active: false,
      path: '/',
      type: 'dropdown',
      submenus: [
        {
          title: 'General',
          path: 'saif'
        }
      ]
    },
    {
      title: 'Paramétrages',
      icon: 'fas fa-cog',
      active: false,
      path: 'tags',
      type: 'dropdown',
      submenus: [
        {
          title: 'TAGs',
          icon: 'fas fa-list',
          path: 'tags'
        },
        {
          title: 'Listes déroulantes',
          icon: 'fas fa-search',
          path: 'listeD'
        },
        {
          title: 'Utilisateurs',
          icon: 'fas fa-user-plus',
          path: 'users'
        }
      ]
    }
  ];
  constructor() { }

  toggle() {
    this.toggled = ! this.toggled;
  }

  getSidebarState() {
    return this.toggled;
  }

  setSidebarState(state: boolean) {
    this.toggled = state;
  }

  getMenuList() {
    return this.menus;
  }

  get hasBackgroundImage() {
    return this._hasBackgroundImage;
  }

  set hasBackgroundImage(hasBackgroundImage) {
    this._hasBackgroundImage = hasBackgroundImage;
  }
}
