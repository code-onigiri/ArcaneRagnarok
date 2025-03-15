ServerEvents.recipes(event => {
  event.shaped('mbd2:fermentation_tank',[
    'P P',
    'P P',
    'PHP'
  ],
  {
    P: 'minecraft:oak_planks',
    H: 'minecraft:oak_slab'
  })
  event.shaped("kubejs:bioironingot", [
        "IOI",
        "OIO",
        "IOI"
    ],
    {
        I: "minecraft:iron_ingot",
        O: "kubejs:organic_matter"
  })
})