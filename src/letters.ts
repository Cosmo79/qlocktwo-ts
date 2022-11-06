export interface Letter {
    name: string;
    sections: string[];
}

const letters: Letter[][] = [
    [
        { name: 'I', sections: ['it'] },
        { name: 'T', sections: ['it'] },
        { name: 'L', sections: [] },
        { name: 'I', sections: ['is'] },
        { name: 'S', sections: ['is'] },
        { name: 'A', sections: [] },
        { name: 'S', sections: [] },
        { name: 'A', sections: ['am'] },
        { name: 'M', sections: ['am'] },
        { name: 'P', sections: ['pm'] },
        { name: 'M', sections: ['pm'] },
    ],
    [
        { name: 'A', sections: ['a-quarter'] },
        { name: 'C', sections: [] },
        { name: 'Q', sections: ['a-quarter'] },
        { name: 'U', sections: ['a-quarter'] },
        { name: 'A', sections: ['a-quarter'] },
        { name: 'R', sections: ['a-quarter'] },
        { name: 'T', sections: ['a-quarter'] },
        { name: 'E', sections: ['a-quarter'] },
        { name: 'R', sections: ['a-quarter'] },
        { name: 'D', sections: [] },
        { name: 'C', sections: [] },
    ],
    [
        { name: 'T', sections: ['m-twenty'] },
        { name: 'W', sections: ['m-twenty'] },
        { name: 'E', sections: ['m-twenty'] },
        { name: 'N', sections: ['m-twenty'] },
        { name: 'T', sections: ['m-twenty'] },
        { name: 'Y', sections: ['m-twenty'] },
        { name: 'F', sections: ['m-five'] },
        { name: 'I', sections: ['m-five'] },
        { name: 'V', sections: ['m-five'] },
        { name: 'E', sections: ['m-five'] },
        { name: 'X', sections: [] },
    ],
    [
        { name: 'H', sections: ['half'] },
        { name: 'A', sections: ['half'] },
        { name: 'L', sections: ['half'] },
        { name: 'F', sections: ['half'] },
        { name: 'S', sections: [] },
        { name: 'T', sections: ['m-ten'] },
        { name: 'E', sections: ['m-ten'] },
        { name: 'N', sections: ['m-ten'] },
        { name: 'F', sections: [] },
        { name: 'T', sections: ['to'] },
        { name: 'O', sections: ['to'] },
    ],
    [
        { name: 'P', sections: ['past'] },
        { name: 'A', sections: ['past'] },
        { name: 'S', sections: ['past'] },
        { name: 'T', sections: ['past'] },
        { name: 'E', sections: [] },
        { name: 'R', sections: [] },
        { name: 'U', sections: [] },
        { name: 'N', sections: ['h-nine'] },
        { name: 'I', sections: ['h-nine'] },
        { name: 'N', sections: ['h-nine'] },
        { name: 'E', sections: ['h-nine'] },
    ],
    [
        { name: 'O', sections: ['h-one'] },
        { name: 'N', sections: ['h-one'] },
        { name: 'E', sections: ['h-one'] },
        { name: 'S', sections: ['h-six'] },
        { name: 'I', sections: ['h-six'] },
        { name: 'X', sections: ['h-six'] },
        { name: 'T', sections: ['h-three'] },
        { name: 'H', sections: ['h-three'] },
        { name: 'R', sections: ['h-three'] },
        { name: 'E', sections: ['h-three'] },
        { name: 'E', sections: ['h-three'] },
    ],
    [
        { name: 'F', sections: ['h-four'] },
        { name: 'O', sections: ['h-four'] },
        { name: 'U', sections: ['h-four'] },
        { name: 'R', sections: ['h-four'] },
        { name: 'F', sections: ['h-five'] },
        { name: 'I', sections: ['h-five'] },
        { name: 'V', sections: ['h-five'] },
        { name: 'E', sections: ['h-five'] },
        { name: 'T', sections: ['h-two'] },
        { name: 'W', sections: ['h-two'] },
        { name: 'O', sections: ['h-two'] },
    ],
    [
        { name: 'E', sections: ['h-eight'] },
        { name: 'I', sections: ['h-eight'] },
        { name: 'G', sections: ['h-eight'] },
        { name: 'H', sections: ['h-eight'] },
        { name: 'T', sections: ['h-eight'] },
        { name: 'E', sections: ['h-eleven'] },
        { name: 'L', sections: ['h-eleven'] },
        { name: 'E', sections: ['h-eleven'] },
        { name: 'V', sections: ['h-eleven'] },
        { name: 'E', sections: ['h-eleven'] },
        { name: 'N', sections: ['h-eleven'] },
    ],
    [
        { name: 'S', sections: ['h-seven'] },
        { name: 'E', sections: ['h-seven'] },
        { name: 'V', sections: ['h-seven'] },
        { name: 'E', sections: ['h-seven'] },
        { name: 'N', sections: ['h-seven'] },
        { name: 'T', sections: ['h-twelve'] },
        { name: 'W', sections: ['h-twelve'] },
        { name: 'E', sections: ['h-twelve'] },
        { name: 'L', sections: ['h-twelve'] },
        { name: 'V', sections: ['h-twelve'] },
        { name: 'E', sections: ['h-twelve'] },
    ],
    [
        { name: 'T', sections: ['h-ten'] },
        { name: 'E', sections: ['h-ten'] },
        { name: 'N', sections: ['h-ten'] },
        { name: 'S', sections: [] },
        { name: 'E', sections: [] },
        { name: 'O', sections: ['o-clock'] },
        { name: 'C', sections: ['o-clock'] },
        { name: 'L', sections: ['o-clock'] },
        { name: 'O', sections: ['o-clock'] },
        { name: 'C', sections: ['o-clock'] },
        { name: 'K', sections: ['o-clock'] },
    ],
    [
        { name: ' ', sections: [] },
        { name: ' ', sections: [] },
        { name: '+', sections: ['d-1'] },
        { name: ' ', sections: [] },
        { name: '+', sections: ['d-2'] },
        { name: ' ', sections: [] },
        { name: '+', sections: ['d-3'] },
        { name: ' ', sections: [] },
        { name: '+', sections: ['d-4'] },
        { name: ' ', sections: [] },
        { name: ' ', sections: [] },
    ],
];

export default letters;
