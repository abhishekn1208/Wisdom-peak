export interface UserData {
    id : number;
    name : string;
    username : string;
    email : string;
    phone : string;
    website : string;
    address : Address,
    company : Company

}

export interface Address{
    street : string;
    city : string;
    zipcode : string;
}

export interface Company{
    name : string;
}