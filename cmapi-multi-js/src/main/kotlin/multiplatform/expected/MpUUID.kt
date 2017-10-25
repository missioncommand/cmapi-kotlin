package multiplatform.expected

actual class MpUUID actual constructor()
{
    actual fun getRandomUUID() : String
    {
      return js("function s(n) {\n" +
                "    return h((Math.random() * (1 << (n << 2))) ^ Date.now()).slice(-n); }\n" +
                "  function h(n) {\n" +
                "    return (n | 0).toString(16); }\n" +
                "  return [\n" +
                "    s(4) + s(4), s(4),\n" +
                "    '4' + s(3), // UUID version 4 \n" +
                "    h(8 | (Math.random() * 4)) + s(3), // {8|9|A|B}xxx \n" +
                "    // s(4) + s(4) + s(4), \n" +
                "    Date.now().toString(16).slice(-10) + s(2) // Use timestamp to avoid collisions \n" +
                "  ].join('-')")
    }
}