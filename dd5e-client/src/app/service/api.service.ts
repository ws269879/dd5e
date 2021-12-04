import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'http://www.dnd5eapi.co/api'

  constructor(private _http: HttpClient) { }


  async getAlignments() {
    try {
      const url = `${this.baseUrl}/alignments`
      return await this._http.get<IApiResponse>(url).toPromise()
    } catch (e) {
      return null
    }
  }

  async getClasses() {
    try {
      const url = `${this.baseUrl}/classes`
      return await this._http.get<IApiResponse>(url).toPromise()
    } catch (e) {
      return null
    }
  }

  async getFeats() {
    try {
      const url = `${this.baseUrl}/feats`
      return await this._http.get<IApiResponse>(url).toPromise()
    } catch (e) {
      return null
    }
  }

  async getLanguages() {
    try {
      const url = `${this.baseUrl}/languages`
      return await this._http.get<IApiResponse>(url).toPromise()
    } catch (e) {
      return null
    }
  }

  async getMagicSchools() {
    try {
      const url = `${this.baseUrl}/magic-schools`
      return await this._http.get<IApiResponse>(url).toPromise()
    } catch (e) {
      return null
    }
  }

  async getMonsters() {
    try {
      const url = `${this.baseUrl}/monsters`
      return await this._http.get<IApiResponse>(url).toPromise()
    } catch (e) {
      return null
    }
  }

  async getRaces() {
    try {
      const url = `${this.baseUrl}/races`
      return await this._http.get<IApiResponse>(url).toPromise()
    } catch (e) {
      return null
    }
  }

  async getSkills() {
    try {
      const url = `${this.baseUrl}/skills`
      return await this._http.get<IApiResponse>(url).toPromise()
    } catch (e) {
      return null
    }
  }

  async getSpells() {
    try {
      const url = `${this.baseUrl}/spells`
      return await this._http.get<IApiResponse>(url).toPromise()
    } catch (e) {
      return null
    }
  }

  async getTraits() {
    try {
      const url = `${this.baseUrl}/traits`
      return await this._http.get<IApiResponse>(url).toPromise()
    } catch (e) {
      return null
    }
  }
}

interface IApiResponse {
  count: number;
  results: IResponseData[];
}

export interface IResponseData {
  index: string;
  name: string;
  url: string;
}
