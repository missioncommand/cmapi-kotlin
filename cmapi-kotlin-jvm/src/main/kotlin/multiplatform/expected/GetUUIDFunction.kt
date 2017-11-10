package multiplatform.expected

actual object GetUUIDFunction
{
    actual fun randomUUID(): MpUUID = java.util.UUID.randomUUID()
}