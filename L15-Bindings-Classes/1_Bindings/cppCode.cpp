#include <iostream>
using namespace std;

class Person
{
public:
    string name;
    int age;

    Person(string n, int a)
    {
        name = n;
        age = a;
    }

    void print()
    {
        cout << this->name << ", " << this->age << endl;
    }
};

int main()
{

    Person p("Kartik", 15);
    Person p1("Yash", 25);

    p.print();
    p1.print();
}