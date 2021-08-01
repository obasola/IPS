import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {PageElement} from '../models';
import {PageElementRepository} from '../repositories';

export class PageElementController {
  constructor(
    @repository(PageElementRepository)
    public pageElementRepository : PageElementRepository,
  ) {}

  @post('/page-elements')
  @response(200, {
    description: 'PageElement model instance',
    content: {'application/json': {schema: getModelSchemaRef(PageElement)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PageElement, {
            title: 'NewPageElement',
            exclude: ['id'],
          }),
        },
      },
    })
    pageElement: Omit<PageElement, 'id'>,
  ): Promise<PageElement> {
    return this.pageElementRepository.create(pageElement);
  }

  @get('/page-elements/count')
  @response(200, {
    description: 'PageElement model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(PageElement) where?: Where<PageElement>,
  ): Promise<Count> {
    return this.pageElementRepository.count(where);
  }

  @get('/page-elements')
  @response(200, {
    description: 'Array of PageElement model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(PageElement, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(PageElement) filter?: Filter<PageElement>,
  ): Promise<PageElement[]> {
    return this.pageElementRepository.find(filter);
  }

  @patch('/page-elements')
  @response(200, {
    description: 'PageElement PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PageElement, {partial: true}),
        },
      },
    })
    pageElement: PageElement,
    @param.where(PageElement) where?: Where<PageElement>,
  ): Promise<Count> {
    return this.pageElementRepository.updateAll(pageElement, where);
  }

  @get('/page-elements/{id}')
  @response(200, {
    description: 'PageElement model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(PageElement, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(PageElement, {exclude: 'where'}) filter?: FilterExcludingWhere<PageElement>
  ): Promise<PageElement> {
    return this.pageElementRepository.findById(id, filter);
  }

  @patch('/page-elements/{id}')
  @response(204, {
    description: 'PageElement PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PageElement, {partial: true}),
        },
      },
    })
    pageElement: PageElement,
  ): Promise<void> {
    await this.pageElementRepository.updateById(id, pageElement);
  }

  @put('/page-elements/{id}')
  @response(204, {
    description: 'PageElement PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() pageElement: PageElement,
  ): Promise<void> {
    await this.pageElementRepository.replaceById(id, pageElement);
  }

  @del('/page-elements/{id}')
  @response(204, {
    description: 'PageElement DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.pageElementRepository.deleteById(id);
  }
}
