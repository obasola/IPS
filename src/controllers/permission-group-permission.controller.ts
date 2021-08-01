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
import {PermissionGroupPermission} from '../models';
import {PermissionGroupPermissionRepository} from '../repositories';

export class PermissionGroupPermissionController {
  constructor(
    @repository(PermissionGroupPermissionRepository)
    public permissionGroupPermissionRepository : PermissionGroupPermissionRepository,
  ) {}

  @post('/permission-group-permissions')
  @response(200, {
    description: 'PermissionGroupPermission model instance',
    content: {'application/json': {schema: getModelSchemaRef(PermissionGroupPermission)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PermissionGroupPermission, {
            title: 'NewPermissionGroupPermission',
            exclude: ['id'],
          }),
        },
      },
    })
    permissionGroupPermission: Omit<PermissionGroupPermission, 'id'>,
  ): Promise<PermissionGroupPermission> {
    return this.permissionGroupPermissionRepository.create(permissionGroupPermission);
  }

  @get('/permission-group-permissions/count')
  @response(200, {
    description: 'PermissionGroupPermission model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(PermissionGroupPermission) where?: Where<PermissionGroupPermission>,
  ): Promise<Count> {
    return this.permissionGroupPermissionRepository.count(where);
  }

  @get('/permission-group-permissions')
  @response(200, {
    description: 'Array of PermissionGroupPermission model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(PermissionGroupPermission, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(PermissionGroupPermission) filter?: Filter<PermissionGroupPermission>,
  ): Promise<PermissionGroupPermission[]> {
    return this.permissionGroupPermissionRepository.find(filter);
  }

  @patch('/permission-group-permissions')
  @response(200, {
    description: 'PermissionGroupPermission PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PermissionGroupPermission, {partial: true}),
        },
      },
    })
    permissionGroupPermission: PermissionGroupPermission,
    @param.where(PermissionGroupPermission) where?: Where<PermissionGroupPermission>,
  ): Promise<Count> {
    return this.permissionGroupPermissionRepository.updateAll(permissionGroupPermission, where);
  }

  @get('/permission-group-permissions/{id}')
  @response(200, {
    description: 'PermissionGroupPermission model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(PermissionGroupPermission, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(PermissionGroupPermission, {exclude: 'where'}) filter?: FilterExcludingWhere<PermissionGroupPermission>
  ): Promise<PermissionGroupPermission> {
    return this.permissionGroupPermissionRepository.findById(id, filter);
  }

  @patch('/permission-group-permissions/{id}')
  @response(204, {
    description: 'PermissionGroupPermission PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PermissionGroupPermission, {partial: true}),
        },
      },
    })
    permissionGroupPermission: PermissionGroupPermission,
  ): Promise<void> {
    await this.permissionGroupPermissionRepository.updateById(id, permissionGroupPermission);
  }

  @put('/permission-group-permissions/{id}')
  @response(204, {
    description: 'PermissionGroupPermission PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() permissionGroupPermission: PermissionGroupPermission,
  ): Promise<void> {
    await this.permissionGroupPermissionRepository.replaceById(id, permissionGroupPermission);
  }

  @del('/permission-group-permissions/{id}')
  @response(204, {
    description: 'PermissionGroupPermission DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.permissionGroupPermissionRepository.deleteById(id);
  }
}
