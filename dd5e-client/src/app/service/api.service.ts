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

  async getMagicSchoolDetails(school: string) {
    try {
      const url = `${this.baseUrl}/magic-schools/${school}`
      return await this._http.get<IMagicSchoolDetails>(url).toPromise()
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

  async getMonsterDetails(monster: string) {
    try {
      const url = `${this.baseUrl}/monsters/${monster}`
      return await this._http.get<IMonsterDetails>(url).toPromise()
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

  async getRaceDetails(race: string) {
    try {
      const url = `${this.baseUrl}/races/${race}`
      return await this._http.get<IRaceDetails>(url).toPromise()
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

  async getSkillDetails(skill: string) {
    try {
      const url = `${this.baseUrl}/skills/${skill}`
      return await this._http.get<ISkillDetails>(url).toPromise()
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

  async getSpellDetails(spell: string) {
    try {
      const url = `${this.baseUrl}/spells/${spell}`
      return await this._http.get<ISpellDetails>(url).toPromise()
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

  async getTraitDetails(trait: string) {
    try {
      const url = `${this.baseUrl}/traits/${trait}`
      return await this._http.get<ITraitDetails>(url).toPromise()
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

export interface IMagicSchoolDetails {
  name: string;
  url: string;
  index: string;
  desc: string;
}

export interface IMonsterDetails {
  index: string;
  name: string;
  size: string;
  type: string;
  subtype: string | null;
  alignment: string;
  armor_class: number;
  hit_points: number;
  hit_dice: string;
  speed: {
    walk: string;
    swim: string;
  };
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  proficiencies: {
    proficiency: {
      index: string;
      name: string;
      url: string;
    }
    value: number
  }[]
  damage_vulnerabilities: any[];
  damage_resistances: any[];
  damage_immunities: any[];
  condition_immunities: any[];
  senses: {
    darkvision: string;
    passive_perception: number;
  };
  languages: string;
  challenge_rating: number;
  xp: number;
  special_abilities:  {
    name: string;
    desc: string;
    dc?:{
      dc_type:{
        index: string;
        name: string;
        url: string;
      };
      dc_value: number;
      success_type: string;
    }
  }[];
  actions: {
    name: string;
    desc: string;
    usage?: {
      type: string;
      times: number;
    };
    attack_bonus?: number;
    damage?: {
      damage_type: {
        index: string;
        name: string;
        url: string;
      };
      damage_dice: string;
    }[];
    dc?: {
      dc_type:{
        index: string;
        name: string;
        url: string;
      };
      dc_value: number;
      success_type: string;
    };
    options?: {
      choose: number;
      from: {
        name: string;
        count: number;
        type: string;
      }[][];
    };
  }[];
  legendary_actions: {
    name: string;
    desc: string;
    usage?: {
      type: string;
      times: number;
    };
    attack_bonus?: number;
    damage?: {
      damage_type: {
        index: string;
        name: string;
        url: string;
      };
      damage_dice: string;
    }[];
    dc?: {
      dc_type:{
        index: string;
        name: string;
        url: string;
      };
      dc_value: number;
      success_type: string;
    };
    options?: {
      choose: number;
      from: {
        name: string;
        count: number;
        type: string;
      }[][];
    };
  }[];
  url: string;
}

export interface ISkillDetails {
  index: string;
  name: string;
  desc: string[];
  ability_score: {
    index: string;
    name: string;
    url: string;
  };
  url: string;
}

export interface ISpellDetails {
  index: string;
  name:string;
  desc: string[];
  higher_level: string[];
  range: string;
  components: string[];
  material: string;
  ritual: boolean;
  duration: string;
  concentration: boolean;
  casting_time: string;
  level: number;
  attack_type: string;
  damage:{
    damage_type:{
      index: string;
      name: string;
      url: string;
    };
    damage_at_slot_level:{
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
      6: string;
      7: string;
      8: string;
      9: string;
    };
    damage_at_character_level:{
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
      6: string;
      7: string;
      8: string;
      9: string;
      10: string;
      11: string;
      12: string;
      13: string;
      14: string;
      15: string;
      16: string;
      17: string;
      18: string;
    };
  };
  school:{
    index: string;
    name: string;
    url: string;
  };
  classes: {
    index: string;
    name: string;
    url: string;
  }[];
  subclasses:{
    index: string;
    name: string;
    url: string;
  }[];
  url: string;
}

export interface IRaceDetails {
  index: string;
  name: string;
  speed: number;
  ability_bonuses: {
    ability_score:{
      index: string;
      name: string;
      url: string;
    };
    bonus: number;
  }[];
  age: string;
  alignment: string;
  size: string;
  size_description: string;
  starting_proficiencies: {
    index: string;
    name: string;
    url: string;
  }[];
  languages:{
    index: string;
    name: string;
    url: string;
  }[];
  language_desc: string;
  traits:{
    index: string;
    name: string;
    url: string;
  }[];
  subraces:{
    index: string;
    name: string;
    url: string;
  }[];
  url: string;
}

export interface ITraitDetails {
  index: string;
  races:{
    index: string;
    name: string;
    url: string
  }[];
  subraces: {
    index: string;
    name: string;
    url: string;
  }[];
  name: string;
  desc: string[];
  proficiencies: any[];
  url: string;
}

