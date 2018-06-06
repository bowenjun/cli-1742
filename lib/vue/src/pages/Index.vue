<template>
    <Row id="index">
        <Col span="5" class="index-sidebar">
            <header class="index-header">
                <img src="../assets/logo.png" alt="logo">
            </header>
            <Menu class="index-menu" width="auto" theme="dark" :active-name="active" :open-names="open" @on-select="route">
                <template v-for="(menu, index) in menus">
                    <template v-if="menu.children">
                        <Submenu :name="index + '-' + index" :key="index">
                            <span slot="title"><Icon v-if="menu.icon" :type="menu.icon" size="15"></Icon>{{ menu.name }}</span>
                            <MenuItem v-for="(c, i) in menu.children" :name="c.route" :key="i"><Icon v-if="c.icon" :type="c.icon" size="15"></Icon>{{ c.name }}</MenuItem>
                        </Submenu>
                    </template>
                    <template v-else>
                        <MenuItem :name="menu.route" :key="index"><Icon v-if="menu.icon" :type="menu.icon" size="15"></Icon>{{ menu.name }}</MenuItem>
                    </template>
                </template>
            </Menu>
        </Col>
        <Col span="19" class="index-content">
            <header class="index-content-header">
                <a href=""><Icon type="skip-backward" size="22"></Icon></a>
                <ul>
                    <li><Input v-model="search" icon="ios-search" placeholder="查询..." style="width: 200px"></Input></li>
                </ul>
            </header>
            <section class="index-content-router">
                <router-view></router-view>
            </section>
        </Col>
    </Row>
</template>

<script>
    import menu from '../config/menu'
    export default {
        name: 'index',
        data() {
            return {
                menus: menu,
                search: '',
                active: '',
                open: []
            }
        },
        created() {
            // 初始化侧边栏展示
            this.active = this.$route.path
            this.open = this.getOpen(this.active)
        },
        methods: {
            // 页面跳转
            route(name) {
                this.$router.push(name)
            },
            // 展开侧边栏二级菜单
            getOpen(key) {
                let res = []
                menu.map((m, i) => {
                    if (m.children) {
                        m.children.map((c) => {
                            if (c.route == key) {
                                res.push(i + '-' + i)
                            }
                        })
                    }
                })
                return res
            }
        }
    }
</script>

<style scoped>
    .index-header {
        background: #062140;
        padding: 10px;
        height: 70px;
        text-align: center;
    }
    .index-header img {
        height: 50px;
    }
    .index-sidebar {
        height: 100vh;
        background: #49505f;
    }
    .index-menu {
        height: calc(100vh - 70px);
        padding-bottom: 40px;
        overflow: auto;
    }
    .index-content {
        height: 100%;
    }
    .index-content-router {
        height: calc(100vh - 70px);
        width: 100%;
        padding: 15px;
        overflow: auto;
    }
    .index-content-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 70px;
        background: #fff;
        -webkit-box-shadow: 0 1px 4px rgba(0, 21, 41, .08);
        box-shadow: 0 1px 4px rgba(0, 21, 41, .08);
        padding: 0 15px;
    }
</style>
