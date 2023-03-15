import React from 'react'

interface IQuestion {
    id: number
    information: string;
}

interface Intro {
    id: number;
    information: string;
    // textArr?: string[]
}

export let question: IQuestion[] = [
    {
        id: 1,
        information: "What is the Fourth Industrial Revolution?",
    },
    {
        id: 2,
        information: "What is IoT?",
    },

    {
        id: 3,
        information: "Embedded Systems",
    },

    {
        id: 4,
        information: "Hardware and Software for IoT",
    },

    {
        id: 5,
        information: "Edge and Cloud Computing",
    },
    {
        id: 6,
        information: "The future of IoT is AI",
    },
    {
        id: 7,
        information: "Blockchain in the Internet of Things?",
    },
    {
        id: 8,
        information: "IoT + AI + Blockchain: The Fourth Industrial Revolution has begun",
    },
    {
        id: 9,
        information: "How will Matter change the IoT Infrastructure and address issues Metaverse and IoT",
    },
    {
        id: 10,
        information: "Mid-Term I: Introduction to the Internet of Things (IoT) Quiz in Week 3",
    },
    {
        id: 11,
        information: "Total Questions: 46, Total Time: 60 minutes",
    }, {
        id: 12,
        information: "The C Reference Book: The C programming language Embedded Programming book: Internet of things with ESP8266",
    },
]


export let introduction: Intro[] = [
    {
        id: 1,
        information: "Variable names types"
    },
    {
        id: 2,
        information: "Data types and sizes"
    },
    {
        id: 3,
        information: "Constants"
    },
    {
        id: 4,
        information: "Arithmetic operations"
    },
    {
        id: 5,
        information: "Logical and relational operators"
    },
    {
        id: 6,
        information: "Type conversion"
    },
    {
        id: 7,
        information: "Bitwise operators"
    },
    {
        id: 8,
        information: "Conditional expressions",
    },
]

