// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)]
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
        newStrand.push(returnRandBase())
    }
    return newStrand
}


const pAequorFactory = (num, arr) => {
    return {
        _specimenNum: num,
        set specimentNum(newSpecimentNum) {
            if (this._specimenNum !== newSpecimentNum) {
                this._specimenNum = newSpecimentNum;
            } else {
                return 'The pAequor speciment number has to be different from existing ones...'
            }
        },
        _dna: arr,
        mutate() {
            let i = Math.floor(Math.random() * arr.length);
            let oldGene = arr[i];
            let newGene;
            do {
                newGene = returnRandBase();
                arr.splice(i, 1, returnRandBase());
            } while (oldGene === newGene);
            return arr;
        },
        compareDNA(pAquorDNA) {
            let count = 0;
            for (let i = 0; i < this._dna.length; i++) {
                if (pAquorDNA[i] === this._dna[i]) {
                    count += 1;
                } else {
                    count = count;
                }
            }
            return (count * (100 / this._dna.length)) + '%';
        },
        willLikelySurvive() {
            let count = 0;
            for (let i = 0; i < this._dna.length; i++) {
                if (this._dna[i] === 'C' || this._dna[i] === 'G') {
                    count += 1;
                } else {
                    count = count;
                }
            }
            if ((count * (100 / this._dna.length)) > 60) {
                return true;
            } else {
                return false;
            }
        }
    }
};

const createpAequorSamples = () => {
    let pAequorSamples = [];
    let count = 1;
    while (pAequorSamples.length < 30) {
        let sample = pAequorFactory(count, mockUpStrand());
        if (sample.willLikelySurvive() === true) {
            pAequorSamples.push(sample);
            count += 1;
        }
    }
    console.log(pAequorSamples);
};

console.log(createpAequorSamples());
