export interface INavData {
  title: string;
  path: string;
  sublinks?: INavData[];
}

export const sitemap: INavData[] = [
  {
    title: 'Home',
    path: '/'
  },
  {
    title: 'About',
    path: '/about'
  }
]