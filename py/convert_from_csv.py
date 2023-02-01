import io
f = io.open('text.txt', 'r', encoding='utf-8')
text = f.read()
f.close()

LID = 2517
res = "const quiz_gun_violence = [\n"

for x in text.split('\n'):
    c = x.split('###')
    if len(c) == 2:
        a = c[0].split(',')
        b = c[1].split(',')
        res += "    ["
        if len(a) == 1:
            res += "\""+a[0]+"\","
        else:
            res += "[\""+"\",\"".join(a)+"\"],"
        if len(b) == 1:
            res += " \""+b[0]+"\","
        else:
            res += " [\""+"\",\"".join(b)+"\"],"
        res += str(LID)+"],\n"
        LID += 1

res += "];\n"

f = io.open('res.js', 'w', encoding='utf-8')
f.write(res)
f.close()
