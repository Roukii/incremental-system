import {IgtFeature} from "incremental-game-template";
import {SkillsSaveData} from "./SkillsSaveData";
import {SkillId} from "./SkillId";
import {Skill} from "./Skill";

export class Skills extends IgtFeature {

    skills: Skill[];

    concentration: Skill;
    coordination: Skill;
    fitness: Skill;
    meditation: Skill;
    vigor: Skill;
    painResistance: Skill;
    stressResistance: Skill;
    fireResistance: Skill;
    slashResistance: Skill;
    impactResistance: Skill;

    constructor() {
        super('skills');
        this.concentration = new Skill("Concentration", SkillId.Concentration);
        this.coordination = new Skill("Coordination", SkillId.Coordination);
        this.fitness = new Skill("Fitness", SkillId.Fitness);
        this.meditation = new Skill("Meditation", SkillId.Meditation);
        this.vigor = new Skill("Vigor", SkillId.Vigor);
        this.painResistance = new Skill("Pain Resistance", SkillId.PainResistance);
        this.stressResistance = new Skill("Stress Resistance", SkillId.StressResistance);
        this.fireResistance = new Skill("Fire Resistance", SkillId.FireResistance);
        this.slashResistance = new Skill("Slash Resistance", SkillId.SlashResistance);
        this.impactResistance = new Skill("Impact Resistance", SkillId.ImpactResistance);
        this.skills = [
            this.concentration,
            this.coordination,
            this.fitness,
            this.meditation,
            this.vigor,
            this.painResistance,
            this.stressResistance,
            this.fireResistance,
            this.slashResistance,
            this.impactResistance,
        ];
    }

    getSkill(id: SkillId) {
        return this.skills.find(skill => {
            return skill.id === id;
        })
    }

    gainExperience(id: SkillId, amount: number) {
        this.getSkill(id)?.gainExperience(amount);
    }

    load(data: SkillsSaveData): void {
        if (data.skills) {
            data.skills.forEach(savedSkill => {
                const skill = this.getSkill(savedSkill.id);
                if (skill) {
                    skill.exp = savedSkill.exp;
                }
            })
        }
    }

    save(): SkillsSaveData {
        const skills = this.skills.map(skill => {
            return {
                id: skill.id,
                exp: skill.exp,
            }
        });
        return {
            skills: skills
        }
    }
}