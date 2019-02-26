type HeroVillain = 'Heroe' | 'Villain';

export interface IHeroVillain {
    uid: string;
    name: string;
    desc: string;
    photo: string;
    since: any;
    type: HeroVillain;
}