package multiplatform.expected

import java.util.*

actual class MpUUID actual constructor()
{
    actual fun getRandomUUID() : String = UUID.randomUUID().toString()
}