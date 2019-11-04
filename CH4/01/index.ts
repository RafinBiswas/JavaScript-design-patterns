function f() {
    console.log("f(): evaluated");
    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("f(): called");
    };
}

function g() {
    console.log("g(): evaluated");

    return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log(target);
        console.log(propertyKey);
        console.log(descriptor);

        // descriptor.value.apply();

        console.log("g(): called");
    }

}

class C {
    @f()
    @g()
    method() {
        console.log('Running...');
    }
}

// let a = new C();
// a.method();

// #### command ####
// tsc index.ts --experimentalDecorators "true" --emitDecoratorMetadata "true" --target "ES5"