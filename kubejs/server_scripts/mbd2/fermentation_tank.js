ServerEvents.recipes(event => {
    event.recipes.mbd2.fermentation_tank()
        .id("mbd2:fermentation_tank_kubejs")
        .duration(1200)
        .priority(-1)
        .inputItems('kubejs:iron_microorganisms','6x kubejs:organic_matter')
        .chance(0.3,builder => builder
            .outputItems('2x minecraft:iron_ingot')
        )
        .inputFluids('minecraft:water 1000')
        .dayLight(true)
})