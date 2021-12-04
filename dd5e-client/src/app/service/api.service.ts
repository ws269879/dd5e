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
      return await this._http.get<IApiMultipleResponse>(url).toPromise()
    } catch (e) {
      return null
    }
  }

  async getAlignmentDetails(alignment: string) {
    try {
      const url = `${this.baseUrl}/alignments/${alignment}`
      return await this._http.get<IAlignmentDetails>(url).toPromise()
    } catch (e) {
      return null
    }
  }

  async getClasses() {
    try {
      const url = `${this.baseUrl}/classes`
      return await this._http.get<IApiMultipleResponse>(url).toPromise()
    } catch (e) {
      return null
    }
  }

  async getClassDetails(className: string) {
    try {
      const url = `${this.baseUrl}/classes/${className}`
      return await this._http.get<IClassDetails>(url).toPromise()
    } catch (e) {
      return null
    }
  }

  async getFeats() {
    try {
      const url = `${this.baseUrl}/feats`
      return await this._http.get<IApiMultipleResponse>(url).toPromise()
    } catch (e) {
      return null
    }
  }

  async getFeatDetails(feat: string) {
    try {
      const url = `${this.baseUrl}/feats/${feat}`
      return await this._http.get<IFeatDetails>(url).toPromise()
    } catch (e) {
      return null
    }
  }

  async getLanguages() {
    try {
      const url = `${this.baseUrl}/languages`
      return await this._http.get<IApiMultipleResponse>(url).toPromise()
    } catch (e) {
      return null
    }
  }

  async getLanguageDetails(lang: string) {
    try {
      const url = `${this.baseUrl}/languages/${lang}`
      return await this._http.get<ILanguageDetails>(url).toPromise()
    } catch (e) {
      return null
    }
  }

  async getMagicSchools() {
    try {
      const url = `${this.baseUrl}/magic-schools`
      return await this._http.get<IApiMultipleResponse>(url).toPromise()
    } catch (e) {
      return null
    }
  }

  async getMonsters() {
    try {
      const url = `${this.baseUrl}/monsters`
      return await this._http.get<IApiMultipleResponse>(url).toPromise()
    } catch (e) {
      return null
    }
  }

  async getRaces() {
    try {
      const url = `${this.baseUrl}/races`
      return await this._http.get<IApiMultipleResponse>(url).toPromise()
    } catch (e) {
      return null
    }
  }

  async getSkills() {
    try {
      const url = `${this.baseUrl}/skills`
      return await this._http.get<IApiMultipleResponse>(url).toPromise()
    } catch (e) {
      return null
    }
  }

  async getSpells() {
    try {
      const url = `${this.baseUrl}/spells`
      return await this._http.get<IApiMultipleResponse>(url).toPromise()
    } catch (e) {
      return null
    }
  }

  async getTraits() {
    try {
      const url = `${this.baseUrl}/traits`
      return await this._http.get<IApiMultipleResponse>(url).toPromise()
    } catch (e) {
      return null
    }
  }
}

interface IApiMultipleResponse {
  count: number;
  results: IResponseData[];
}

export interface IResponseData {
  index: string;
  name: string;
  url: string;
}

export interface IAlignmentDetails {
  index: string;
  name: string;
  abbreviation: string;
  desc: string;
  url: string;
}

export interface IClassDetails {
  index: string;
  name: string;
  hit_die: number;
  proficiency_choices: {
    choose: 2;
    type: string;
    from: {
      index: string;
      name: string;
      url: string;
    }[];
  }[];
  proficiencies: {
    index: string;
    name: string;
    url: string;
  }[];
  saving_throws: {
    index: string;
    name: string;
    url: string;
  }[];
  starting_equipment: {
    equipment: {
      index: string;
      name: string;
      url: string;
    };
    quantity: number;
  }[];
  starting_equipment_options: {
    choose: 1;
    type: string;
    from: {
      equipment?: {
        index: string;
        name: string;
        url: string;
      };
      equipment_option?: {
        choose: number;
        type: string;
        from: {
          equipment_category: {
            index: string;
            name: string;
            url: string;
          };
        };
      };
      quantity: number;
    }[];
  }[];
  class_levels: string;
  multi_classing: {
    prerequisites: {
      ability_score: {
        index: string;
        name: string;
        url: string;
      };
      minimum_score: number;
    }[];
    proficiencies: {
      index: string;
      name: string;
      url: string;
    }[];
  };
  subclasses: {
    index: string;
    name: string;
    url: string;
  }[];
  url: string;
}

export interface IFeatDetails {
  name: string;
  url: string;
  index: string;
  prerequisites: {
    ability_score: {
      index: string;
      name: string;
      url: string;
    };
    minimum_score: number;
  }[];
  desc: string[]
}

export interface ILanguageDetails {
  name: string;
  url: string;
  index: string;
  type: string;
  script: string;
  typical_speakers: string[]
}
