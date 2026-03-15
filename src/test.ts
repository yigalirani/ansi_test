import {strip_ansi,Style} from './index.js'
const str=String.raw`[0m[0K]0;npm]0;npm run build[?25l
> converter@1.0.0 build[0K
> node build.mjs[0K
[0K
[0K[?25h[0;1mnull[0m[0K[?25l
[0K[?25h`

const str2=String.raw`[0m[0K]0;npm]0;npm run eslint_plain[?25l
> nitrogen@1.0.0 eslint_plain[0K
> eslint . --color[0K
[0K
[0K[?25h]0;C:\windows\system32\cmd.exe import.meta.dirname c:\yigal\million_try3[0K[?25l
[0K[?25h(node:9068) ESLintEnvWarning: /* eslint-env */ comments are no longer recognized when linting with flat config and will be reported as errors as of v10.0.0. Replace them with /* global */ comments or[0K[?25l
define globals in your config file. See https://eslint.org/docs/latest/use/configure/migration-guide#eslint-env-configuration-comments for details. Found in c:\yigal\million_try3\converter\src\make.t[0Ks
at line 3.[0K

[0K[?25h(node:9068) ESLintEnvWarning: /* eslint-env */ comments are no longer recognized when linting with flat config and will be reported as errors as of v10.0.0. Replace them with /* global */ comments or[0K[?25l
define globals in your config file. See https://eslint.org/docs/latest/use/configure/migration-guide#eslint-env-configuration-comments for details. Found in c:\yigal\million_try3\converter\src\utils.[0Kt
s at line 3.[0K
[0K[?25h[?25l
c:\yigal\million_try3\converter\src\convert.ts[0K
372:9 [0;33mwarning[0m Forbidden non-null assertion @typescript-eslint/no-non-null-assertion[0K
700:28 [0;33mwarning[0m Invalid type "number" of template literal expression @typescript-eslint/restrict-template-expressions[0K
[0K
c:\yigal\million_try3\converter\src\index.ts[0K`
const start_style:Style ={
    foreground: undefined,
    background:  undefined,
    font_styles: new Set()
}
import {readFileSync} from 'node:fs'
const ans3=readFileSync(String.raw`c:\yigal\million_try3\eslint.txt`,'utf8')
const ans=strip_ansi(ans3, start_style)
console.log(ans.stripped_text)

for (const x of ans.style_positions)
  console.log(x)