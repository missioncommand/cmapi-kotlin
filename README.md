
# cmapi-kotlin
=======
# Common Map API (CMAPI)-Kotlin
A port of the [Common Map API version 2][1] for the Kotlin language, supporting both Java and Javascript in a single baseline. 

### What is CMAPI-Kotlin?
CMAPI-Kotlin is the Common Map API version 2 written in the [Kotlin 1.2-Beta][2] version. 

### Why we made CMAPI-Kotlin?
By using Kotlin 1.2-Beta we are able to export Common Map API version 2 to both Java and Javascript
while maintaining a single code base.

### How to Build CMAPI-Kotlin
run
```gradle
 ./gradlew build
```
#### Jar File
The exported jar will be located in the directory: *cmapi-multi-jvm/build/libs/cmapi-multi-jvm.jar*

#### Javascript File
The exported javascript will be located in the directory: *cmapi-multi-js/build/classes/main/cmapi-multi-js.js*

#### Javascript dependencies
When using the Javascript file exported, you will also need the kotlin.js Javascript module. Please refer to 
the [Kotlin Documentation][3] where it says to use ``` npm install kotlin```.

----------------------------------------------------
 
 [1]: https://github.com/cmapi/cmapi2
 [2]: https://blog.jetbrains.com/kotlin/2017/10/kotlin-1-2-beta2-is-out/
 [3]: https://kotlinlang.org/docs/reference/js-modules.html#notes

 

