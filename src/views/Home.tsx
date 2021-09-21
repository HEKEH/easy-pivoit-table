import { Vue } from 'vue-class-component'
import { HelloWorld } from '@/components/HelloWorld' // @ is an alias to /src

export default class Home extends Vue {
    render() {
        return (
            <div class="home">
                <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
            </div>
        )
    }
}
