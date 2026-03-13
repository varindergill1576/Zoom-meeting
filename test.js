

// console.log("hello")

// let a = [46,46]


// console.log(a.length)

// console.log(a.indexOf(46))

let room = { room1 : ['id1',"id2","id3",'id4','id5'], room2 : ["id6","id7","id8","id9"] }

room["sunny"] = ["id55","id56","id57","id58"]

// console.log(room)
// let c = room
let c = Object.entries(room)
console.log(c)
// console.log(c)
// console.log(c[0][1])

// let message = {}

//  for ( let a = 0; a < c.length; a++){
    
//     for(let d = 0; d < c[a][1].length ; d++){
       
//         if (c[a][1][d] == 'id57'){
//             message[c[a][0]] = []
//         }
//     }
//  }

//  console.log(message)

//   for ( let rooms in room){
//     console.log(rooms)
//     for(let i in room[rooms]){
//         console.log(room[rooms][i])
//     }
//   }

for (let [onedix,secomdindex] of c){
    console.log(onedix,secomdindex[1])
}