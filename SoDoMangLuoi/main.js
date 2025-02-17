  class FBO {
    constructor(ID, fname, mname, lname, F1) {
        this.ID = ID
        this.fname = fname
        this.mname = mname
        this.lname = lname
        this.F1 = [].concat(F1)
    }
}

const FBOs = [
    {
        ID: 840001072505,
        fname: "Nguyen",
        mname: "Phu",
        lname: "Nhuan",
        F1: [
            840001073552
        ]
    },
    new FBO(840004073552, "Ngo", "Minh", "Khanh", [840001000000]),
    new FBO(840001000000, "Nguyen", "Huynh Bich", "Tram", [])
]
  

console.log(FBOs)