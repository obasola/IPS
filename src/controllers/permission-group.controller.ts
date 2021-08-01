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
import {PermissionGroup} from '../models';
import {PermissionGroupRepository} from '../repositories';

export class PermissionGroupController {
  constructor(
    @repository(PermissionGroupRepository)
    public permissionGroupRepository : PermissionGroupRepository,
  ) {}

  @post('/permission-groups')
  @response(200, {
    description: 'PermissionGroup model instance',
    content: {'application/json': {schema: getModelSchemaRef(PermissionGroup)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PermissionGroup, {
            title: 'NewPermissionGroup',
            exclude: ['id'],
          }),
        },
      },
    })
    permissionGroup: Omit<PermissionGroup, 'id'>,
  ): Promise<PermissionGroup> {
    return this.permissionGroupRepository.create(permissionGroup);
  }

  @get('/permission-groups/count')
  @response(200, {
    description: 'PermissionGroup model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(PermissionGroup) where?: Where<PermissionGroup>,
  ): Promise<Count> {
    return this.permissionGroupRepository.count(where);
  }

  @get('/permission-groups')
  @response(200, {
    description: 'Array of PermissionGroup model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(PermissionGroup, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(PermissionGroup) filter?: Filter<PermissionGroup>,
  ): Promise<PermissionGroup[]> {
    return this.permissionGroupRepository.find(filter);
  }

  @patch('/permission-groups')
  @response(200, {
    description: 'PermissionGroup PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PermissionGroup, {partial: true}),
        },
      },
    })
    permissionGroup: PermissionGroup,
    @param.where(PermissionGroup) where?: Where<PermissionGroup>,
  ): Promise<Count> {
    return this.permissionGroupRepository.updateAll(permissionGroup, where);
  }

  @get('/permission-groups/{id}')
  @response(200, {
    description: 'PermissionGroup model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(PermissionGroup, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(PermissionGroup, {exclude: 'where'}) filter?: FilterExcludingWhere<PermissionGroup>
  ): Promise<PermissionGroup> {
    return this.permissionGroupRepository.findById(id, filter);
  }

  @patch('/permission-groups/{id}')
  @response(204, {
    description: 'PermissionGroup PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PermissionGroup, {partial: true}),
        },
      },
    })
    permissionGroup: PermissionGroup,
  ): Promise<void> {
    await this.permissionGroupRepository.updateById(id, permissionGroup);
  }

  @put('/permission-groups/{id}')
  @response(204, {
    description: 'PermissionGroup PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() permissionGroup: PermissionGroup,
  ): Promise<void> {
    await this.permissionGroupRepository.replaceById(id, permissionGroup);
  }

  @del('/permission-groups/{id}')
  @response(204, {
    description: 'PermissionGroup DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.permissionGroupRepository.deleteById(id);
  }
}
