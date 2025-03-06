const languages = {
    "c" : `
#include &lt;stdio.h&gt;

int main()
{
    printf("Hello world");
}
    `,

    "cpp" : `
#include &lt;iostream&gt;

int main()
{
    std::cout << "Hello world" << std::endl;
}
    `,

    "cs" : `
using System;

namespace Program
{
    class Program
    {
        public static void Main(String[] args)
        {
            Console.WriteLn("Hello World");
        }
    }
}
    `,

    "batch": `echo Hello world`,
    "python" : `print("Hello world")`,
    "javascript" : `console.log("Hello world");`
};




// Sự kiện khi nhấn nút Submit
document.getElementById("submit-btn").addEventListener("click", function() {
    const selectedLang = document.getElementById("languages").value;
    const code = languages[selectedLang];

    // Cập nhật nội dung hiển thị mã vào phần tử class2b
    document.getElementById("code-container").innerHTML = `<pre>${code}</pre>`;
});
