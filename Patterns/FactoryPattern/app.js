/* Ex: paid Membership */

function MemberFactory() {
    this.createMember = function(name , type) {
        let member;
        if(type === 'simple') {
            member = new SimpleMemberShip(name)
            console.log(member);
        }
        else if(type === 'standard') {
            member = new StandardMemberShip(name)
        }

        else if(type === 'super') {
            member = new SuperMemberShip(name)
        }

        // member.type = type;

    member.define = function() {
        console.log(`The member name ${this.name} type is ${this.type} and cost is ${this.cost}`)
    }


    return member;
    }
}


const SimpleMemberShip = function(name) {
    this.name = name;
    this.cost = '₹5'
}

const StandardMemberShip = function(name) {
    this.name = name;
    this.cost = '₹15'
}

const SuperMemberShip = function(name) {
    this.name = name;
    this.cost = '₹25'
}


// const members = [];
memb = new MemberFactory();

// members.push(memb.createMember("sdfsdf","simple"))

// members.forEach((member) => {
//     member.define();
// })


let a = memb.createMember("sdfsdf","simple");

// a.define();
