const express = require('express');

const router = express.Router();

const Cars = [
    {
        "id": 1,
        "name": "DeLorean DMC-12 (Volver al Futuro)",
        "description": "Automóvil deportivo modificado para viajar en el tiempo, conocido por su aparición en la película 'Volver al Futuro'.",
        "movie": "Volver al Futuro",
        "year": 1985
      },
      {
        "id": 2,
        "name": "Ecto-1 (Ghostbusters)",
        "description": "Ambulancia modificada en vehículo de caza fantasmas, destacado en la película 'Ghostbusters'.",
        "movie": "Ghostbusters",
        "year": 1984
      },
      {
        "id": 3,
        "name": "Batmobile (Batman, 1989)",
        "description": "Versión del Batimóvil utilizada en la película 'Batman' dirigida por Tim Burton en 1989.",
        "movie": "Batman",
        "year": 1989
      },
      {
        "id": 4,
        "name": "KITT (Knight Rider)",
        "description": "Coche inteligente con IA avanzada y habilidades especiales, protagonista en la serie 'Knight Rider'.",
        "movie": "Knight Rider",
        "year": 1982
      },
      {
        "id": 5,
        "name": "The General Lee (The Dukes of Hazzard)",
        "description": "Dodge Charger personalizado utilizado en la serie de televisión 'The Dukes of Hazzard'.",
        "movie": "The Dukes of Hazzard",
        "year": 1979
      },
      {
        "id": 6,
        "name": "Interceptador (Mad Max)",
        "description": "Vehículo interceptor modificado, emblemático en la película 'Mad Max' de 1979.",
        "movie": "Mad Max",
        "year": 1979
      }
];

router.get('/', (req, res, next)=>{
    res.json({Cars});
})

router.get('/:cId', (req, res, next)=>{
    console.log(req.params.cId);
    const cars = Cars.find(c=>{
        return c.id == req.params.cId
    });
    res.json({cars});
})

module.exports = router;