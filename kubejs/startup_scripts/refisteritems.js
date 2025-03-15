StartupEvents.registry('item',event => {
    event.create("organic_matter").texture("arcane_ragnarok:items/organicmatter").displayName("Organic Matter")
    event.create("iron_microorganisms").texture("arcane_ragnarok:items/ironmicroorganisms").displayName("Iron Microorganisms")
    event.create("bioironingot").texture("arcane_ragnarok:items/bioironingot").displayName("Bio Iron Ingot")
})
StartupEvents.registry('fluid',event => {
    event.create("nutrient_solution")
        .color(0xA5A838)
        .stillTexture('minecraft:block/water_still')
        .flowingTexture('minecraft:block/water_flow')
        .bucketColor(0xA5A838)
        .displayName("Nutrient Solution")
})