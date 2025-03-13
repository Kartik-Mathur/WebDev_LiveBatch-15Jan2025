#include <iostream>
using namespace std;

class Person
{
public:
    string name;
    int age;

    Person (string n,int a){
        name = n;
        age = a;
    }

    void details(){
        cout<<"Name: "<<name<<endl;
        cout<<"Age: "<<age<<endl;
    }
};

int main(){
    Person p("John",20);
    Person p1("Ankit",21);

    p.details();
    p1.details();
}