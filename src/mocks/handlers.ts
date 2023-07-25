import { API } from '@api/api';
import { rest } from 'msw';

const handlers = [
  rest.get(`${API}/posts`, (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
          id: 1,
          title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
          userId: 1,
        },
        {
          body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
          id: 2,
          title: 'qui est esse',
          userId: 1,
        },
      ])
    );
  }),
];

export default handlers;
