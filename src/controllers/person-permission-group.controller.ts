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
import {PersonPermissionGroup} from '../models';
import {PersonPermissionGroupRepository} from '../repositories';

export class PersonPermissionGroupController {
  constructor(
    @repository(PersonPermissionGroupRepository)
    public personPermissionGroupRepository : PersonPermissionGroupRepository,
  ) {}

  @post('/person-permission-groups')
  @response(200, {
    description: 'PersonPermissionGroup model instance',
    content: {'application/json': {schema: getModelSchemaRef(PersonPermissionGroup)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PersonPermissionGroup, {
            title: 'NewPersonPermissionGroup',
            exclude: ['id'],
          }),
        },
      },
    })
    personPermissionGroup: Omit<PersonPermissionGroup, 'id'>,
  ): Promise<PersonPermissionGroup> {
    return this.personPermissionGroupRepository.create(personPermissionGroup);
  }

  @get('/person-permission-groups/count')
  @response(200, {
    description: 'PersonPermissionGroup model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(PersonPermissionGroup) where?: Where<PersonPermissionGroup>,
  ): Promise<Count> {
    return this.personPermissionGroupRepository.count(where);
  }

  @get('/person-permission-groups')
  @response(200, {
    description: 'Array of PersonPermissionGroup model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(PersonPermissionGroup, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(PersonPermissionGroup) filter?: Filter<PersonPermissionGroup>,
  ): Promise<PersonPermissionGroup[]> {
    return this.personPermissionGroupRepository.find(filter);
  }

  @patch('/person-permission-groups')
  @response(200, {
    description: 'PersonPermissionGroup PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PersonPermissionGroup, {partial: true}),
        },
      },
    })
    personPermissionGroup: PersonPermissionGroup,
    @param.where(PersonPermissionGroup) where?: Where<PersonPermissionGroup>,
  ): Promise<Count> {
    return this.personPermissionGroupRepository.updateAll(personPermissionGroup, where);
  }

  @get('/person-permission-groups/{id}')
  @response(200, {
    description: 'PersonPermissionGroup model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(PersonPermissionGroup, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(PersonPermissionGroup, {exclude: 'where'}) filter?: FilterExcludingWhere<PersonPermissionGroup>
  ): Promise<PersonPermissionGroup> {
    return this.personPermissionGroupRepository.findById(id, filter);
  }

  @patch('/person-permission-groups/{id}')
  @response(204, {
    description: 'PersonPermissionGroup PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PersonPermissionGroup, {partial: true}),
        },
      },
    })
    personPermissionGroup: PersonPermissionGroup,
  ): Promise<void> {
    await this.personPermissionGroupRepository.updateById(id, personPermissionGroup);
  }

  @put('/person-permission-groups/{id}')
  @response(204, {
    description: 'PersonPermissionGroup PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() personPermissionGroup: PersonPermissionGroup,
  ): Promise<void> {
    await this.personPermissionGroupRepository.replaceById(id, personPermissionGroup);
  }

  @del('/person-permission-groups/{id}')
  @response(204, {
    description: 'PersonPermissionGroup DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.personPermissionGroupRepository.deleteById(id);
  }
}
