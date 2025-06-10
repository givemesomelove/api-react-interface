import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Suspense, lazy } from'react';

// 统一管理页面配置
const PAGE_CONFIG = [
  {
    id: 'user',
    title: '用户中心',
    path: '/user',
    component: lazy(() => import('./pages/userPage'))
  },
  {
    id: 'settings',
    title: '设置页面',
    path: '/settings'
  },
  {
    id: 'help',
    title: '帮助文档',
    path: '/help'
  }
];

// 通用卡片组件
const PageCard = ({ page }) => (
  <Link to={page.path} style={{ textDecoration: 'none', display: 'block' }}>
    <div style={{
      width: '80%',
      margin: '15px auto',
      padding: '20px',
      textAlign: 'center',
      border: '1px solid #ddd',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      transition: 'transform 0.2s',
      ':hover': {
        transform: 'translateY(-3px)'
      }
    }}>
      <h2 style={{ margin: 0 }}>{page.title}</h2>
    </div>
  </Link>
);

// 主页导航
const Home = () => (
  <div className="page-container">
    {PAGE_CONFIG.map(page => (
      <PageCard key={page.id} page={page} />
    ))}
  </div>
);

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          {PAGE_CONFIG.map(page => (
            <Route
              key={page.id}
              path={page.path}
              element={<page.component />}
            />
          ))}
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;