const personaje = {
    id: "",
    userId: "",
    name: "",
    stats: {
        wisdom: "",
        power: "",
        strength: "",
        agility: "",
        mana: ""
    },
    money: "",
    level: "",
    enemiesDefeated: [
        {
            enemyId: ""
        },
        {
            enemyId: ""
        }
    ],
    sashaGrade: "",
    weapons: [
        {
            weaponId: "",
            stats: { // ! Esto representa la cantidad de puntos que suma a cada stat original. El calculo no se va a tener que siempre porque cuando se compra se hace update, pero está bueno tenerlo como info.
                wisdom: "",
                power: "",
                strength: "",
                agility: "",
                mana: ""
            }
        },
        {
            weaponId: "",
            stats: {
                wisdom: "",
                power: "",
                strength: "",
                agility: "",
                mana: ""
            }
        }
    ]
}