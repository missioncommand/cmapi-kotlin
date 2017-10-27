package multiplatform.expected

import java.util.*

actual class MpUUID actual constructor()
{
    constructor(mostSignificantBits: Long, leastSignificantBits: Long) : this()
    {
        uuid = UUID(mostSignificantBits, leastSignificantBits)
    }

    var uuid : UUID = java.util.UUID.randomUUID()
        private set

    actual fun getRandomUUID() : String = uuid.toString()
}