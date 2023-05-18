# vite-app-antd
React / Typescript + SWC / Ant Design

## SVG Icon
SCG Iconだけか不明だが、以下のように `rev` が必須属性となっている
```
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';

<ArrowUpOutlined rev={undefined} />
```
