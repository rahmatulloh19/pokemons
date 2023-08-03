const pokemons = [
	{
		"id": 1,
		"name": "Bulbasaur",
		"img": "http://www.serebii.net/pokemongo/pokemon/001.png",
		"type": [
			"Grass",
			"Poison"
		],
		"height": 0.71,
		"weight": 6.9,
		"candy": "Bulbasaur Candy",
		"candy_count": 25,
		"egg": "2 km",
		"spawn_chance": 0.69,
		"avg_spawns": 69,
		"spawn_time": "20:00",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Fire",
			"Ice",
			"Flying",
			"Psychic"
		],
		"next_evolution": [
			{
				"num": "002",
				"name": "Ivysaur"
			},
			{
				"num": "003",
				"name": "Venusaur"
			}
		]
	},
	{
		"id": 2,
		"name": "Ivysaur",
		"img": "http://www.serebii.net/pokemongo/pokemon/002.png",
		"type": [
			"Grass",
			"Poison"
		],
		"height": 0.99,
		"weight": 13,
		"candy": "Bulbasaur Candy",
		"candy_count": 100,
		"egg": "Not in Eggs",
		"spawn_chance": 0.042,
		"avg_spawns": 4.2,
		"spawn_time": "07:00",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Fire",
			"Ice",
			"Flying",
			"Psychic"
		],
		"next_evolution": [
			{
				"num": "003",
				"name": "Venusaur"
			}
		]
	},
	{
		"id": 3,
		"name": "Venusaur",
		"img": "http://www.serebii.net/pokemongo/pokemon/003.png",
		"type": [
			"Grass",
			"Poison"
		],
		"height": 2.01,
		"weight": 100,
		"candy": "Bulbasaur Candy",
		"egg": "Not in Eggs",
		"spawn_chance": 0.017,
		"avg_spawns": 1.7,
		"spawn_time": "11:30",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Fire",
			"Ice",
			"Flying",
			"Psychic"
		]
	},
	{
		"id": 4,
		"name": "Charmander",
		"img": "http://www.serebii.net/pokemongo/pokemon/004.png",
		"type": [
			"Fire"
		],
		"height": 0.61,
		"weight": 8.5,
		"candy": "Charmander Candy",
		"candy_count": 25,
		"egg": "2 km",
		"spawn_chance": 0.253,
		"avg_spawns": 25.3,
		"spawn_time": "08:45",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Water",
			"Ground",
			"Rock"
		],
		"next_evolution": [
			{
				"num": "005",
				"name": "Charmeleon"
			},
			{
				"num": "006",
				"name": "Charizard"
			}
		]
	},
	{
		"id": 5,
		"name": "Charmeleon",
		"img": "http://www.serebii.net/pokemongo/pokemon/005.png",
		"type": [
			"Fire"
		],
		"height": 1.09,
		"weight": 19,
		"candy": "Charmander Candy",
		"candy_count": 100,
		"egg": "Not in Eggs",
		"spawn_chance": 0.012,
		"avg_spawns": 1.2,
		"spawn_time": "19:00",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Water",
			"Ground",
			"Rock"
		],
		"next_evolution": [
			{
				"num": "006",
				"name": "Charizard"
			}
		]
	},
	{
		"id": 6,
		"name": "Charizard",
		"img": "http://www.serebii.net/pokemongo/pokemon/006.png",
		"type": [
			"Fire",
			"Flying"
		],
		"height": 1.7,
		"weight": 90.5,
		"candy": "Charmander Candy",
		"egg": "Not in Eggs",
		"spawn_chance": 0.0031,
		"avg_spawns": 0.31,
		"spawn_time": "13:34",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Water",
			"Electric",
			"Rock"
		]
	},
	{
		"id": 7,
		"name": "Squirtle",
		"img": "http://www.serebii.net/pokemongo/pokemon/007.png",
		"type": [
			"Water"
		],
		"height": 0.51,
		"weight": 9,
		"candy": "Squirtle Candy",
		"candy_count": 25,
		"egg": "2 km",
		"spawn_chance": 0.58,
		"avg_spawns": 58,
		"spawn_time": "04:25",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Electric",
			"Grass"
		],
		"next_evolution": [
			{
				"num": "008",
				"name": "Wartortle"
			},
			{
				"num": "009",
				"name": "Blastoise"
			}
		]
	},
	{
		"id": 8,
		"name": "Wartortle",
		"img": "http://www.serebii.net/pokemongo/pokemon/008.png",
		"type": [
			"Water"
		],
		"height": 0.99,
		"weight": 22.5,
		"candy": "Squirtle Candy",
		"candy_count": 100,
		"egg": "Not in Eggs",
		"spawn_chance": 0.034,
		"avg_spawns": 3.4,
		"spawn_time": "07:02",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Electric",
			"Grass"
		],
		"next_evolution": [
			{
				"num": "009",
				"name": "Blastoise"
			}
		]
	},
	{
		"id": 9,
		"name": "Blastoise",
		"img": "http://www.serebii.net/pokemongo/pokemon/009.png",
		"type": [
			"Water"
		],
		"height": 1.6,
		"weight": 85.5,
		"candy": "Squirtle Candy",
		"egg": "Not in Eggs",
		"spawn_chance": 0.0067,
		"avg_spawns": 0.67,
		"spawn_time": "00:06",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Electric",
			"Grass"
		]
	},
	{
		"id": 10,
		"name": "Caterpie",
		"img": "http://www.serebii.net/pokemongo/pokemon/010.png",
		"type": [
			"Bug"
		],
		"height": 0.3,
		"weight": 2.9,
		"candy": "Caterpie Candy",
		"candy_count": 12,
		"egg": "2 km",
		"spawn_chance": 3.032,
		"avg_spawns": 303.2,
		"spawn_time": "16:35",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Fire",
			"Flying",
			"Rock"
		],
		"next_evolution": [
			{
				"num": "011",
				"name": "Metapod"
			},
			{
				"num": "012",
				"name": "Butterfree"
			}
		]
	},
	{
		"id": 11,
		"name": "Metapod",
		"img": "http://www.serebii.net/pokemongo/pokemon/011.png",
		"type": [
			"Bug"
		],
		"height": 0.71,
		"weight": 9.9,
		"candy": "Caterpie Candy",
		"candy_count": 50,
		"egg": "Not in Eggs",
		"spawn_chance": 0.187,
		"avg_spawns": 18.7,
		"spawn_time": "02:11",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Fire",
			"Flying",
			"Rock"
		],
		"next_evolution": [
			{
				"num": "012",
				"name": "Butterfree"
			}
		]
	},
	{
		"id": 12,
		"name": "Butterfree",
		"img": "http://www.serebii.net/pokemongo/pokemon/012.png",
		"type": [
			"Bug",
			"Flying"
		],
		"height": 1.09,
		"weight": 32,
		"candy": "Caterpie Candy",
		"egg": "Not in Eggs",
		"spawn_chance": 0.022,
		"avg_spawns": 2.2,
		"spawn_time": "05:23",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Fire",
			"Electric",
			"Ice",
			"Flying",
			"Rock"
		]
	},
	{
		"id": 13,
		"name": "Weedle",
		"img": "http://www.serebii.net/pokemongo/pokemon/013.png",
		"type": [
			"Bug",
			"Poison"
		],
		"height": 0.3,
		"weight": 3.2,
		"candy": "Weedle Candy",
		"candy_count": 12,
		"egg": "2 km",
		"spawn_chance": 7.12,
		"avg_spawns": 712,
		"spawn_time": "02:21",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Fire",
			"Flying",
			"Psychic",
			"Rock"
		],
		"next_evolution": [
			{
				"num": "014",
				"name": "Kakuna"
			},
			{
				"num": "015",
				"name": "Beedrill"
			}
		]
	},
	{
		"id": 14,
		"name": "Kakuna",
		"img": "http://www.serebii.net/pokemongo/pokemon/014.png",
		"type": [
			"Bug",
			"Poison"
		],
		"height": 0.61,
		"weight": 10,
		"candy": "Weedle Candy",
		"candy_count": 50,
		"egg": "Not in Eggs",
		"spawn_chance": 0.44,
		"avg_spawns": 44,
		"spawn_time": "02:30",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Fire",
			"Flying",
			"Psychic",
			"Rock"
		],
		"next_evolution": [
			{
				"num": "015",
				"name": "Beedrill"
			}
		]
	},
	{
		"id": 15,
		"name": "Beedrill",
		"img": "http://www.serebii.net/pokemongo/pokemon/015.png",
		"type": [
			"Bug",
			"Poison"
		],
		"height": 0.99,
		"weight": 29.5,
		"candy": "Weedle Candy",
		"egg": "Not in Eggs",
		"spawn_chance": 0.051,
		"avg_spawns": 5.1,
		"spawn_time": "04:50",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Fire",
			"Flying",
			"Psychic",
			"Rock"
		]
	},
	{
		"id": 16,
		"name": "Pidgey",
		"img": "http://www.serebii.net/pokemongo/pokemon/016.png",
		"type": [
			"Normal",
			"Flying"
		],
		"height": 0.3,
		"weight": 1.8,
		"candy": "Pidgey Candy",
		"candy_count": 12,
		"egg": "2 km",
		"spawn_chance": 15.98,
		"avg_spawns": 1.598,
		"spawn_time": "01:34",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Electric",
			"Rock"
		],
		"next_evolution": [
			{
				"num": "017",
				"name": "Pidgeotto"
			},
			{
				"num": "018",
				"name": "Pidgeot"
			}
		]
	},
	{
		"id": 17,
		"name": "Pidgeotto",
		"img": "http://www.serebii.net/pokemongo/pokemon/017.png",
		"type": [
			"Normal",
			"Flying"
		],
		"height": 1.09,
		"weight": 30,
		"candy": "Pidgey Candy",
		"candy_count": 50,
		"egg": "Not in Eggs",
		"spawn_chance": 1.02,
		"avg_spawns": 102,
		"spawn_time": "01:30",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Electric",
			"Rock"
		],
		"next_evolution": [
			{
				"num": "018",
				"name": "Pidgeot"
			}
		]
	},
	{
		"id": 18,
		"name": "Pidgeot",
		"img": "http://www.serebii.net/pokemongo/pokemon/018.png",
		"type": [
			"Normal",
			"Flying"
		],
		"height": 1.5,
		"weight": 39.5,
		"candy": "Pidgey Candy",
		"egg": "Not in Eggs",
		"spawn_chance": 0.13,
		"avg_spawns": 13,
		"spawn_time": "01:50",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Electric",
			"Rock"
		]
	},
	{
		"id": 19,
		"name": "Rattata",
		"img": "http://www.serebii.net/pokemongo/pokemon/019.png",
		"type": [
			"Normal"
		],
		"height": 0.3,
		"weight": 3.5,
		"candy": "Rattata Candy",
		"candy_count": 25,
		"egg": "2 km",
		"spawn_chance": 13.05,
		"avg_spawns": 1.305,
		"spawn_time": "01:55",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Fighting"
		],
		"next_evolution": [
			{
				"num": "020",
				"name": "Raticate"
			}
		]
	},
	{
		"id": 20,
		"name": "Raticate",
		"img": "http://www.serebii.net/pokemongo/pokemon/020.png",
		"type": [
			"Normal"
		],
		"height": 0.71,
		"weight": 18.5,
		"candy": "Rattata Candy",
		"egg": "Not in Eggs",
		"spawn_chance": 0.41,
		"avg_spawns": 41,
		"spawn_time": "01:56",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Fighting"
		]
	},
	{
		"id": 21,
		"name": "Spearow",
		"img": "http://www.serebii.net/pokemongo/pokemon/021.png",
		"type": [
			"Normal",
			"Flying"
		],
		"height": 0.3,
		"weight": 2,
		"candy": "Spearow Candy",
		"candy_count": 50,
		"egg": "2 km",
		"spawn_chance": 4.73,
		"avg_spawns": 473,
		"spawn_time": "12:25",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Electric",
			"Rock"
		],
		"next_evolution": [
			{
				"num": "022",
				"name": "Fearow"
			}
		]
	},
	{
		"id": 22,
		"name": "Fearow",
		"img": "http://www.serebii.net/pokemongo/pokemon/022.png",
		"type": [
			"Normal",
			"Flying"
		],
		"height": 1.19,
		"weight": 38,
		"candy": "Spearow Candy",
		"egg": "Not in Eggs",
		"spawn_chance": 0.15,
		"avg_spawns": 15,
		"spawn_time": "01:11",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Electric",
			"Rock"
		]
	},
	{
		"id": 23,
		"name": "Ekans",
		"img": "http://www.serebii.net/pokemongo/pokemon/023.png",
		"type": [
			"Poison"
		],
		"height": 2.01,
		"weight": 6.9,
		"candy": "Ekans Candy",
		"candy_count": 50,
		"egg": "5 km",
		"spawn_chance": 2.27,
		"avg_spawns": 227,
		"spawn_time": "12:20",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Ground",
			"Psychic"
		],
		"next_evolution": [
			{
				"num": "024",
				"name": "Arbok"
			}
		]
	},
	{
		"id": 24,
		"name": "Arbok",
		"img": "http://www.serebii.net/pokemongo/pokemon/024.png",
		"type": [
			"Poison"
		],
		"height": 3.51,
		"weight": 65,
		"candy": "Ekans Candy",
		"egg": "Not in Eggs",
		"spawn_chance": 0.072,
		"avg_spawns": 7.2,
		"spawn_time": "01:50",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Ground",
			"Psychic"
		]
	},
	{
		"id": 25,
		"name": "Pikachu",
		"img": "http://www.serebii.net/pokemongo/pokemon/025.png",
		"type": [
			"Electric"
		],
		"height": 0.41,
		"weight": 6,
		"candy": "Pikachu Candy",
		"candy_count": 50,
		"egg": "2 km",
		"spawn_chance": 0.21,
		"avg_spawns": 21,
		"spawn_time": "04:00",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Ground"
		],
		"next_evolution": [
			{
				"num": "026",
				"name": "Raichu"
			}
		]
	},
	{
		"id": 26,
		"name": "Raichu",
		"img": "http://www.serebii.net/pokemongo/pokemon/026.png",
		"type": [
			"Electric"
		],
		"height": 0.79,
		"weight": 30,
		"candy": "Pikachu Candy",
		"egg": "Not in Eggs",
		"spawn_chance": 0.0076,
		"avg_spawns": 0.76,
		"spawn_time": "23:58",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Ground"
		]
	},
	{
		"id": 27,
		"name": "Sandshrew",
		"img": "http://www.serebii.net/pokemongo/pokemon/027.png",
		"type": [
			"Ground"
		],
		"height": 0.61,
		"weight": 12,
		"candy": "Sandshrew Candy",
		"candy_count": 50,
		"egg": "5 km",
		"spawn_chance": 1.11,
		"avg_spawns": 111,
		"spawn_time": "01:58",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Water",
			"Grass",
			"Ice"
		],
		"next_evolution": [
			{
				"num": "028",
				"name": "Sandslash"
			}
		]
	},
	{
		"id": 28,
		"name": "Sandslash",
		"img": "http://www.serebii.net/pokemongo/pokemon/028.png",
		"type": [
			"Ground"
		],
		"height": 0.99,
		"weight": 29.5,
		"candy": "Sandshrew Candy",
		"egg": "Not in Eggs",
		"spawn_chance": 0.037,
		"avg_spawns": 3.7,
		"spawn_time": "12:34",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Water",
			"Grass",
			"Ice"
		]
	},
	{
		"id": 29,
		"name": "Nidoran ♀ (Female)",
		"img": "http://www.serebii.net/pokemongo/pokemon/029.png",
		"type": [
			"Poison"
		],
		"height": 0.41,
		"weight": 7,
		"candy": "Nidoran ♀ (Female) Candy",
		"candy_count": 25,
		"egg": "5 km",
		"spawn_chance": 1.38,
		"avg_spawns": 138,
		"spawn_time": "01:51",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Ground",
			"Psychic"
		],
		"next_evolution": [
			{
				"num": "030",
				"name": "Nidorina"
			},
			{
				"num": "031",
				"name": "Nidoqueen"
			}
		]
	},
	{
		"id": 30,
		"name": "Nidorina",
		"img": "http://www.serebii.net/pokemongo/pokemon/030.png",
		"type": [
			"Poison"
		],
		"height": 0.79,
		"weight": 20,
		"candy": "Nidoran ♀ (Female) Candy",
		"candy_count": 100,
		"egg": "Not in Eggs",
		"spawn_chance": 0.088,
		"avg_spawns": 8.8,
		"spawn_time": "07:22",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Ground",
			"Psychic"
		],
		"next_evolution": [
			{
				"num": "031",
				"name": "Nidoqueen"
			}
		]
	},
	{
		"id": 31,
		"name": "Nidoqueen",
		"img": "http://www.serebii.net/pokemongo/pokemon/031.png",
		"type": [
			"Poison",
			"Ground"
		],
		"height": 1.3,
		"weight": 60,
		"candy": "Nidoran ♀ (Female) Candy",
		"egg": "Not in Eggs",
		"spawn_chance": 0.012,
		"avg_spawns": 1.2,
		"spawn_time": "12:35",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Water",
			"Ice",
			"Ground",
			"Psychic"
		]
	},
	{
		"id": 32,
		"name": "Nidoran ♂ (Male)",
		"img": "http://www.serebii.net/pokemongo/pokemon/032.png",
		"type": [
			"Poison"
		],
		"height": 0.51,
		"weight": 9,
		"candy": "Nidoran ♂ (Male) Candy",
		"candy_count": 25,
		"egg": "5 km",
		"spawn_chance": 1.31,
		"avg_spawns": 131,
		"spawn_time": "01:12",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Ground",
			"Psychic"
		],
		"next_evolution": [
			{
				"num": "033",
				"name": "Nidorino"
			},
			{
				"num": "034",
				"name": "Nidoking"
			}
		]
	},
	{
		"id": 33,
		"name": "Nidorino",
		"img": "http://www.serebii.net/pokemongo/pokemon/033.png",
		"type": [
			"Poison"
		],
		"height": 0.89,
		"weight": 19.5,
		"candy": "Nidoran ♂ (Male) Candy",
		"candy_count": 100,
		"egg": "Not in Eggs",
		"spawn_chance": 0.083,
		"avg_spawns": 8.3,
		"spawn_time": "09:02",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Ground",
			"Psychic"
		],
		"next_evolution": [
			{
				"num": "034",
				"name": "Nidoking"
			}
		]
	},
	{
		"id": 34,
		"name": "Nidoking",
		"img": "http://www.serebii.net/pokemongo/pokemon/034.png",
		"type": [
			"Poison",
			"Ground"
		],
		"height": 1.4,
		"weight": 62,
		"candy": "Nidoran ♂ (Male) Candy",
		"egg": "Not in Eggs",
		"spawn_chance": 0.017,
		"avg_spawns": 1.7,
		"spawn_time": "12:16",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Water",
			"Ice",
			"Ground",
			"Psychic"
		]
	},
	{
		"id": 35,
		"name": "Clefairy",
		"img": "http://www.serebii.net/pokemongo/pokemon/035.png",
		"type": [
			"Normal"
		],
		"height": 0.61,
		"weight": 7.5,
		"candy": "Clefairy Candy",
		"candy_count": 50,
		"egg": "2 km",
		"spawn_chance": 0.92,
		"avg_spawns": 92,
		"spawn_time": "03:30",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Fighting"
		],
		"next_evolution": [
			{
				"num": "036",
				"name": "Clefable"
			}
		]
	},
	{
		"id": 36,
		"name": "Clefable",
		"img": "http://www.serebii.net/pokemongo/pokemon/036.png",
		"type": [
			"Normal"
		],
		"height": 1.3,
		"weight": 40,
		"candy": "Clefairy Candy",
		"egg": "Not in Eggs",
		"spawn_chance": 0.012,
		"avg_spawns": 1.2,
		"spawn_time": "03:29",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Fighting"
		]
	},
	{
		"id": 37,
		"name": "Vulpix",
		"img": "http://www.serebii.net/pokemongo/pokemon/037.png",
		"type": [
			"Fire"
		],
		"height": 0.61,
		"weight": 9.9,
		"candy": "Vulpix Candy",
		"candy_count": 50,
		"egg": "5 km",
		"spawn_chance": 0.22,
		"avg_spawns": 22,
		"spawn_time": "13:43",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Water",
			"Ground",
			"Rock"
		],
		"next_evolution": [
			{
				"num": "038",
				"name": "Ninetales"
			}
		]
	},
	{
		"id": 38,
		"name": "Ninetales",
		"img": "http://www.serebii.net/pokemongo/pokemon/038.png",
		"type": [
			"Fire"
		],
		"height": 1.09,
		"weight": 19.9,
		"candy": "Vulpix Candy",
		"egg": "Not in Eggs",
		"spawn_chance": 0.0077,
		"avg_spawns": 0.77,
		"spawn_time": "01:32",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Water",
			"Ground",
			"Rock"
		]
	},
	{
		"id": 39,
		"name": "Jigglypuff",
		"img": "http://www.serebii.net/pokemongo/pokemon/039.png",
		"type": [
			"Normal"
		],
		"height": 0.51,
		"weight": 5.5,
		"candy": "Jigglypuff Candy",
		"candy_count": 50,
		"egg": "2 km",
		"spawn_chance": 0.39,
		"avg_spawns": 39,
		"spawn_time": "08:46",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Fighting"
		],
		"next_evolution": [
			{
				"num": "040",
				"name": "Wigglytuff"
			}
		]
	},
	{
		"id": 40,
		"name": "Wigglytuff",
		"img": "http://www.serebii.net/pokemongo/pokemon/040.png",
		"type": [
			"Normal"
		],
		"height": 0.99,
		"weight": 12,
		"candy": "Jigglypuff Candy",
		"egg": "Not in Eggs",
		"spawn_chance": 0.018,
		"avg_spawns": 1.8,
		"spawn_time": "12:28",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Fighting"
		]
	},
	{
		"id": 41,
		"name": "Zubat",
		"img": "http://www.serebii.net/pokemongo/pokemon/041.png",
		"type": [
			"Poison",
			"Flying"
		],
		"height": 0.79,
		"weight": 7.5,
		"candy": "Zubat Candy",
		"candy_count": 50,
		"egg": "2 km",
		"spawn_chance": 6.52,
		"avg_spawns": 652,
		"spawn_time": "12:28",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Electric",
			"Ice",
			"Psychic",
			"Rock"
		],
		"next_evolution": [
			{
				"num": "042",
				"name": "Golbat"
			}
		]
	},
	{
		"id": 42,
		"name": "Golbat",
		"img": "http://www.serebii.net/pokemongo/pokemon/042.png",
		"type": [
			"Poison",
			"Flying"
		],
		"height": 1.6,
		"weight": 55,
		"candy": "Zubat Candy",
		"egg": "Not in Eggs",
		"spawn_chance": 0.42,
		"avg_spawns": 42,
		"spawn_time": "02:15",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Electric",
			"Ice",
			"Psychic",
			"Rock"
		]
	},
	{
		"id": 43,
		"name": "Oddish",
		"img": "http://www.serebii.net/pokemongo/pokemon/043.png",
		"type": [
			"Grass",
			"Poison"
		],
		"height": 0.51,
		"weight": 5.4,
		"candy": "Oddish Candy",
		"candy_count": 25,
		"egg": "5 km",
		"spawn_chance": 1.02,
		"avg_spawns": 102,
		"spawn_time": "03:58",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Fire",
			"Ice",
			"Flying",
			"Psychic"
		],
		"next_evolution": [
			{
				"num": "044",
				"name": "Gloom"
			},
			{
				"num": "045",
				"name": "Vileplume"
			}
		]
	},
	{
		"id": 44,
		"name": "Gloom",
		"img": "http://www.serebii.net/pokemongo/pokemon/044.png",
		"type": [
			"Grass",
			"Poison"
		],
		"height": 0.79,
		"weight": 8.6,
		"candy": "Oddish Candy",
		"candy_count": 100,
		"egg": "Not in Eggs",
		"spawn_chance": 0.064,
		"avg_spawns": 6.4,
		"spawn_time": "11:33",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Fire",
			"Ice",
			"Flying",
			"Psychic"
		],
		"next_evolution": [
			{
				"num": "045",
				"name": "Vileplume"
			}
		]
	},
	{
		"id": 45,
		"name": "Vileplume",
		"img": "http://www.serebii.net/pokemongo/pokemon/045.png",
		"type": [
			"Grass",
			"Poison"
		],
		"height": 1.19,
		"weight": 18.6,
		"candy": "Oddish Candy",
		"egg": "Not in Eggs",
		"spawn_chance": 0.0097,
		"avg_spawns": 0.97,
		"spawn_time": "23:58",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Fire",
			"Ice",
			"Flying",
			"Psychic"
		]
	},
	{
		"id": 46,
		"name": "Paras",
		"img": "http://www.serebii.net/pokemongo/pokemon/046.png",
		"type": [
			"Bug",
			"Grass"
		],
		"height": 0.3,
		"weight": 5.4,
		"candy": "Paras Candy",
		"candy_count": 50,
		"egg": "5 km",
		"spawn_chance": 2.36,
		"avg_spawns": 236,
		"spawn_time": "01:42",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Fire",
			"Ice",
			"Poison",
			"Flying",
			"Bug",
			"Rock"
		],
		"next_evolution": [
			{
				"num": "047",
				"name": "Parasect"
			}
		]
	},
	{
		"id": 47,
		"name": "Parasect",
		"img": "http://www.serebii.net/pokemongo/pokemon/047.png",
		"type": [
			"Bug",
			"Grass"
		],
		"height": 0.99,
		"weight": 29.5,
		"candy": "Paras Candy",
		"egg": "Not in Eggs",
		"spawn_chance": 0.074,
		"avg_spawns": 7.4,
		"spawn_time": "01:22",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Fire",
			"Ice",
			"Poison",
			"Flying",
			"Bug",
			"Rock"
		]
	},
	{
		"id": 48,
		"name": "Venonat",
		"img": "http://www.serebii.net/pokemongo/pokemon/048.png",
		"type": [
			"Bug",
			"Poison"
		],
		"height": 0.99,
		"weight": 30,
		"candy": "Venonat Candy",
		"candy_count": 50,
		"egg": "5 km",
		"spawn_chance": 2.28,
		"avg_spawns": 228,
		"spawn_time": "02:31",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Fire",
			"Flying",
			"Psychic",
			"Rock"
		],
		"next_evolution": [
			{
				"num": "049",
				"name": "Venomoth"
			}
		]
	},
	{
		"id": 49,
		"name": "Venomoth",
		"img": "http://www.serebii.net/pokemongo/pokemon/049.png",
		"type": [
			"Bug",
			"Poison"
		],
		"height": 1.5,
		"weight": 12.5,
		"candy": "Venonat Candy",
		"egg": "Not in Eggs",
		"spawn_chance": 0.072,
		"avg_spawns": 7.2,
		"spawn_time": "23:40",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Fire",
			"Flying",
			"Psychic",
			"Rock"
		]
	},
	{
		"id": 50,
		"name": "Diglett",
		"img": "http://www.serebii.net/pokemongo/pokemon/050.png",
		"type": [
			"Ground"
		],
		"height": 0.2,
		"weight": 0.8,
		"candy": "Diglett Candy",
		"candy_count": 50,
		"egg": "5 km",
		"spawn_chance": 0.4,
		"avg_spawns": 40,
		"spawn_time": "02:22",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Water",
			"Grass",
			"Ice"
		],
		"next_evolution": [
			{
				"num": "051",
				"name": "Dugtrio"
			}
		]
	},
	{
		"id": 51,
		"name": "Dugtrio",
		"img": "http://www.serebii.net/pokemongo/pokemon/051.png",
		"type": [
			"Ground"
		],
		"height": 0.71,
		"weight": 33.3,
		"candy": "Dugtrio",
		"egg": "Not in Eggs",
		"spawn_chance": 0.014,
		"avg_spawns": 1.4,
		"spawn_time": "12:37",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Water",
			"Grass",
			"Ice"
		]
	},
	{
		"id": 52,
		"name": "Meowth",
		"img": "http://www.serebii.net/pokemongo/pokemon/052.png",
		"type": [
			"Normal"
		],
		"height": 0.41,
		"weight": 4.2,
		"candy": "Meowth Candy",
		"candy_count": 50,
		"egg": "5 km",
		"spawn_chance": 0.86,
		"avg_spawns": 86,
		"spawn_time": "02:54",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Fighting"
		],
		"next_evolution": [
			{
				"num": "053",
				"name": "Persian"
			}
		]
	},
	{
		"id": 53,
		"name": "Persian",
		"img": "http://www.serebii.net/pokemongo/pokemon/053.png",
		"type": [
			"Normal"
		],
		"height": 0.99,
		"weight": 32,
		"candy": "Meowth Candy",
		"egg": "Not in Eggs",
		"spawn_chance": 0.022,
		"avg_spawns": 2.2,
		"spawn_time": "02:44",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Fighting"
		]
	},
	{
		"id": 54,
		"name": "Psyduck",
		"img": "http://www.serebii.net/pokemongo/pokemon/054.png",
		"type": [
			"Water"
		],
		"height": 0.79,
		"weight": 19.6,
		"candy": "Psyduck Candy",
		"candy_count": 50,
		"egg": "5 km",
		"spawn_chance": 2.54,
		"avg_spawns": 254,
		"spawn_time": "03:41",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Electric",
			"Grass"
		],
		"next_evolution": [
			{
				"num": "055",
				"name": "Golduck"
			}
		]
	},
	{
		"id": 55,
		"name": "Golduck",
		"img": "http://www.serebii.net/pokemongo/pokemon/055.png",
		"type": [
			"Water"
		],
		"height": 1.7,
		"weight": 76.6,
		"candy": "Psyduck Candy",
		"egg": "Not in Eggs",
		"spawn_chance": 0.087,
		"avg_spawns": 8.7,
		"spawn_time": "23:06",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Electric",
			"Grass"
		]
	},
	{
		"id": 56,
		"name": "Mankey",
		"img": "http://www.serebii.net/pokemongo/pokemon/056.png",
		"type": [
			"Fighting"
		],
		"height": 0.51,
		"weight": 28,
		"candy": "Mankey Candy",
		"candy_count": 50,
		"egg": "5 km",
		"spawn_chance": 0.92,
		"avg_spawns": 92,
		"spawn_time": "12:52",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Flying",
			"Psychic",
			"Fairy"
		],
		"next_evolution": [
			{
				"num": "057",
				"name": "Primeape"
			}
		]
	},
	{
		"id": 57,
		"name": "Primeape",
		"img": "http://www.serebii.net/pokemongo/pokemon/057.png",
		"type": [
			"Fighting"
		],
		"height": 0.99,
		"weight": 32,
		"candy": "Mankey Candy",
		"egg": "Not in Eggs",
		"spawn_chance": 0.031,
		"avg_spawns": 3.1,
		"spawn_time": "12:33",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Flying",
			"Psychic",
			"Fairy"
		]
	},
	{
		"id": 58,
		"name": "Growlithe",
		"img": "http://www.serebii.net/pokemongo/pokemon/058.png",
		"type": [
			"Fire"
		],
		"height": 0.71,
		"weight": 19,
		"candy": "Growlithe Candy",
		"candy_count": 50,
		"egg": "5 km",
		"spawn_chance": 0.92,
		"avg_spawns": 92,
		"spawn_time": "03:57",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Water",
			"Ground",
			"Rock"
		],
		"next_evolution": [
			{
				"num": "059",
				"name": "Arcanine"
			}
		]
	},
	{
		"id": 59,
		"name": "Arcanine",
		"img": "http://www.serebii.net/pokemongo/pokemon/059.png",
		"type": [
			"Fire"
		],
		"height": 1.91,
		"weight": 155,
		"candy": "Growlithe Candy",
		"egg": "Not in Eggs",
		"spawn_chance": 0.017,
		"avg_spawns": 1.7,
		"spawn_time": "03:11",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Water",
			"Ground",
			"Rock"
		]
	},
	{
		"id": 60,
		"name": "Poliwag",
		"img": "http://www.serebii.net/pokemongo/pokemon/060.png",
		"type": [
			"Water"
		],
		"height": 0.61,
		"weight": 12.4,
		"candy": "Poliwag Candy",
		"candy_count": 25,
		"egg": "5 km",
		"spawn_chance": 2.19,
		"avg_spawns": 219,
		"spawn_time": "03:40",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Electric",
			"Grass"
		],
		"next_evolution": [
			{
				"num": "061",
				"name": "Poliwhirl"
			},
			{
				"num": "062",
				"name": "Poliwrath"
			}
		]
	},
	{
		"id": 61,
		"name": "Poliwhirl",
		"img": "http://www.serebii.net/pokemongo/pokemon/061.png",
		"type": [
			"Water"
		],
		"height": 0.99,
		"weight": 20,
		"candy": "Poliwag Candy",
		"candy_count": 100,
		"egg": "Not in Eggs",
		"spawn_chance": 0.13,
		"avg_spawns": 13,
		"spawn_time": "09:14",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Electric",
			"Grass"
		],
		"next_evolution": [
			{
				"num": "062",
				"name": "Poliwrath"
			}
		]
	},
	{
		"id": 62,
		"name": "Poliwrath",
		"img": "http://www.serebii.net/pokemongo/pokemon/062.png",
		"type": [
			"Water",
			"Fighting"
		],
		"height": 1.3,
		"weight": 54,
		"candy": "Poliwag Candy",
		"egg": "Not in Eggs",
		"spawn_chance": 0.011,
		"avg_spawns": 1.1,
		"spawn_time": "01:32",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Electric",
			"Grass",
			"Flying",
			"Psychic",
			"Fairy"
		]
	},
	{
		"id": 63,
		"name": "Abra",
		"img": "http://www.serebii.net/pokemongo/pokemon/063.png",
		"type": [
			"Psychic"
		],
		"height": 0.89,
		"weight": 19.5,
		"candy": "Abra Candy",
		"candy_count": 25,
		"egg": "5 km",
		"spawn_chance": 0.42,
		"avg_spawns": 42,
		"spawn_time": "04:30",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Bug",
			"Ghost",
			"Dark"
		],
		"next_evolution": [
			{
				"num": "064",
				"name": "Kadabra"
			},
			{
				"num": "065",
				"name": "Alakazam"
			}
		]
	},
	{
		"id": 64,
		"name": "Kadabra",
		"img": "http://www.serebii.net/pokemongo/pokemon/064.png",
		"type": [
			"Psychic"
		],
		"height": 1.3,
		"weight": 56.5,
		"candy": "Abra Candy",
		"candy_count": 100,
		"egg": "Not in Eggs",
		"spawn_chance": 0.027,
		"avg_spawns": 2.7,
		"spawn_time": "11:25",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Bug",
			"Ghost",
			"Dark"
		],
		"next_evolution": [
			{
				"num": "065",
				"name": "Alakazam"
			}
		]
	},
	{
		"id": 65,
		"name": "Alakazam",
		"img": "http://www.serebii.net/pokemongo/pokemon/065.png",
		"type": [
			"Psychic"
		],
		"height": 1.5,
		"weight": 48,
		"candy": "Abra Candy",
		"egg": "Not in Eggs",
		"spawn_chance": 0.0073,
		"avg_spawns": 0.73,
		"spawn_time": "12:33",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Bug",
			"Ghost",
			"Dark"
		]
	},
	{
		"id": 66,
		"name": "Machop",
		"img": "http://www.serebii.net/pokemongo/pokemon/066.png",
		"type": [
			"Fighting"
		],
		"height": 0.79,
		"weight": 19.5,
		"candy": "Machop Candy",
		"candy_count": 25,
		"egg": "5 km",
		"spawn_chance": 0.49,
		"avg_spawns": 49,
		"spawn_time": "01:55",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Flying",
			"Psychic",
			"Fairy"
		],
		"next_evolution": [
			{
				"num": "067",
				"name": "Machoke"
			},
			{
				"num": "068",
				"name": "Machamp"
			}
		]
	},
	{
		"id": 67,
		"name": "Machoke",
		"img": "http://www.serebii.net/pokemongo/pokemon/067.png",
		"type": [
			"Fighting"
		],
		"height": 1.5,
		"weight": 70.5,
		"candy": "Machop Candy",
		"candy_count": 100,
		"egg": "Not in Eggs",
		"spawn_chance": 0.034,
		"avg_spawns": 3.4,
		"spawn_time": "10:32",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Flying",
			"Psychic",
			"Fairy"
		],
		"next_evolution": [
			{
				"num": "068",
				"name": "Machamp"
			}
		]
	},
	{
		"id": 68,
		"name": "Machamp",
		"img": "http://www.serebii.net/pokemongo/pokemon/068.png",
		"type": [
			"Fighting"
		],
		"height": 1.6,
		"weight": 130,
		"candy": "Machop Candy",
		"egg": "Not in Eggs",
		"spawn_chance": 0.0068,
		"avg_spawns": 0.68,
		"spawn_time": "02:55",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Flying",
			"Psychic",
			"Fairy"
		]
	},
	{
		"id": 69,
		"name": "Bellsprout",
		"img": "http://www.serebii.net/pokemongo/pokemon/069.png",
		"type": [
			"Grass",
			"Poison"
		],
		"height": 0.71,
		"weight": 4,
		"candy": "Bellsprout Candy",
		"candy_count": 25,
		"egg": "5 km",
		"spawn_chance": 1.15,
		"avg_spawns": 115,
		"spawn_time": "04:10",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Fire",
			"Ice",
			"Flying",
			"Psychic"
		],
		"next_evolution": [
			{
				"num": "070",
				"name": "Weepinbell"
			},
			{
				"num": "071",
				"name": "Victreebel"
			}
		]
	},
	{
		"id": 70,
		"name": "Weepinbell",
		"img": "http://www.serebii.net/pokemongo/pokemon/070.png",
		"type": [
			"Grass",
			"Poison"
		],
		"height": 0.99,
		"weight": 6.4,
		"candy": "Bellsprout Candy",
		"candy_count": 100,
		"egg": "Not in Eggs",
		"spawn_chance": 0.072,
		"avg_spawns": 7.2,
		"spawn_time": "09:45",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Fire",
			"Ice",
			"Flying",
			"Psychic"
		],
		"next_evolution": [
			{
				"num": "071",
				"name": "Victreebel"
			}
		]
	},
	{
		"id": 71,
		"name": "Victreebel",
		"img": "http://www.serebii.net/pokemongo/pokemon/071.png",
		"type": [
			"Grass",
			"Poison"
		],
		"height": 1.7,
		"weight": 15.5,
		"candy": "Bellsprout Candy",
		"egg": "Not in Eggs",
		"spawn_chance": 0.0059,
		"avg_spawns": 0.59,
		"spawn_time": "12:19",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Fire",
			"Ice",
			"Flying",
			"Psychic"
		]
	},
	{
		"id": 72,
		"name": "Tentacool",
		"img": "http://www.serebii.net/pokemongo/pokemon/072.png",
		"type": [
			"Water",
			"Poison"
		],
		"height": 0.89,
		"weight": 45.5,
		"candy": "Tentacool Candy",
		"candy_count": 50,
		"egg": "5 km",
		"spawn_chance": 0.81,
		"avg_spawns": 81,
		"spawn_time": "03:20",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Electric",
			"Ground",
			"Psychic"
		],
		"next_evolution": [
			{
				"num": "073",
				"name": "Tentacruel"
			}
		]
	},
	{
		"id": 73,
		"name": "Tentacruel",
		"img": "http://www.serebii.net/pokemongo/pokemon/073.png",
		"type": [
			"Water",
			"Poison"
		],
		"height": 1.6,
		"weight": 55,
		"candy": "Tentacool Candy",
		"egg": "Not in Eggs",
		"spawn_chance": 0.082,
		"avg_spawns": 8.2,
		"spawn_time": "23:36",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Electric",
			"Ground",
			"Psychic"
		]
	},
	{
		"id": 74,
		"name": "Geodude",
		"img": "http://www.serebii.net/pokemongo/pokemon/074.png",
		"type": [
			"Rock",
			"Ground"
		],
		"height": 0.41,
		"weight": 20,
		"candy": "Geodude Candy",
		"candy_count": 25,
		"egg": "2 km",
		"spawn_chance": 1.19,
		"avg_spawns": 119,
		"spawn_time": "12:40",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Water",
			"Grass",
			"Ice",
			"Fighting",
			"Ground",
			"Steel"
		],
		"next_evolution": [
			{
				"num": "075",
				"name": "Graveler"
			},
			{
				"num": "076",
				"name": "Golem"
			}
		]
	},
	{
		"id": 75,
		"name": "Graveler",
		"img": "http://www.serebii.net/pokemongo/pokemon/075.png",
		"type": [
			"Rock",
			"Ground"
		],
		"height": 0.99,
		"weight": 105,
		"candy": "Geodude Candy",
		"candy_count": 100,
		"egg": "Not in Eggs",
		"spawn_chance": 0.071,
		"avg_spawns": 7.1,
		"spawn_time": "04:53",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Water",
			"Grass",
			"Ice",
			"Fighting",
			"Ground",
			"Steel"
		],
		"next_evolution": [
			{
				"num": "076",
				"name": "Golem"
			}
		]
	},
	{
		"id": 76,
		"name": "Golem",
		"img": "http://www.serebii.net/pokemongo/pokemon/076.png",
		"type": [
			"Rock",
			"Ground"
		],
		"height": 1.4,
		"weight": 300,
		"candy": "Geodude Candy",
		"egg": "Not in Eggs",
		"spawn_chance": 0.0047,
		"avg_spawns": 0.47,
		"spawn_time": "12:16",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Water",
			"Grass",
			"Ice",
			"Fighting",
			"Ground",
			"Steel"
		]
	},
	{
		"id": 77,
		"name": "Ponyta",
		"img": "http://www.serebii.net/pokemongo/pokemon/077.png",
		"type": [
			"Fire"
		],
		"height": 0.99,
		"weight": 30,
		"candy": "Ponyta Candy",
		"candy_count": 50,
		"egg": "5 km",
		"spawn_chance": 0.51,
		"avg_spawns": 51,
		"spawn_time": "02:50",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Water",
			"Ground",
			"Rock"
		],
		"next_evolution": [
			{
				"num": "078",
				"name": "Rapidash"
			}
		]
	},
	{
		"id": 78,
		"name": "Rapidash",
		"img": "http://www.serebii.net/pokemongo/pokemon/078.png",
		"type": [
			"Fire"
		],
		"height": 1.7,
		"weight": 95,
		"candy": "Ponyta Candy",
		"egg": "Not in Eggs",
		"spawn_chance": 0.011,
		"avg_spawns": 1.1,
		"spawn_time": "04:00",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Water",
			"Ground",
			"Rock"
		]
	},
	{
		"id": 79,
		"name": "Slowpoke",
		"img": "http://www.serebii.net/pokemongo/pokemon/079.png",
		"type": [
			"Water",
			"Psychic"
		],
		"height": 1.19,
		"weight": 36,
		"candy": "Slowpoke Candy",
		"candy_count": 50,
		"egg": "5 km",
		"spawn_chance": 1.05,
		"avg_spawns": 105,
		"spawn_time": "07:12",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Electric",
			"Grass",
			"Bug",
			"Ghost",
			"Dark"
		],
		"next_evolution": [
			{
				"num": "080",
				"name": "Slowbro"
			}
		]
	},
	{
		"id": 80,
		"name": "Slowbro",
		"img": "http://www.serebii.net/pokemongo/pokemon/080.png",
		"type": [
			"Water",
			"Psychic"
		],
		"height": 1.6,
		"weight": 78.5,
		"candy": "Slowpoke Candy",
		"egg": "Not in Eggs",
		"spawn_chance": 0.036,
		"avg_spawns": 3.6,
		"spawn_time": "02:56",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Electric",
			"Grass",
			"Bug",
			"Ghost",
			"Dark"
		]
	},
	{
		"id": 81,
		"name": "Magnemite",
		"img": "http://www.serebii.net/pokemongo/pokemon/081.png",
		"type": [
			"Electric"
		],
		"height": 0.3,
		"weight": 6,
		"candy": "Magnemite Candy",
		"candy_count": 50,
		"egg": "5 km",
		"spawn_chance": 0.71,
		"avg_spawns": 71,
		"spawn_time": "04:04",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Fire",
			"Water",
			"Ground"
		],
		"next_evolution": [
			{
				"num": "082",
				"name": "Magneton"
			}
		]
	},
	{
		"id": 82,
		"name": "Magneton",
		"img": "http://www.serebii.net/pokemongo/pokemon/082.png",
		"type": [
			"Electric"
		],
		"height": 0.99,
		"weight": 60,
		"candy": "Magnemite Candy",
		"egg": "Not in Eggs",
		"spawn_chance": 0.023,
		"avg_spawns": 2.3,
		"spawn_time": "15:25",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Fire",
			"Water",
			"Ground"
		]
	},
	{
		"id": 83,
		"name": "Farfetch'd",
		"img": "http://www.serebii.net/pokemongo/pokemon/083.png",
		"type": [
			"Normal",
			"Flying"
		],
		"height": 0.79,
		"weight": 15,
		"candy": "None",
		"egg": "5 km",
		"spawn_chance": 0.0212,
		"avg_spawns": 2.12,
		"spawn_time": "01:09",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Electric",
			"Rock"
		]
	},
	{
		"id": 84,
		"name": "Doduo",
		"img": "http://www.serebii.net/pokemongo/pokemon/084.png",
		"type": [
			"Normal",
			"Flying"
		],
		"height": 1.4,
		"weight": 39.2,
		"candy": "Doduo Candy",
		"candy_count": 50,
		"egg": "5 km",
		"spawn_chance": 0.52,
		"avg_spawns": 52,
		"spawn_time": "05:10",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Electric",
			"Rock"
		],
		"next_evolution": [
			{
				"num": "085",
				"name": "Dodrio"
			}
		]
	},
	{
		"id": 85,
		"name": "Dodrio",
		"img": "http://www.serebii.net/pokemongo/pokemon/085.png",
		"type": [
			"Normal",
			"Flying"
		],
		"height": 1.8,
		"weight": 85.2,
		"candy": "Doduo Candy",
		"egg": "Not in Eggs",
		"spawn_chance": 0.22,
		"avg_spawns": 22,
		"spawn_time": "02:12",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Electric",
			"Rock"
		]
	},
	{
		"id": 86,
		"name": "Seel",
		"img": "http://www.serebii.net/pokemongo/pokemon/086.png",
		"type": [
			"Water"
		],
		"height": 1.09,
		"weight": 90,
		"candy": "Seel Candy",
		"candy_count": 50,
		"egg": "5 km",
		"spawn_chance": 0.28,
		"avg_spawns": 28,
		"spawn_time": "06:46",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Electric",
			"Grass"
		],
		"next_evolution": [
			{
				"num": "087",
				"name": "Dewgong"
			}
		]
	},
	{
		"id": 87,
		"name": "Dewgong",
		"img": "http://www.serebii.net/pokemongo/pokemon/087.png",
		"type": [
			"Water",
			"Ice"
		],
		"height": 1.7,
		"weight": 120,
		"candy": "Seel Candy",
		"egg": "Not in Eggs",
		"spawn_chance": 0.013,
		"avg_spawns": 1.3,
		"spawn_time": "06:04",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Electric",
			"Grass",
			"Fighting",
			"Rock"
		]
	},
	{
		"id": 88,
		"name": "Grimer",
		"img": "http://www.serebii.net/pokemongo/pokemon/088.png",
		"type": [
			"Poison"
		],
		"height": 0.89,
		"weight": 30,
		"candy": "Grimer Candy",
		"candy_count": 50,
		"egg": "5 km",
		"spawn_chance": 0.052,
		"avg_spawns": 5.2,
		"spawn_time": "15:11",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Ground",
			"Psychic"
		],
		"next_evolution": [
			{
				"num": "089",
				"name": "Muk"
			}
		]
	},
	{
		"id": 89,
		"name": "Muk",
		"img": "http://www.serebii.net/pokemongo/pokemon/089.png",
		"type": [
			"Poison"
		],
		"height": 1.19,
		"weight": 30,
		"candy": "Grimer Candy",
		"egg": "Not in Eggs",
		"spawn_chance": 0.0031,
		"avg_spawns": 0.31,
		"spawn_time": "01:28",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Ground",
			"Psychic"
		]
	},
	{
		"id": 90,
		"name": "Shellder",
		"img": "http://www.serebii.net/pokemongo/pokemon/090.png",
		"type": [
			"Water"
		],
		"height": 0.3,
		"weight": 4,
		"candy": "Shellder Candy",
		"candy_count": 50,
		"egg": "5 km",
		"spawn_chance": 0.52,
		"avg_spawns": 52,
		"spawn_time": "07:39",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Electric",
			"Grass"
		],
		"next_evolution": [
			{
				"num": "091",
				"name": "Cloyster"
			}
		]
	},
	{
		"id": 91,
		"name": "Cloyster",
		"img": "http://www.serebii.net/pokemongo/pokemon/091.png",
		"type": [
			"Water",
			"Ice"
		],
		"height": 1.5,
		"weight": 132.5,
		"candy": "Shellder Candy",
		"egg": "Not in Eggs",
		"spawn_chance": 0.015,
		"avg_spawns": 1.5,
		"spawn_time": "02:33",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Electric",
			"Grass",
			"Fighting",
			"Rock"
		]
	},
	{
		"id": 92,
		"name": "Gastly",
		"img": "http://www.serebii.net/pokemongo/pokemon/092.png",
		"type": [
			"Ghost",
			"Poison"
		],
		"height": 1.3,
		"weight": 0.1,
		"candy": "Gastly Candy",
		"candy_count": 25,
		"egg": "5 km",
		"spawn_chance": 0.79,
		"avg_spawns": 79,
		"spawn_time": "04:21",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Ground",
			"Psychic",
			"Ghost",
			"Dark"
		],
		"next_evolution": [
			{
				"num": "093",
				"name": "Haunter"
			},
			{
				"num": "094",
				"name": "Gengar"
			}
		]
	},
	{
		"id": 93,
		"name": "Haunter",
		"img": "http://www.serebii.net/pokemongo/pokemon/093.png",
		"type": [
			"Ghost",
			"Poison"
		],
		"height": 1.6,
		"weight": 0.1,
		"candy": "Gastly Candy",
		"candy_count": 100,
		"egg": "Not in Eggs",
		"spawn_chance": 0.052,
		"avg_spawns": 5.2,
		"spawn_time": "00:10",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Ground",
			"Psychic",
			"Ghost",
			"Dark"
		],
		"next_evolution": [
			{
				"num": "094",
				"name": "Gengar"
			}
		]
	},
	{
		"id": 94,
		"name": "Gengar",
		"img": "http://www.serebii.net/pokemongo/pokemon/094.png",
		"type": [
			"Ghost",
			"Poison"
		],
		"height": 1.5,
		"weight": 40.5,
		"candy": "Gastly Candy",
		"egg": "Not in Eggs",
		"spawn_chance": 0.0067,
		"avg_spawns": 0.67,
		"spawn_time": "03:55",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Ground",
			"Psychic",
			"Ghost",
			"Dark"
		]
	},
	{
		"id": 95,
		"name": "Onix",
		"img": "http://www.serebii.net/pokemongo/pokemon/095.png",
		"type": [
			"Rock",
			"Ground"
		],
		"height": 8.79,
		"weight": 210,
		"candy": "None",
		"egg": "10 km",
		"spawn_chance": 0.1,
		"avg_spawns": 10,
		"spawn_time": "01:18",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Water",
			"Grass",
			"Ice",
			"Fighting",
			"Ground",
			"Steel"
		]
	},
	{
		"id": 96,
		"name": "Drowzee",
		"img": "http://www.serebii.net/pokemongo/pokemon/096.png",
		"type": [
			"Psychic"
		],
		"height": 0.99,
		"weight": 32.4,
		"candy": "Drowzee Candy",
		"candy_count": 50,
		"egg": "5 km",
		"spawn_chance": 3.21,
		"avg_spawns": 321,
		"spawn_time": "01:51",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Bug",
			"Ghost",
			"Dark"
		],
		"next_evolution": [
			{
				"num": "097",
				"name": "Hypno"
			}
		]
	},
	{
		"id": 97,
		"name": "Hypno",
		"img": "http://www.serebii.net/pokemongo/pokemon/097.png",
		"type": [
			"Psychic"
		],
		"height": 1.6,
		"weight": 75.6,
		"candy": "Drowzee Candy",
		"egg": "Not in Eggs",
		"spawn_chance": 0.1,
		"avg_spawns": 10,
		"spawn_time": "02:17",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Bug",
			"Ghost",
			"Dark"
		]
	},
	{
		"id": 98,
		"name": "Krabby",
		"img": "http://www.serebii.net/pokemongo/pokemon/098.png",
		"type": [
			"Water"
		],
		"height": 0.41,
		"weight": 6.5,
		"candy": "Krabby Candy",
		"candy_count": 50,
		"egg": "5 km",
		"spawn_chance": 2.12,
		"avg_spawns": 212,
		"spawn_time": "03:33",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Electric",
			"Grass"
		],
		"next_evolution": [
			{
				"num": "099",
				"name": "Kingler"
			}
		]
	},
	{
		"id": 99,
		"name": "Kingler",
		"img": "http://www.serebii.net/pokemongo/pokemon/099.png",
		"type": [
			"Water"
		],
		"height": 1.3,
		"weight": 60,
		"candy": "Krabby Candy",
		"egg": "Not in Eggs",
		"spawn_chance": 0.062,
		"avg_spawns": 6.2,
		"spawn_time": "03:44",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Electric",
			"Grass"
		]
	},
	{
		"id": 100,
		"name": "Voltorb",
		"img": "http://www.serebii.net/pokemongo/pokemon/100.png",
		"type": [
			"Electric"
		],
		"height": 0.51,
		"weight": 10.4,
		"candy": "Voltorb Candy",
		"candy_count": 50,
		"egg": "5 km",
		"spawn_chance": 0.65,
		"avg_spawns": 65,
		"spawn_time": "04:36",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Ground"
		],
		"next_evolution": [
			{
				"num": "101",
				"name": "Electrode"
			}
		]
	},
	{
		"id": 101,
		"name": "Electrode",
		"img": "http://www.serebii.net/pokemongo/pokemon/101.png",
		"type": [
			"Electric"
		],
		"height": 1.19,
		"weight": 66.6,
		"candy": "Voltorb Candy",
		"egg": "Not in Eggs",
		"spawn_chance": 0.02,
		"avg_spawns": 2,
		"spawn_time": "04:10",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Ground"
		]
	},
	{
		"id": 102,
		"name": "Exeggcute",
		"img": "http://www.serebii.net/pokemongo/pokemon/102.png",
		"type": [
			"Grass",
			"Psychic"
		],
		"height": 0.41,
		"weight": 2.5,
		"candy": "Exeggcute Candy",
		"candy_count": 50,
		"egg": "5 km",
		"spawn_chance": 0.78,
		"avg_spawns": 78,
		"spawn_time": "09:09",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Fire",
			"Ice",
			"Poison",
			"Flying",
			"Bug",
			"Ghost",
			"Dark"
		],
		"next_evolution": [
			{
				"num": "103",
				"name": "Exeggutor"
			}
		]
	},
	{
		"id": 103,
		"name": "Exeggutor",
		"img": "http://www.serebii.net/pokemongo/pokemon/103.png",
		"type": [
			"Grass",
			"Psychic"
		],
		"height": 2.01,
		"weight": 120,
		"candy": "Exeggcute Candy",
		"egg": "Not in Eggs",
		"spawn_chance": 0.014,
		"avg_spawns": 1.4,
		"spawn_time": "12:34",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Fire",
			"Ice",
			"Poison",
			"Flying",
			"Bug",
			"Ghost",
			"Dark"
		]
	},
	{
		"id": 104,
		"name": "Cubone",
		"img": "http://www.serebii.net/pokemongo/pokemon/104.png",
		"type": [
			"Ground"
		],
		"height": 0.41,
		"weight": 6.5,
		"candy": "Cubone Candy",
		"candy_count": 50,
		"egg": "5 km",
		"spawn_chance": 0.61,
		"avg_spawns": 61,
		"spawn_time": "01:51",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Water",
			"Grass",
			"Ice"
		],
		"next_evolution": [
			{
				"num": "105",
				"name": "Marowak"
			}
		]
	},
	{
		"id": 105,
		"name": "Marowak",
		"img": "http://www.serebii.net/pokemongo/pokemon/105.png",
		"type": [
			"Ground"
		],
		"height": 0.99,
		"weight": 45,
		"candy": "Cubone Candy",
		"egg": "Not in Eggs",
		"spawn_chance": 0.02,
		"avg_spawns": 2,
		"spawn_time": "03:59",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Water",
			"Grass",
			"Ice"
		]
	},
	{
		"id": 106,
		"name": "Hitmonlee",
		"img": "http://www.serebii.net/pokemongo/pokemon/106.png",
		"type": [
			"Fighting"
		],
		"height": 1.5,
		"weight": 49.8,
		"candy": "None",
		"egg": "10 km",
		"spawn_chance": 0.02,
		"avg_spawns": 2,
		"spawn_time": "03:59",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Flying",
			"Psychic",
			"Fairy"
		]
	},
	{
		"id": 107,
		"name": "Hitmonchan",
		"img": "http://www.serebii.net/pokemongo/pokemon/107.png",
		"type": [
			"Fighting"
		],
		"height": 1.4,
		"weight": 50.2,
		"candy": "None",
		"egg": "10 km",
		"spawn_chance": 0.022,
		"avg_spawns": 2.2,
		"spawn_time": "05:58",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Flying",
			"Psychic",
			"Fairy"
		]
	},
	{
		"id": 108,
		"name": "Lickitung",
		"img": "http://www.serebii.net/pokemongo/pokemon/108.png",
		"type": [
			"Normal"
		],
		"height": 1.19,
		"weight": 65.5,
		"candy": "None",
		"egg": "5 km",
		"spawn_chance": 0.011,
		"avg_spawns": 1.1,
		"spawn_time": "02:46",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Fighting"
		]
	},
	{
		"id": 109,
		"name": "Koffing",
		"img": "http://www.serebii.net/pokemongo/pokemon/109.png",
		"type": [
			"Poison"
		],
		"height": 0.61,
		"weight": 1,
		"candy": "Koffing Candy",
		"candy_count": 50,
		"egg": "5 km",
		"spawn_chance": 0.2,
		"avg_spawns": 20,
		"spawn_time": "08:16",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Ground",
			"Psychic"
		],
		"next_evolution": [
			{
				"num": "110",
				"name": "Weezing"
			}
		]
	},
	{
		"id": 110,
		"name": "Weezing",
		"img": "http://www.serebii.net/pokemongo/pokemon/110.png",
		"type": [
			"Poison"
		],
		"height": 1.19,
		"weight": 9.5,
		"candy": "Koffing Candy",
		"egg": "Not in Eggs",
		"spawn_chance": 0.016,
		"avg_spawns": 1.6,
		"spawn_time": "12:17",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Ground",
			"Psychic"
		]
	},
	{
		"id": 111,
		"name": "Rhyhorn",
		"img": "http://www.serebii.net/pokemongo/pokemon/111.png",
		"type": [
			"Ground",
			"Rock"
		],
		"height": 0.99,
		"weight": 115,
		"candy": "Rhyhorn Candy",
		"candy_count": 50,
		"egg": "5 km",
		"spawn_chance": 0.63,
		"avg_spawns": 63,
		"spawn_time": "03:21",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Water",
			"Grass",
			"Ice",
			"Fighting",
			"Ground",
			"Steel"
		],
		"next_evolution": [
			{
				"num": "112",
				"name": "Rhydon"
			}
		]
	},
	{
		"id": 112,
		"name": "Rhydon",
		"img": "http://www.serebii.net/pokemongo/pokemon/112.png",
		"type": [
			"Ground",
			"Rock"
		],
		"height": 1.91,
		"weight": 120,
		"candy": "Rhyhorn Candy",
		"egg": "Not in Eggs",
		"spawn_chance": 0.022,
		"avg_spawns": 2.2,
		"spawn_time": "05:50",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Water",
			"Grass",
			"Ice",
			"Fighting",
			"Ground",
			"Steel"
		]
	},
	{
		"id": 113,
		"name": "Chansey",
		"img": "http://www.serebii.net/pokemongo/pokemon/113.png",
		"type": [
			"Normal"
		],
		"height": 1.09,
		"weight": 34.6,
		"candy": "None",
		"egg": "10 km",
		"spawn_chance": 0.013,
		"avg_spawns": 1.3,
		"spawn_time": "04:46",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Fighting"
		]
	},
	{
		"id": 114,
		"name": "Tangela",
		"img": "http://www.serebii.net/pokemongo/pokemon/114.png",
		"type": [
			"Grass"
		],
		"height": 0.99,
		"weight": 35,
		"candy": "None",
		"egg": "5 km",
		"spawn_chance": 0.228,
		"avg_spawns": 22.8,
		"spawn_time": "23:13",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Fire",
			"Ice",
			"Poison",
			"Flying",
			"Bug"
		]
	},
	{
		"id": 115,
		"name": "Kangaskhan",
		"img": "http://www.serebii.net/pokemongo/pokemon/115.png",
		"type": [
			"Normal"
		],
		"height": 2.21,
		"weight": 80,
		"candy": "None",
		"egg": "5 km",
		"spawn_chance": 0.0086,
		"avg_spawns": 0.86,
		"spawn_time": "02:40",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Fighting"
		]
	},
	{
		"id": 116,
		"name": "Horsea",
		"img": "http://www.serebii.net/pokemongo/pokemon/116.png",
		"type": [
			"Water"
		],
		"height": 0.41,
		"weight": 8,
		"candy": "Horsea Candy",
		"candy_count": 50,
		"egg": "5 km",
		"spawn_chance": 1.13,
		"avg_spawns": 113,
		"spawn_time": "02:53",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Electric",
			"Grass"
		],
		"next_evolution": [
			{
				"num": "117",
				"name": "Seadra"
			}
		]
	},
	{
		"id": 117,
		"name": "Seadra",
		"img": "http://www.serebii.net/pokemongo/pokemon/117.png",
		"type": [
			"Water"
		],
		"height": 1.19,
		"weight": 25,
		"candy": "Horsea Candy",
		"egg": "Not in Eggs",
		"spawn_chance": 0.034,
		"avg_spawns": 3.4,
		"spawn_time": "03:18",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Electric",
			"Grass"
		]
	},
	{
		"id": 118,
		"name": "Goldeen",
		"img": "http://www.serebii.net/pokemongo/pokemon/118.png",
		"type": [
			"Water"
		],
		"height": 0.61,
		"weight": 15,
		"candy": "Goldeen Candy",
		"candy_count": 50,
		"egg": "5 km",
		"spawn_chance": 2.18,
		"avg_spawns": 218,
		"spawn_time": "03:14",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Electric",
			"Grass"
		],
		"next_evolution": [
			{
				"num": "119",
				"name": "Seaking"
			}
		]
	},
	{
		"id": 119,
		"name": "Seaking",
		"img": "http://www.serebii.net/pokemongo/pokemon/119.png",
		"type": [
			"Water"
		],
		"height": 1.3,
		"weight": 39,
		"candy": "Goldeen Candy",
		"egg": "Not in Eggs",
		"spawn_chance": 0.08,
		"avg_spawns": 8,
		"spawn_time": "05:21",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Electric",
			"Grass"
		]
	},
	{
		"id": 120,
		"name": "Staryu",
		"img": "http://www.serebii.net/pokemongo/pokemon/120.png",
		"type": [
			"Water"
		],
		"height": 0.79,
		"weight": 34.5,
		"candy": "Staryu Candy",
		"candy_count": 50,
		"egg": "5 km",
		"spawn_chance": 1.95,
		"avg_spawns": 195,
		"spawn_time": "22:59",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Electric",
			"Grass"
		],
		"next_evolution": [
			{
				"num": "121",
				"name": "Starmie"
			}
		]
	},
	{
		"id": 121,
		"name": "Starmie",
		"img": "http://www.serebii.net/pokemongo/pokemon/121.png",
		"type": [
			"Water",
			"Psychic"
		],
		"height": 1.09,
		"weight": 80,
		"candy": "Staryu Candy",
		"egg": "Not in Eggs",
		"spawn_chance": 0.034,
		"avg_spawns": 3.4,
		"spawn_time": "06:57",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Electric",
			"Grass",
			"Bug",
			"Ghost",
			"Dark"
		]
	},
	{
		"id": 122,
		"name": "Mr. Mime",
		"img": "http://www.serebii.net/pokemongo/pokemon/122.png",
		"type": [
			"Psychic"
		],
		"height": 1.3,
		"weight": 54.5,
		"candy": "None",
		"egg": "10 km",
		"spawn_chance": 0.0031,
		"avg_spawns": 0.31,
		"spawn_time": "01:51",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Bug",
			"Ghost",
			"Dark"
		]
	},
	{
		"id": 123,
		"name": "Scyther",
		"img": "http://www.serebii.net/pokemongo/pokemon/123.png",
		"type": [
			"Bug",
			"Flying"
		],
		"height": 1.5,
		"weight": 56,
		"candy": "None",
		"egg": "10 km",
		"spawn_chance": 0.14,
		"avg_spawns": 14,
		"spawn_time": "05:43",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Fire",
			"Electric",
			"Ice",
			"Flying",
			"Rock"
		]
	},
	{
		"id": 124,
		"name": "Jynx",
		"img": "http://www.serebii.net/pokemongo/pokemon/124.png",
		"type": [
			"Ice",
			"Psychic"
		],
		"height": 1.4,
		"weight": 40.6,
		"candy": "None",
		"egg": "10 km",
		"spawn_chance": 0.35,
		"avg_spawns": 35,
		"spawn_time": "05:41",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Fire",
			"Bug",
			"Rock",
			"Ghost",
			"Dark",
			"Steel"
		]
	},
	{
		"id": 125,
		"name": "Electabuzz",
		"img": "http://www.serebii.net/pokemongo/pokemon/125.png",
		"type": [
			"Electric"
		],
		"height": 1.09,
		"weight": 30,
		"candy": "None",
		"egg": "10 km",
		"spawn_chance": 0.074,
		"avg_spawns": 7.4,
		"spawn_time": "04:28",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Ground"
		]
	},
	{
		"id": 126,
		"name": "Magmar",
		"img": "http://www.serebii.net/pokemongo/pokemon/126.png",
		"type": [
			"Fire"
		],
		"height": 1.3,
		"weight": 44.5,
		"candy": "None",
		"egg": "10 km",
		"spawn_chance": 0.1,
		"avg_spawns": 10,
		"spawn_time": "20:36",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Water",
			"Ground",
			"Rock"
		]
	},
	{
		"id": 127,
		"name": "Pinsir",
		"img": "http://www.serebii.net/pokemongo/pokemon/127.png",
		"type": [
			"Bug"
		],
		"height": 1.5,
		"weight": 55,
		"candy": "None",
		"egg": "10 km",
		"spawn_chance": 0.99,
		"avg_spawns": 99,
		"spawn_time": "03:25",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Fire",
			"Flying",
			"Rock"
		]
	},
	{
		"id": 128,
		"name": "Tauros",
		"img": "http://www.serebii.net/pokemongo/pokemon/128.png",
		"type": [
			"Normal"
		],
		"height": 1.4,
		"weight": 88.4,
		"candy": "None",
		"egg": "5 km",
		"spawn_chance": 0.12,
		"avg_spawns": 12,
		"spawn_time": "00:37",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Fighting"
		]
	},
	{
		"id": 129,
		"name": "Magikarp",
		"img": "http://www.serebii.net/pokemongo/pokemon/129.png",
		"type": [
			"Water"
		],
		"height": 0.89,
		"weight": 10,
		"candy": "Magikarp Candy",
		"candy_count": 400,
		"egg": "2 km",
		"spawn_chance": 4.78,
		"avg_spawns": 478,
		"spawn_time": "14:26",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Electric",
			"Grass"
		],
		"next_evolution": [
			{
				"num": "130",
				"name": "Gyarados"
			}
		]
	},
	{
		"id": 130,
		"name": "Gyarados",
		"img": "http://www.serebii.net/pokemongo/pokemon/130.png",
		"type": [
			"Water",
			"Flying"
		],
		"height": 6.5,
		"weight": 235,
		"candy": "Magikarp Candy",
		"egg": "Not in Eggs",
		"spawn_chance": 0.0032,
		"avg_spawns": 0.32,
		"spawn_time": "02:15",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Electric",
			"Rock"
		]
	},
	{
		"id": 131,
		"name": "Lapras",
		"img": "http://www.serebii.net/pokemongo/pokemon/131.png",
		"type": [
			"Water",
			"Ice"
		],
		"height": 2.49,
		"weight": 220,
		"candy": "None",
		"egg": "10 km",
		"spawn_chance": 0.006,
		"avg_spawns": 0.6,
		"spawn_time": "08:59",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Electric",
			"Grass",
			"Fighting",
			"Rock"
		]
	},
	{
		"id": 132,
		"name": "Ditto",
		"img": "http://www.serebii.net/pokemongo/pokemon/132.png",
		"type": [
			"Normal"
		],
		"height": 0.3,
		"weight": 4,
		"candy": "None",
		"egg": "Not in Eggs",
		"spawn_chance": 0,
		"avg_spawns": 0,
		"spawn_time": "N/A",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Fighting"
		]
	},
	{
		"id": 133,
		"name": "Eevee",
		"img": "http://www.serebii.net/pokemongo/pokemon/133.png",
		"type": [
			"Normal"
		],
		"height": 0.3,
		"weight": 6.5,
		"candy": "Eevee Candy",
		"candy_count": 25,
		"egg": "10 km",
		"spawn_chance": 2.75,
		"avg_spawns": 275,
		"spawn_time": "05:32",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Fighting"
		],
		"next_evolution": [
			{
				"num": "134",
				"name": "Vaporeon"
			},
			{
				"num": "135",
				"name": "Jolteon"
			},
			{
				"num": "136",
				"name": "Flareon"
			}
		]
	},
	{
		"id": 134,
		"name": "Vaporeon",
		"img": "http://www.serebii.net/pokemongo/pokemon/134.png",
		"type": [
			"Water"
		],
		"height": 0.99,
		"weight": 29,
		"candy": "Eevee Candy",
		"egg": "Not in Eggs",
		"spawn_chance": 0.014,
		"avg_spawns": 1.4,
		"spawn_time": "10:54",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Electric",
			"Grass"
		]
	},
	{
		"id": 135,
		"name": "Jolteon",
		"img": "http://www.serebii.net/pokemongo/pokemon/135.png",
		"type": [
			"Electric"
		],
		"height": 0.79,
		"weight": 24.5,
		"candy": "None",
		"egg": "Not in Eggs",
		"spawn_chance": 0.012,
		"avg_spawns": 1.2,
		"spawn_time": "02:30",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Ground"
		]
	},
	{
		"id": 136,
		"name": "Flareon",
		"img": "http://www.serebii.net/pokemongo/pokemon/136.png",
		"type": [
			"Fire"
		],
		"height": 0.89,
		"weight": 25,
		"candy": "Eevee Candy",
		"egg": "Not in Eggs",
		"spawn_chance": 0.017,
		"avg_spawns": 1.7,
		"spawn_time": "07:02",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Water",
			"Ground",
			"Rock"
		]
	},
	{
		"id": 137,
		"name": "Porygon",
		"img": "http://www.serebii.net/pokemongo/pokemon/137.png",
		"type": [
			"Normal"
		],
		"height": 0.79,
		"weight": 36.5,
		"candy": "None",
		"egg": "5 km",
		"spawn_chance": 0.012,
		"avg_spawns": 1.2,
		"spawn_time": "02:49",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Fighting"
		]
	},
	{
		"id": 138,
		"name": "Omanyte",
		"img": "http://www.serebii.net/pokemongo/pokemon/138.png",
		"type": [
			"Rock",
			"Water"
		],
		"height": 0.41,
		"weight": 7.5,
		"candy": "Omanyte Candy",
		"candy_count": 50,
		"egg": "10 km",
		"spawn_chance": 0.14,
		"avg_spawns": 14,
		"spawn_time": "10:23",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Electric",
			"Grass",
			"Fighting",
			"Ground"
		],
		"next_evolution": [
			{
				"num": "139",
				"name": "Omastar"
			}
		]
	},
	{
		"id": 139,
		"name": "Omastar",
		"img": "http://www.serebii.net/pokemongo/pokemon/139.png",
		"type": [
			"Rock",
			"Water"
		],
		"height": 0.99,
		"weight": 35,
		"candy": "None",
		"egg": "Omanyte Candy",
		"spawn_chance": 0.0061,
		"avg_spawns": 0.61,
		"spawn_time": "05:04",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Electric",
			"Grass",
			"Fighting",
			"Ground"
		]
	},
	{
		"id": 140,
		"name": "Kabuto",
		"img": "http://www.serebii.net/pokemongo/pokemon/140.png",
		"type": [
			"Rock",
			"Water"
		],
		"height": 0.51,
		"weight": 11.5,
		"candy": "Kabuto Candy",
		"candy_count": 50,
		"egg": "10 km",
		"spawn_chance": 0.1,
		"avg_spawns": 10,
		"spawn_time": "00:05",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Electric",
			"Grass",
			"Fighting",
			"Ground"
		],
		"next_evolution": [
			{
				"num": "141",
				"name": "Kabutops"
			}
		]
	},
	{
		"id": 141,
		"name": "Kabutops",
		"img": "http://www.serebii.net/pokemongo/pokemon/141.png",
		"type": [
			"Rock",
			"Water"
		],
		"height": 1.3,
		"weight": 40.5,
		"candy": "Kabuto Candy",
		"egg": "Not in Eggs",
		"spawn_chance": 0.0032,
		"avg_spawns": 0.32,
		"spawn_time": "23:40",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Electric",
			"Grass",
			"Fighting",
			"Ground"
		]
	},
	{
		"id": 142,
		"name": "Aerodactyl",
		"img": "http://www.serebii.net/pokemongo/pokemon/142.png",
		"type": [
			"Rock",
			"Flying"
		],
		"height": 1.8,
		"weight": 59,
		"candy": "None",
		"egg": "10 km",
		"spawn_chance": 0.018,
		"avg_spawns": 1.8,
		"spawn_time": "23:40",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Water",
			"Electric",
			"Ice",
			"Rock",
			"Steel"
		]
	},
	{
		"id": 143,
		"name": "Snorlax",
		"img": "http://www.serebii.net/pokemongo/pokemon/143.png",
		"type": [
			"Normal"
		],
		"height": 2.11,
		"weight": 460,
		"candy": "None",
		"egg": "10 km",
		"spawn_chance": 0.016,
		"avg_spawns": 1.6,
		"spawn_time": "23:40",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Fighting"
		]
	},
	{
		"id": 144,
		"name": "Articuno",
		"img": "http://www.serebii.net/pokemongo/pokemon/144.png",
		"type": [
			"Ice",
			"Flying"
		],
		"height": 1.7,
		"weight": 55.4,
		"candy": "None",
		"egg": "Not in Eggs",
		"spawn_chance": 0,
		"avg_spawns": 0,
		"spawn_time": "N/A",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Fire",
			"Electric",
			"Rock",
			"Steel"
		]
	},
	{
		"id": 145,
		"name": "Zapdos",
		"img": "http://www.serebii.net/pokemongo/pokemon/145.png",
		"type": [
			"Electric",
			"Flying"
		],
		"height": 1.6,
		"weight": 52.6,
		"candy": "None",
		"egg": "Not in Eggs",
		"spawn_chance": 0,
		"avg_spawns": 0,
		"spawn_time": "N/A",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Ice",
			"Rock"
		]
	},
	{
		"id": 146,
		"name": "Moltres",
		"img": "http://www.serebii.net/pokemongo/pokemon/146.png",
		"type": [
			"Fire",
			"Flying"
		],
		"height": 2.01,
		"weight": 60,
		"candy": "None",
		"egg": "Not in Eggs",
		"spawn_chance": 0,
		"avg_spawns": 0,
		"spawn_time": "N/A",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Water",
			"Electric",
			"Rock"
		]
	},
	{
		"id": 147,
		"name": "Dratini",
		"img": "http://www.serebii.net/pokemongo/pokemon/147.png",
		"type": [
			"Dragon"
		],
		"height": 1.8,
		"weight": 3.3,
		"candy": "Dratini Candy",
		"candy_count": 25,
		"egg": "10 km",
		"spawn_chance": 0.3,
		"avg_spawns": 30,
		"spawn_time": "06:41",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Ice",
			"Dragon",
			"Fairy"
		],
		"next_evolution": [
			{
				"num": "148",
				"name": "Dragonair"
			},
			{
				"num": "149",
				"name": "Dragonite"
			}
		]
	},
	{
		"id": 148,
		"name": "Dragonair",
		"img": "http://www.serebii.net/pokemongo/pokemon/148.png",
		"type": [
			"Dragon"
		],
		"height": 3.99,
		"weight": 16.5,
		"candy": "Dratini Candy",
		"candy_count": 100,
		"egg": "Not in Eggs",
		"spawn_chance": 0.02,
		"avg_spawns": 2,
		"spawn_time": "11:57",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Ice",
			"Dragon",
			"Fairy"
		],
		"next_evolution": [
			{
				"num": "149",
				"name": "Dragonite"
			}
		]
	},
	{
		"id": 149,
		"name": "Dragonite",
		"img": "http://www.serebii.net/pokemongo/pokemon/149.png",
		"type": [
			"Dragon",
			"Flying"
		],
		"height": 2.21,
		"weight": 210,
		"candy": "Dratini Candy",
		"egg": "Not in Eggs",
		"spawn_chance": 0.0011,
		"avg_spawns": 0.11,
		"spawn_time": "23:38",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Ice",
			"Rock",
			"Dragon",
			"Fairy"
		]
	},
	{
		"id": 150,
		"name": "Mewtwo",
		"img": "http://www.serebii.net/pokemongo/pokemon/150.png",
		"type": [
			"Psychic"
		],
		"height": 2.01,
		"weight": 122,
		"candy": "None",
		"egg": "Not in Eggs",
		"spawn_chance": 0,
		"avg_spawns": 0,
		"spawn_time": "N/A",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Bug",
			"Ghost",
			"Dark"
		]
	},
	{
		"id": 151,
		"name": "Mew",
		"img": "http://www.serebii.net/pokemongo/pokemon/151.png",
		"type": [
			"Psychic"
		],
		"height": 0.41,
		"weight": 4,
		"candy": "None",
		"egg": "Not in Eggs",
		"spawn_chance": 0,
		"avg_spawns": 0,
		"spawn_time": "N/A",
		"multipliers": [
			1.58
		],
		"weaknesses": [
			"Bug",
			"Ghost",
			"Dark"
		]
	}
]