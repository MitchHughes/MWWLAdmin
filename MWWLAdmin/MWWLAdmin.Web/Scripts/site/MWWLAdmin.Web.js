﻿var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var MWWLAdmin;
(function (MWWLAdmin) {
    var MwwlDB;
    (function (MwwlDB) {
        var TextsDialog = (function (_super) {
            __extends(TextsDialog, _super);
            function TextsDialog() {
                _super.apply(this, arguments);
                this.form = new MwwlDB.TextsForm(this.idPrefix);
            }
            TextsDialog.prototype.getFormKey = function () { return MwwlDB.TextsForm.formKey; };
            TextsDialog.prototype.getIdProperty = function () { return MwwlDB.TextsRow.idProperty; };
            TextsDialog.prototype.getLocalTextPrefix = function () { return MwwlDB.TextsRow.localTextPrefix; };
            TextsDialog.prototype.getNameProperty = function () { return MwwlDB.TextsRow.nameProperty; };
            TextsDialog.prototype.getService = function () { return MwwlDB.TextsService.baseUrl; };
            TextsDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], TextsDialog);
            return TextsDialog;
        }(Serenity.EntityDialog));
        MwwlDB.TextsDialog = TextsDialog;
    })(MwwlDB = MWWLAdmin.MwwlDB || (MWWLAdmin.MwwlDB = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var Common;
    (function (Common) {
        var GridEditorBase = (function (_super) {
            __extends(GridEditorBase, _super);
            function GridEditorBase(container) {
                _super.call(this, container);
                this.nextId = 1;
            }
            GridEditorBase.prototype.getIdProperty = function () { return "__id"; };
            GridEditorBase.prototype.id = function (entity) {
                return entity.__id;
            };
            GridEditorBase.prototype.save = function (opt, callback) {
                var _this = this;
                var request = opt.request;
                var row = Q.deepClone(request.Entity);
                var id = row.__id;
                if (id == null) {
                    row.__id = this.nextId++;
                }
                if (!this.validateEntity(row, id)) {
                    return;
                }
                var items = this.view.getItems().slice();
                if (id == null) {
                    items.push(row);
                }
                else {
                    var index = Q.indexOf(items, function (x) { return _this.id(x) === id; });
                    items[index] = Q.deepClone({}, items[index], row);
                }
                this.setEntities(items);
                callback({});
            };
            GridEditorBase.prototype.deleteEntity = function (id) {
                this.view.deleteItem(id);
                return true;
            };
            GridEditorBase.prototype.validateEntity = function (row, id) {
                return true;
            };
            GridEditorBase.prototype.setEntities = function (items) {
                this.view.setItems(items, true);
            };
            GridEditorBase.prototype.getNewEntity = function () {
                return {};
            };
            GridEditorBase.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: this.getAddButtonCaption(),
                        cssClass: 'add-button',
                        onClick: function () {
                            _this.createEntityDialog(_this.getItemType(), function (dlg) {
                                var dialog = dlg;
                                dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                                dialog.loadEntityAndOpenDialog(_this.getNewEntity());
                            });
                        }
                    }];
            };
            GridEditorBase.prototype.editItem = function (entityOrId) {
                var _this = this;
                var id = entityOrId;
                var item = this.view.getItemById(id);
                this.createEntityDialog(this.getItemType(), function (dlg) {
                    var dialog = dlg;
                    dialog.onDelete = function (opt, callback) {
                        if (!_this.deleteEntity(id)) {
                            return;
                        }
                        callback({});
                    };
                    dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                    dialog.loadEntityAndOpenDialog(item);
                });
                ;
            };
            GridEditorBase.prototype.getEditValue = function (property, target) {
                target[property.name] = this.value;
            };
            GridEditorBase.prototype.setEditValue = function (source, property) {
                this.value = source[property.name];
            };
            Object.defineProperty(GridEditorBase.prototype, "value", {
                get: function () {
                    return this.view.getItems().map(function (x) {
                        var y = Q.deepClone(x);
                        delete y['__id'];
                        return y;
                    });
                },
                set: function (value) {
                    var _this = this;
                    this.view.setItems((value || []).map(function (x) {
                        var y = Q.deepClone(x);
                        y.__id = _this.nextId++;
                        return y;
                    }), true);
                },
                enumerable: true,
                configurable: true
            });
            GridEditorBase.prototype.getGridCanLoad = function () {
                return false;
            };
            GridEditorBase.prototype.usePager = function () {
                return false;
            };
            GridEditorBase.prototype.getInitialTitle = function () {
                return null;
            };
            GridEditorBase.prototype.createQuickSearchInput = function () {
            };
            GridEditorBase = __decorate([
                Serenity.Decorators.registerClass([Serenity.IGetEditValue, Serenity.ISetEditValue]),
                Serenity.Decorators.editor(),
                Serenity.Decorators.element("<div/>")
            ], GridEditorBase);
            return GridEditorBase;
        }(Serenity.EntityGrid));
        Common.GridEditorBase = GridEditorBase;
    })(Common = MWWLAdmin.Common || (MWWLAdmin.Common = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var MWWLAdmin;
(function (MWWLAdmin) {
    var MwwlDB;
    (function (MwwlDB) {
        var TextsEditor = (function (_super) {
            __extends(TextsEditor, _super);
            function TextsEditor(container) {
                _super.call(this, container);
            }
            TextsEditor.prototype.getColumnsKey = function () { return 'MwwlDB.Texts'; };
            TextsEditor.prototype.getDialogType = function () { return MwwlDB.TextsEditorDialog; };
            TextsEditor.prototype.getLocalTextPrefix = function () { return MwwlDB.TextsRow.localTextPrefix; };
            TextsEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], TextsEditor);
            return TextsEditor;
        }(MWWLAdmin.Common.GridEditorBase));
        MwwlDB.TextsEditor = TextsEditor;
    })(MwwlDB = MWWLAdmin.MwwlDB || (MWWLAdmin.MwwlDB = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var Common;
    (function (Common) {
        var GridEditorDialog = (function (_super) {
            __extends(GridEditorDialog, _super);
            function GridEditorDialog() {
                _super.apply(this, arguments);
            }
            GridEditorDialog.prototype.getIdProperty = function () { return "__id"; };
            GridEditorDialog.prototype.destroy = function () {
                this.onSave = null;
                this.onDelete = null;
                _super.prototype.destroy.call(this);
            };
            GridEditorDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                // apply changes button doesn't work properly with in-memory grids yet
                if (this.applyChangesButton) {
                    this.applyChangesButton.hide();
                }
            };
            GridEditorDialog.prototype.saveHandler = function (options, callback) {
                this.onSave && this.onSave(options, callback);
            };
            GridEditorDialog.prototype.deleteHandler = function (options, callback) {
                this.onDelete && this.onDelete(options, callback);
            };
            GridEditorDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], GridEditorDialog);
            return GridEditorDialog;
        }(Serenity.EntityDialog));
        Common.GridEditorDialog = GridEditorDialog;
    })(Common = MWWLAdmin.Common || (MWWLAdmin.Common = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var MWWLAdmin;
(function (MWWLAdmin) {
    var MwwlDB;
    (function (MwwlDB) {
        var TextsEditorDialog = (function (_super) {
            __extends(TextsEditorDialog, _super);
            function TextsEditorDialog() {
                _super.apply(this, arguments);
                this.form = new MwwlDB.TextsForm(this.idPrefix);
            }
            TextsEditorDialog.prototype.getFormKey = function () { return MwwlDB.TextsForm.formKey; };
            TextsEditorDialog.prototype.getLocalTextPrefix = function () { return MwwlDB.TextsRow.localTextPrefix; };
            TextsEditorDialog.prototype.getNameProperty = function () { return MwwlDB.TextsRow.nameProperty; };
            TextsEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], TextsEditorDialog);
            return TextsEditorDialog;
        }(MWWLAdmin.Common.GridEditorDialog));
        MwwlDB.TextsEditorDialog = TextsEditorDialog;
    })(MwwlDB = MWWLAdmin.MwwlDB || (MWWLAdmin.MwwlDB = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var MwwlDB;
    (function (MwwlDB) {
        var TextsGrid = (function (_super) {
            __extends(TextsGrid, _super);
            function TextsGrid(container) {
                _super.call(this, container);
            }
            TextsGrid.prototype.getColumnsKey = function () { return 'MwwlDB.Texts'; };
            TextsGrid.prototype.getDialogType = function () { return MwwlDB.TextsDialog; };
            TextsGrid.prototype.getIdProperty = function () { return MwwlDB.TextsRow.idProperty; };
            TextsGrid.prototype.getLocalTextPrefix = function () { return MwwlDB.TextsRow.localTextPrefix; };
            TextsGrid.prototype.getService = function () { return MwwlDB.TextsService.baseUrl; };
            TextsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TextsGrid);
            return TextsGrid;
        }(Serenity.EntityGrid));
        MwwlDB.TextsGrid = TextsGrid;
    })(MwwlDB = MWWLAdmin.MwwlDB || (MWWLAdmin.MwwlDB = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var MwwlDB;
    (function (MwwlDB) {
        var ProductsDialog = (function (_super) {
            __extends(ProductsDialog, _super);
            function ProductsDialog() {
                _super.apply(this, arguments);
                this.form = new MwwlDB.ProductsForm(this.idPrefix);
            }
            ProductsDialog.prototype.getFormKey = function () { return MwwlDB.ProductsForm.formKey; };
            ProductsDialog.prototype.getIdProperty = function () { return MwwlDB.ProductsRow.idProperty; };
            ProductsDialog.prototype.getLocalTextPrefix = function () { return MwwlDB.ProductsRow.localTextPrefix; };
            ProductsDialog.prototype.getNameProperty = function () { return MwwlDB.ProductsRow.nameProperty; };
            ProductsDialog.prototype.getService = function () { return MwwlDB.ProductsService.baseUrl; };
            ProductsDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], ProductsDialog);
            return ProductsDialog;
        }(Serenity.EntityDialog));
        MwwlDB.ProductsDialog = ProductsDialog;
    })(MwwlDB = MWWLAdmin.MwwlDB || (MWWLAdmin.MwwlDB = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var MWWLAdmin;
(function (MWWLAdmin) {
    var MwwlDB;
    (function (MwwlDB) {
        var ProductsEditor = (function (_super) {
            __extends(ProductsEditor, _super);
            function ProductsEditor(container) {
                _super.call(this, container);
            }
            ProductsEditor.prototype.getColumnsKey = function () { return 'MwwlDB.Products'; };
            ProductsEditor.prototype.getDialogType = function () { return MwwlDB.ProductsEditorDialog; };
            ProductsEditor.prototype.getLocalTextPrefix = function () { return MwwlDB.ProductsRow.localTextPrefix; };
            ProductsEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductsEditor);
            return ProductsEditor;
        }(MWWLAdmin.Common.GridEditorBase));
        MwwlDB.ProductsEditor = ProductsEditor;
    })(MwwlDB = MWWLAdmin.MwwlDB || (MWWLAdmin.MwwlDB = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var MWWLAdmin;
(function (MWWLAdmin) {
    var MwwlDB;
    (function (MwwlDB) {
        var ProductsEditorDialog = (function (_super) {
            __extends(ProductsEditorDialog, _super);
            function ProductsEditorDialog() {
                _super.apply(this, arguments);
                this.form = new MwwlDB.ProductsForm(this.idPrefix);
            }
            ProductsEditorDialog.prototype.getFormKey = function () { return MwwlDB.ProductsForm.formKey; };
            ProductsEditorDialog.prototype.getLocalTextPrefix = function () { return MwwlDB.ProductsRow.localTextPrefix; };
            ProductsEditorDialog.prototype.getNameProperty = function () { return MwwlDB.ProductsRow.nameProperty; };
            ProductsEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], ProductsEditorDialog);
            return ProductsEditorDialog;
        }(MWWLAdmin.Common.GridEditorDialog));
        MwwlDB.ProductsEditorDialog = ProductsEditorDialog;
    })(MwwlDB = MWWLAdmin.MwwlDB || (MWWLAdmin.MwwlDB = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var MwwlDB;
    (function (MwwlDB) {
        var ProductsGrid = (function (_super) {
            __extends(ProductsGrid, _super);
            function ProductsGrid(container) {
                _super.call(this, container);
            }
            ProductsGrid.prototype.getColumnsKey = function () { return 'MwwlDB.Products'; };
            ProductsGrid.prototype.getDialogType = function () { return MwwlDB.ProductsDialog; };
            ProductsGrid.prototype.getIdProperty = function () { return MwwlDB.ProductsRow.idProperty; };
            ProductsGrid.prototype.getLocalTextPrefix = function () { return MwwlDB.ProductsRow.localTextPrefix; };
            ProductsGrid.prototype.getService = function () { return MwwlDB.ProductsService.baseUrl; };
            ProductsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductsGrid);
            return ProductsGrid;
        }(Serenity.EntityGrid));
        MwwlDB.ProductsGrid = ProductsGrid;
    })(MwwlDB = MWWLAdmin.MwwlDB || (MWWLAdmin.MwwlDB = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var MwwlDB;
    (function (MwwlDB) {
        var PricesDialog = (function (_super) {
            __extends(PricesDialog, _super);
            function PricesDialog() {
                _super.apply(this, arguments);
                this.form = new MwwlDB.PricesForm(this.idPrefix);
            }
            PricesDialog.prototype.getFormKey = function () { return MwwlDB.PricesForm.formKey; };
            PricesDialog.prototype.getIdProperty = function () { return MwwlDB.PricesRow.idProperty; };
            PricesDialog.prototype.getLocalTextPrefix = function () { return MwwlDB.PricesRow.localTextPrefix; };
            PricesDialog.prototype.getNameProperty = function () { return MwwlDB.PricesRow.nameProperty; };
            PricesDialog.prototype.getService = function () { return MwwlDB.PricesService.baseUrl; };
            PricesDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], PricesDialog);
            return PricesDialog;
        }(Serenity.EntityDialog));
        MwwlDB.PricesDialog = PricesDialog;
    })(MwwlDB = MWWLAdmin.MwwlDB || (MWWLAdmin.MwwlDB = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var MWWLAdmin;
(function (MWWLAdmin) {
    var MwwlDB;
    (function (MwwlDB) {
        var PricesEditor = (function (_super) {
            __extends(PricesEditor, _super);
            function PricesEditor(container) {
                _super.call(this, container);
            }
            PricesEditor.prototype.getColumnsKey = function () { return 'MwwlDB.Prices'; };
            PricesEditor.prototype.getDialogType = function () { return MwwlDB.PricesEditorDialog; };
            PricesEditor.prototype.getLocalTextPrefix = function () { return MwwlDB.PricesRow.localTextPrefix; };
            PricesEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], PricesEditor);
            return PricesEditor;
        }(MWWLAdmin.Common.GridEditorBase));
        MwwlDB.PricesEditor = PricesEditor;
    })(MwwlDB = MWWLAdmin.MwwlDB || (MWWLAdmin.MwwlDB = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var MWWLAdmin;
(function (MWWLAdmin) {
    var MwwlDB;
    (function (MwwlDB) {
        var PricesEditorDialog = (function (_super) {
            __extends(PricesEditorDialog, _super);
            function PricesEditorDialog() {
                _super.apply(this, arguments);
                this.form = new MwwlDB.PricesForm(this.idPrefix);
            }
            PricesEditorDialog.prototype.getFormKey = function () { return MwwlDB.PricesForm.formKey; };
            PricesEditorDialog.prototype.getLocalTextPrefix = function () { return MwwlDB.PricesRow.localTextPrefix; };
            PricesEditorDialog.prototype.getNameProperty = function () { return MwwlDB.PricesRow.nameProperty; };
            PricesEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], PricesEditorDialog);
            return PricesEditorDialog;
        }(MWWLAdmin.Common.GridEditorDialog));
        MwwlDB.PricesEditorDialog = PricesEditorDialog;
    })(MwwlDB = MWWLAdmin.MwwlDB || (MWWLAdmin.MwwlDB = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var MwwlDB;
    (function (MwwlDB) {
        var PricesGrid = (function (_super) {
            __extends(PricesGrid, _super);
            function PricesGrid(container) {
                _super.call(this, container);
            }
            PricesGrid.prototype.getColumnsKey = function () { return 'MwwlDB.Prices'; };
            PricesGrid.prototype.getDialogType = function () { return MwwlDB.PricesDialog; };
            PricesGrid.prototype.getIdProperty = function () { return MwwlDB.PricesRow.idProperty; };
            PricesGrid.prototype.getLocalTextPrefix = function () { return MwwlDB.PricesRow.localTextPrefix; };
            PricesGrid.prototype.getService = function () { return MwwlDB.PricesService.baseUrl; };
            PricesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PricesGrid);
            return PricesGrid;
        }(Serenity.EntityGrid));
        MwwlDB.PricesGrid = PricesGrid;
    })(MwwlDB = MWWLAdmin.MwwlDB || (MWWLAdmin.MwwlDB = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var MwwlDB;
    (function (MwwlDB) {
        var CategoryListFormatter = (function () {
            function CategoryListFormatter() {
            }
            CategoryListFormatter.prototype.format = function (ctx) {
                var idList = ctx.value;
                if (!idList || !idList.length)
                    return "";
                var byId = MwwlDB.CategoriesRow.getLookup().itemById;
                return idList.map(function (x) {
                    var g = byId[x];
                    if (!g)
                        return x.toString();
                    return Q.htmlEncode(g.Name);
                }).join(", ");
            };
            CategoryListFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], CategoryListFormatter);
            return CategoryListFormatter;
        }());
        MwwlDB.CategoryListFormatter = CategoryListFormatter;
    })(MwwlDB = MWWLAdmin.MwwlDB || (MWWLAdmin.MwwlDB = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var MwwlDB;
    (function (MwwlDB) {
        var PaintingsDialog = (function (_super) {
            __extends(PaintingsDialog, _super);
            function PaintingsDialog() {
                _super.apply(this, arguments);
                this.form = new MwwlDB.PaintingsForm(this.idPrefix);
            }
            PaintingsDialog.prototype.getFormKey = function () { return MwwlDB.PaintingsForm.formKey; };
            PaintingsDialog.prototype.getIdProperty = function () { return MwwlDB.PaintingsRow.idProperty; };
            PaintingsDialog.prototype.getLocalTextPrefix = function () { return MwwlDB.PaintingsRow.localTextPrefix; };
            PaintingsDialog.prototype.getNameProperty = function () { return MwwlDB.PaintingsRow.nameProperty; };
            PaintingsDialog.prototype.getService = function () { return MwwlDB.PaintingsService.baseUrl; };
            PaintingsDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], PaintingsDialog);
            return PaintingsDialog;
        }(Serenity.EntityDialog));
        MwwlDB.PaintingsDialog = PaintingsDialog;
    })(MwwlDB = MWWLAdmin.MwwlDB || (MWWLAdmin.MwwlDB = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var MWWLAdmin;
(function (MWWLAdmin) {
    var MwwlDB;
    (function (MwwlDB) {
        var PaintingsEditor = (function (_super) {
            __extends(PaintingsEditor, _super);
            function PaintingsEditor(container) {
                _super.call(this, container);
            }
            PaintingsEditor.prototype.getColumnsKey = function () { return 'MwwlDB.Paintings'; };
            PaintingsEditor.prototype.getDialogType = function () { return MwwlDB.PaintingsEditorDialog; };
            PaintingsEditor.prototype.getLocalTextPrefix = function () { return MwwlDB.PaintingsRow.localTextPrefix; };
            PaintingsEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], PaintingsEditor);
            return PaintingsEditor;
        }(MWWLAdmin.Common.GridEditorBase));
        MwwlDB.PaintingsEditor = PaintingsEditor;
    })(MwwlDB = MWWLAdmin.MwwlDB || (MWWLAdmin.MwwlDB = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var MWWLAdmin;
(function (MWWLAdmin) {
    var MwwlDB;
    (function (MwwlDB) {
        var PaintingsEditorDialog = (function (_super) {
            __extends(PaintingsEditorDialog, _super);
            function PaintingsEditorDialog() {
                _super.apply(this, arguments);
                this.form = new MwwlDB.PaintingsForm(this.idPrefix);
            }
            PaintingsEditorDialog.prototype.getFormKey = function () { return MwwlDB.PaintingsForm.formKey; };
            PaintingsEditorDialog.prototype.getLocalTextPrefix = function () { return MwwlDB.PaintingsRow.localTextPrefix; };
            PaintingsEditorDialog.prototype.getNameProperty = function () { return MwwlDB.PaintingsRow.nameProperty; };
            PaintingsEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], PaintingsEditorDialog);
            return PaintingsEditorDialog;
        }(MWWLAdmin.Common.GridEditorDialog));
        MwwlDB.PaintingsEditorDialog = PaintingsEditorDialog;
    })(MwwlDB = MWWLAdmin.MwwlDB || (MWWLAdmin.MwwlDB = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var MwwlDB;
    (function (MwwlDB) {
        var PaintingsGrid = (function (_super) {
            __extends(PaintingsGrid, _super);
            function PaintingsGrid(container) {
                _super.call(this, container);
            }
            PaintingsGrid.prototype.getColumnsKey = function () { return 'MwwlDB.Paintings'; };
            PaintingsGrid.prototype.getDialogType = function () { return MwwlDB.PaintingsDialog; };
            PaintingsGrid.prototype.getIdProperty = function () { return MwwlDB.PaintingsRow.idProperty; };
            PaintingsGrid.prototype.getLocalTextPrefix = function () { return MwwlDB.PaintingsRow.localTextPrefix; };
            PaintingsGrid.prototype.getService = function () { return MwwlDB.PaintingsService.baseUrl; };
            PaintingsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PaintingsGrid);
            return PaintingsGrid;
        }(Serenity.EntityGrid));
        MwwlDB.PaintingsGrid = PaintingsGrid;
    })(MwwlDB = MWWLAdmin.MwwlDB || (MWWLAdmin.MwwlDB = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var MwwlDB;
    (function (MwwlDB) {
        var EventsDialog = (function (_super) {
            __extends(EventsDialog, _super);
            function EventsDialog() {
                _super.apply(this, arguments);
                this.form = new MwwlDB.EventsForm(this.idPrefix);
            }
            EventsDialog.prototype.getFormKey = function () { return MwwlDB.EventsForm.formKey; };
            EventsDialog.prototype.getIdProperty = function () { return MwwlDB.EventsRow.idProperty; };
            EventsDialog.prototype.getLocalTextPrefix = function () { return MwwlDB.EventsRow.localTextPrefix; };
            EventsDialog.prototype.getNameProperty = function () { return MwwlDB.EventsRow.nameProperty; };
            EventsDialog.prototype.getService = function () { return MwwlDB.EventsService.baseUrl; };
            EventsDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], EventsDialog);
            return EventsDialog;
        }(Serenity.EntityDialog));
        MwwlDB.EventsDialog = EventsDialog;
    })(MwwlDB = MWWLAdmin.MwwlDB || (MWWLAdmin.MwwlDB = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var MWWLAdmin;
(function (MWWLAdmin) {
    var MwwlDB;
    (function (MwwlDB) {
        var EventsEditor = (function (_super) {
            __extends(EventsEditor, _super);
            function EventsEditor(container) {
                _super.call(this, container);
            }
            EventsEditor.prototype.getColumnsKey = function () { return 'MwwlDB.Events'; };
            EventsEditor.prototype.getDialogType = function () { return MwwlDB.EventsEditorDialog; };
            EventsEditor.prototype.getLocalTextPrefix = function () { return MwwlDB.EventsRow.localTextPrefix; };
            EventsEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], EventsEditor);
            return EventsEditor;
        }(MWWLAdmin.Common.GridEditorBase));
        MwwlDB.EventsEditor = EventsEditor;
    })(MwwlDB = MWWLAdmin.MwwlDB || (MWWLAdmin.MwwlDB = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var MWWLAdmin;
(function (MWWLAdmin) {
    var MwwlDB;
    (function (MwwlDB) {
        var EventsEditorDialog = (function (_super) {
            __extends(EventsEditorDialog, _super);
            function EventsEditorDialog() {
                _super.apply(this, arguments);
                this.form = new MwwlDB.EventsForm(this.idPrefix);
            }
            EventsEditorDialog.prototype.getFormKey = function () { return MwwlDB.EventsForm.formKey; };
            EventsEditorDialog.prototype.getLocalTextPrefix = function () { return MwwlDB.EventsRow.localTextPrefix; };
            EventsEditorDialog.prototype.getNameProperty = function () { return MwwlDB.EventsRow.nameProperty; };
            EventsEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], EventsEditorDialog);
            return EventsEditorDialog;
        }(MWWLAdmin.Common.GridEditorDialog));
        MwwlDB.EventsEditorDialog = EventsEditorDialog;
    })(MwwlDB = MWWLAdmin.MwwlDB || (MWWLAdmin.MwwlDB = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var MwwlDB;
    (function (MwwlDB) {
        var EventsGrid = (function (_super) {
            __extends(EventsGrid, _super);
            function EventsGrid(container) {
                _super.call(this, container);
            }
            EventsGrid.prototype.getColumnsKey = function () { return 'MwwlDB.Events'; };
            EventsGrid.prototype.getDialogType = function () { return MwwlDB.EventsDialog; };
            EventsGrid.prototype.getIdProperty = function () { return MwwlDB.EventsRow.idProperty; };
            EventsGrid.prototype.getLocalTextPrefix = function () { return MwwlDB.EventsRow.localTextPrefix; };
            EventsGrid.prototype.getService = function () { return MwwlDB.EventsService.baseUrl; };
            EventsGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], EventsGrid);
            return EventsGrid;
        }(Serenity.EntityGrid));
        MwwlDB.EventsGrid = EventsGrid;
    })(MwwlDB = MWWLAdmin.MwwlDB || (MWWLAdmin.MwwlDB = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var MwwlDB;
    (function (MwwlDB) {
        var CategoriesDialog = (function (_super) {
            __extends(CategoriesDialog, _super);
            function CategoriesDialog() {
                _super.apply(this, arguments);
                this.form = new MwwlDB.CategoriesForm(this.idPrefix);
            }
            CategoriesDialog.prototype.getFormKey = function () { return MwwlDB.CategoriesForm.formKey; };
            CategoriesDialog.prototype.getIdProperty = function () { return MwwlDB.CategoriesRow.idProperty; };
            CategoriesDialog.prototype.getLocalTextPrefix = function () { return MwwlDB.CategoriesRow.localTextPrefix; };
            CategoriesDialog.prototype.getNameProperty = function () { return MwwlDB.CategoriesRow.nameProperty; };
            CategoriesDialog.prototype.getService = function () { return MwwlDB.CategoriesService.baseUrl; };
            CategoriesDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], CategoriesDialog);
            return CategoriesDialog;
        }(Serenity.EntityDialog));
        MwwlDB.CategoriesDialog = CategoriesDialog;
    })(MwwlDB = MWWLAdmin.MwwlDB || (MWWLAdmin.MwwlDB = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var MWWLAdmin;
(function (MWWLAdmin) {
    var MwwlDB;
    (function (MwwlDB) {
        var CategoriesEditor = (function (_super) {
            __extends(CategoriesEditor, _super);
            function CategoriesEditor(container) {
                _super.call(this, container);
            }
            CategoriesEditor.prototype.getColumnsKey = function () { return 'MwwlDB.Categories'; };
            CategoriesEditor.prototype.getDialogType = function () { return MwwlDB.CategoriesEditorDialog; };
            CategoriesEditor.prototype.getLocalTextPrefix = function () { return MwwlDB.CategoriesRow.localTextPrefix; };
            CategoriesEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], CategoriesEditor);
            return CategoriesEditor;
        }(MWWLAdmin.Common.GridEditorBase));
        MwwlDB.CategoriesEditor = CategoriesEditor;
    })(MwwlDB = MWWLAdmin.MwwlDB || (MWWLAdmin.MwwlDB = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var MWWLAdmin;
(function (MWWLAdmin) {
    var MwwlDB;
    (function (MwwlDB) {
        var CategoriesEditorDialog = (function (_super) {
            __extends(CategoriesEditorDialog, _super);
            function CategoriesEditorDialog() {
                _super.apply(this, arguments);
                this.form = new MwwlDB.CategoriesForm(this.idPrefix);
            }
            CategoriesEditorDialog.prototype.getFormKey = function () { return MwwlDB.CategoriesForm.formKey; };
            CategoriesEditorDialog.prototype.getLocalTextPrefix = function () { return MwwlDB.CategoriesRow.localTextPrefix; };
            CategoriesEditorDialog.prototype.getNameProperty = function () { return MwwlDB.CategoriesRow.nameProperty; };
            CategoriesEditorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], CategoriesEditorDialog);
            return CategoriesEditorDialog;
        }(MWWLAdmin.Common.GridEditorDialog));
        MwwlDB.CategoriesEditorDialog = CategoriesEditorDialog;
    })(MwwlDB = MWWLAdmin.MwwlDB || (MWWLAdmin.MwwlDB = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var MwwlDB;
    (function (MwwlDB) {
        var CategoriesGrid = (function (_super) {
            __extends(CategoriesGrid, _super);
            function CategoriesGrid(container) {
                _super.call(this, container);
            }
            CategoriesGrid.prototype.getColumnsKey = function () { return 'MwwlDB.Categories'; };
            CategoriesGrid.prototype.getDialogType = function () { return MwwlDB.CategoriesDialog; };
            CategoriesGrid.prototype.getIdProperty = function () { return MwwlDB.CategoriesRow.idProperty; };
            CategoriesGrid.prototype.getLocalTextPrefix = function () { return MwwlDB.CategoriesRow.localTextPrefix; };
            CategoriesGrid.prototype.getService = function () { return MwwlDB.CategoriesService.baseUrl; };
            CategoriesGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CategoriesGrid);
            return CategoriesGrid;
        }(Serenity.EntityGrid));
        MwwlDB.CategoriesGrid = CategoriesGrid;
    })(MwwlDB = MWWLAdmin.MwwlDB || (MWWLAdmin.MwwlDB = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var Membership;
    (function (Membership) {
        var LoginPanel = (function (_super) {
            __extends(LoginPanel, _super);
            function LoginPanel(container) {
                var _this = this;
                _super.call(this, container);
                $(function () {
                    $('body').vegas({
                        delay: 10000,
                        cover: true,
                        overlay: Q.resolveUrl("~/scripts/vegas/overlays/01.png"),
                        slides: [
                            { src: Q.resolveUrl('~/content/site/slides/slide1.jpg'), transition: 'fade' },
                            { src: Q.resolveUrl('~/content/site/slides/slide2.jpg'), transition: 'fade' },
                            { src: Q.resolveUrl('~/content/site/slides/slide3.jpg'), transition: 'zoomOut' },
                            { src: Q.resolveUrl('~/content/site/slides/slide4.jpg'), transition: 'blur' },
                            { src: Q.resolveUrl('~/content/site/slides/slide5.jpg'), transition: 'swirlLeft' }
                        ]
                    });
                });
                this.form = new Membership.LoginForm(this.idPrefix);
                this.byId('LoginButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/Login'),
                        request: request,
                        onSuccess: function (response) {
                            var q = Q.parseQueryString();
                            var returnUrl = q['returnUrl'] || q['ReturnUrl'];
                            if (returnUrl) {
                                window.location.href = returnUrl;
                            }
                            else {
                                window.location.href = Q.resolveUrl('~/');
                            }
                        }
                    });
                });
            }
            LoginPanel.prototype.getFormKey = function () { return Membership.LoginForm.formKey; };
            LoginPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], LoginPanel);
            return LoginPanel;
        }(Serenity.PropertyPanel));
        Membership.LoginPanel = LoginPanel;
    })(Membership = MWWLAdmin.Membership || (MWWLAdmin.Membership = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var Membership;
    (function (Membership) {
        var SignUpPanel = (function (_super) {
            __extends(SignUpPanel, _super);
            function SignUpPanel(container) {
                var _this = this;
                _super.call(this, container);
                this.form = new Membership.SignUpForm(this.idPrefix);
                this.form.ConfirmEmail.addValidationRule(this.uniqueName, function (e) {
                    if (_this.form.ConfirmEmail.value !== _this.form.Email.value) {
                        return Q.text('Validation.EmailConfirm');
                    }
                });
                this.form.ConfirmPassword.addValidationRule(this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.Password.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/SignUp'),
                        request: {
                            DisplayName: _this.form.DisplayName.value,
                            Email: _this.form.Email.value,
                            Password: _this.form.Password.value
                        },
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.SignUp.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
            }
            SignUpPanel.prototype.getFormKey = function () { return Membership.SignUpForm.formKey; };
            SignUpPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], SignUpPanel);
            return SignUpPanel;
        }(Serenity.PropertyPanel));
        Membership.SignUpPanel = SignUpPanel;
    })(Membership = MWWLAdmin.Membership || (MWWLAdmin.Membership = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var Membership;
    (function (Membership) {
        var ResetPasswordPanel = (function (_super) {
            __extends(ResetPasswordPanel, _super);
            function ResetPasswordPanel(container) {
                var _this = this;
                _super.call(this, container);
                this.form = new Membership.ResetPasswordForm(this.idPrefix);
                this.form.NewPassword.addValidationRule(this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                this.form.ConfirmPassword.addValidationRule(this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    request.Token = _this.byId('Token').val();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ResetPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ResetPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/Account/Login');
                            });
                        }
                    });
                });
            }
            ResetPasswordPanel.prototype.getFormKey = function () { return Membership.ResetPasswordForm.formKey; };
            ResetPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ResetPasswordPanel);
            return ResetPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ResetPasswordPanel = ResetPasswordPanel;
    })(Membership = MWWLAdmin.Membership || (MWWLAdmin.Membership = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordPanel = (function (_super) {
            __extends(ForgotPasswordPanel, _super);
            function ForgotPasswordPanel(container) {
                var _this = this;
                _super.call(this, container);
                this.form = new Membership.ForgotPasswordForm(this.idPrefix);
                this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ForgotPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ForgotPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
            }
            ForgotPasswordPanel.prototype.getFormKey = function () { return Membership.ForgotPasswordForm.formKey; };
            ForgotPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ForgotPasswordPanel);
            return ForgotPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ForgotPasswordPanel = ForgotPasswordPanel;
    })(Membership = MWWLAdmin.Membership || (MWWLAdmin.Membership = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var Membership;
    (function (Membership) {
        var ChangePasswordPanel = (function (_super) {
            __extends(ChangePasswordPanel, _super);
            function ChangePasswordPanel(container) {
                var _this = this;
                _super.call(this, container);
                this.form = new Membership.ChangePasswordForm(this.idPrefix);
                this.form.NewPassword.addValidationRule(this.uniqueName, function (e) {
                    if (_this.form.w('ConfirmPassword', Serenity.PasswordEditor).value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                this.form.ConfirmPassword.addValidationRule(this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ChangePassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ChangePassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
            }
            ChangePasswordPanel.prototype.getFormKey = function () { return Membership.ChangePasswordForm.formKey; };
            ChangePasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ChangePasswordPanel);
            return ChangePasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ChangePasswordPanel = ChangePasswordPanel;
    })(Membership = MWWLAdmin.Membership || (MWWLAdmin.Membership = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var ScriptInitialization;
    (function (ScriptInitialization) {
        Q.Config.responsiveDialogs = true;
        Q.Config.rootNamespaces.push('MWWLAdmin');
    })(ScriptInitialization = MWWLAdmin.ScriptInitialization || (MWWLAdmin.ScriptInitialization = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var Common;
    (function (Common) {
        var UserPreferenceStorage = (function () {
            function UserPreferenceStorage() {
            }
            UserPreferenceStorage.prototype.getItem = function (key) {
                var value;
                Common.UserPreferenceService.Retrieve({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key
                }, function (response) { return value = response.Value; }, {
                    async: false
                });
                return value;
            };
            UserPreferenceStorage.prototype.setItem = function (key, data) {
                Common.UserPreferenceService.Update({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key,
                    Value: data
                });
            };
            return UserPreferenceStorage;
        }());
        Common.UserPreferenceStorage = UserPreferenceStorage;
    })(Common = MWWLAdmin.Common || (MWWLAdmin.Common = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var Common;
    (function (Common) {
        var PdfExportHelper;
        (function (PdfExportHelper) {
            function toAutoTableColumns(srcColumns, columnStyles, columnTitles) {
                return srcColumns.map(function (src) {
                    var col = {
                        dataKey: src.id || src.field,
                        title: src.name || ''
                    };
                    if (columnTitles && columnTitles[col.dataKey] != null)
                        col.title = columnTitles[col.dataKey];
                    var style = {};
                    if ((src.cssClass || '').indexOf("align-right") >= 0)
                        style.halign = 'right';
                    else if ((src.cssClass || '').indexOf("align-center") >= 0)
                        style.halign = 'center';
                    columnStyles[col.dataKey] = style;
                    return col;
                });
            }
            function toAutoTableData(entities, keys, srcColumns) {
                var el = document.createElement('span');
                var row = 0;
                return entities.map(function (item) {
                    var dst = {};
                    for (var cell = 0; cell < srcColumns.length; cell++) {
                        var src = srcColumns[cell];
                        var fld = src.field || '';
                        var key = keys[cell];
                        var txt = void 0;
                        var html = void 0;
                        if (src.formatter) {
                            html = src.formatter(row, cell, item[fld], src, item);
                        }
                        else if (src.format) {
                            html = src.format({ row: row, cell: cell, item: item, value: item[fld] });
                        }
                        else {
                            dst[key] = item[fld];
                            continue;
                        }
                        if (!html || (html.indexOf('<') < 0 && html.indexOf('&') < 0))
                            dst[key] = html;
                        else {
                            el.innerHTML = html;
                            if (el.children.length == 1 &&
                                $(el.children[0]).is(":input")) {
                                dst[key] = $(el.children[0]).val();
                            }
                            else if (el.children.length == 1 &&
                                $(el.children).is('.check-box')) {
                                dst[key] = $(el.children).hasClass("checked") ? "X" : "";
                            }
                            else
                                dst[key] = el.textContent || '';
                        }
                    }
                    row++;
                    return dst;
                });
            }
            function exportToPdf(options) {
                var g = options.grid;
                if (!options.onViewSubmit())
                    return;
                includeAutoTable();
                var request = Q.deepClone(g.view.params);
                request.Take = 0;
                request.Skip = 0;
                var sortBy = g.view.sortBy;
                if (sortBy != null)
                    request.Sort = sortBy;
                var gridColumns = g.slickGrid.getColumns();
                gridColumns = gridColumns.filter(function (x) { return x.id !== "__select__"; });
                request.IncludeColumns = [];
                for (var _i = 0, gridColumns_1 = gridColumns; _i < gridColumns_1.length; _i++) {
                    var column = gridColumns_1[_i];
                    request.IncludeColumns.push(column.id || column.field);
                }
                Q.serviceCall({
                    url: g.view.url,
                    request: request,
                    onSuccess: function (response) {
                        var doc = new jsPDF('l', 'pt');
                        var srcColumns = gridColumns;
                        var columnStyles = {};
                        var columns = toAutoTableColumns(srcColumns, columnStyles, options.columnTitles);
                        var keys = columns.map(function (x) { return x.dataKey; });
                        var entities = response.Entities || [];
                        var data = toAutoTableData(entities, keys, srcColumns);
                        doc.setFontSize(options.titleFontSize || 10);
                        doc.setFontStyle('bold');
                        var reportTitle = options.reportTitle || g.getTitle() || "Report";
                        doc.autoTableText(reportTitle, doc.internal.pageSize.width / 2, options.titleTop || 25, { halign: 'center' });
                        var totalPagesExp = "{{T}}";
                        var pageNumbers = options.pageNumbers == null || options.pageNumbers;
                        var autoOptions = $.extend({
                            margin: { top: 25, left: 25, right: 25, bottom: pageNumbers ? 25 : 30 },
                            startY: 60,
                            styles: {
                                fontSize: 8,
                                overflow: 'linebreak',
                                cellPadding: 2,
                                valign: 'middle'
                            },
                            columnStyles: columnStyles
                        }, options.tableOptions);
                        if (pageNumbers) {
                            var footer = function (data) {
                                var str = data.pageCount;
                                // Total page number plugin only available in jspdf v1.0+
                                if (typeof doc.putTotalPages === 'function') {
                                    str = str + " / " + totalPagesExp;
                                }
                                doc.autoTableText(str, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - autoOptions.margin.bottom, {
                                    halign: 'center'
                                });
                            };
                            autoOptions.afterPageContent = footer;
                        }
                        doc.autoTable(columns, data, autoOptions);
                        if (typeof doc.putTotalPages === 'function') {
                            doc.putTotalPages(totalPagesExp);
                        }
                        if (!options.output || options.output == "file") {
                            var fileName = options.reportTitle || "{0}_{1}.pdf";
                            fileName = Q.format(fileName, g.getTitle() || "report", Q.formatDate(new Date(), "yyyyMMdd_HHmm"));
                            doc.save(fileName);
                            return;
                        }
                        if (options.autoPrint)
                            doc.autoPrint();
                        var output = options.output;
                        if (output == 'newwindow' || '_blank')
                            output = 'dataurlnewwindow';
                        else if (output == 'window')
                            output = 'datauri';
                        doc.output(output);
                    }
                });
            }
            PdfExportHelper.exportToPdf = exportToPdf;
            function createToolButton(options) {
                return {
                    title: options.title || '',
                    hint: options.hint || 'PDF',
                    cssClass: 'export-pdf-button',
                    onClick: function () { return exportToPdf(options); },
                    separator: options.separator
                };
            }
            PdfExportHelper.createToolButton = createToolButton;
            function includeJsPDF() {
                if (typeof jsPDF !== "undefined")
                    return;
                var script = $("jsPDFScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.min.js"))
                    .appendTo(document.head);
            }
            function includeAutoTable() {
                includeJsPDF();
                if (typeof jsPDF === "undefined" ||
                    typeof jsPDF.API == "undefined" ||
                    typeof jsPDF.API.autoTable !== "undefined")
                    return;
                var script = $("jsPDFAutoTableScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFAutoTableScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.plugin.autotable.min.js"))
                    .appendTo(document.head);
            }
        })(PdfExportHelper = Common.PdfExportHelper || (Common.PdfExportHelper = {}));
    })(Common = MWWLAdmin.Common || (MWWLAdmin.Common = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var Common;
    (function (Common) {
        var LanguageSelection = (function (_super) {
            __extends(LanguageSelection, _super);
            function LanguageSelection(select, currentLanguage) {
                _super.call(this, select);
                currentLanguage = Q.coalesce(currentLanguage, 'en');
                this.change(function (e) {
                    $.cookie('LanguagePreference', select.val(), {
                        path: Q.Config.applicationPath,
                        expires: 365
                    });
                    window.location.reload(true);
                });
                Q.getLookupAsync('Administration.Language').then(function (x) {
                    if (!Q.any(x.items, function (z) { return z.LanguageId === currentLanguage; })) {
                        var idx = currentLanguage.lastIndexOf('-');
                        if (idx >= 0) {
                            currentLanguage = currentLanguage.substr(0, idx);
                            if (!Q.any(x.items, function (y) { return y.LanguageId === currentLanguage; })) {
                                currentLanguage = 'en';
                            }
                        }
                        else {
                            currentLanguage = 'en';
                        }
                    }
                    for (var _i = 0, _a = x.items; _i < _a.length; _i++) {
                        var l = _a[_i];
                        Q.addOption(select, l.LanguageId, l.LanguageName);
                    }
                    select.val(currentLanguage);
                });
            }
            return LanguageSelection;
        }(Serenity.Widget));
        Common.LanguageSelection = LanguageSelection;
    })(Common = MWWLAdmin.Common || (MWWLAdmin.Common = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var Common;
    (function (Common) {
        var SidebarSearch = (function (_super) {
            __extends(SidebarSearch, _super);
            function SidebarSearch(input, menuUL) {
                var _this = this;
                _super.call(this, input);
                new Serenity.QuickSearchInput(input, {
                    onSearch: function (field, text, success) {
                        _this.updateMatchFlags(text);
                        success(true);
                    }
                });
                this.menuUL = menuUL;
            }
            SidebarSearch.prototype.updateMatchFlags = function (text) {
                var liList = this.menuUL.find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (text == null) {
                    liList.show();
                    liList.removeClass('expanded');
                    return;
                }
                var parts = text.replace(',', ' ').split(' ').filter(function (x) { return !Q.isTrimmedEmpty(x); });
                for (var i = 0; i < parts.length; i++) {
                    parts[i] = Q.trimToNull(Select2.util.stripDiacritics(parts[i]).toUpperCase());
                }
                var items = liList;
                items.each(function (idx, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
                        var p = parts_1[_i];
                        if (p != null && !(title.indexOf(p) !== -1)) {
                            x.addClass('non-match');
                            break;
                        }
                    }
                });
                var matchingItems = items.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                liList.addClass('expanded');
            };
            return SidebarSearch;
        }(Serenity.Widget));
        Common.SidebarSearch = SidebarSearch;
    })(Common = MWWLAdmin.Common || (MWWLAdmin.Common = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var Common;
    (function (Common) {
        var ThemeSelection = (function (_super) {
            __extends(ThemeSelection, _super);
            function ThemeSelection(select) {
                var _this = this;
                _super.call(this, select);
                this.change(function (e) {
                    $.cookie('ThemePreference', select.val(), {
                        path: Q.Config.applicationPath,
                        expires: 365
                    });
                    $('body').removeClass('skin-' + _this.getCurrentTheme());
                    $('body').addClass('skin-' + select.val());
                });
                Q.addOption(select, 'blue', Q.text('Site.Layout.ThemeBlue'));
                Q.addOption(select, 'blue-light', Q.text('Site.Layout.ThemeBlueLight'));
                Q.addOption(select, 'purple', Q.text('Site.Layout.ThemePurple'));
                Q.addOption(select, 'purple-light', Q.text('Site.Layout.ThemePurpleLight'));
                Q.addOption(select, 'red', Q.text('Site.Layout.ThemeRed'));
                Q.addOption(select, 'red-light', Q.text('Site.Layout.ThemeRedLight'));
                Q.addOption(select, 'green', Q.text('Site.Layout.ThemeGreen'));
                Q.addOption(select, 'green-light', Q.text('Site.Layout.ThemeGreenLight'));
                Q.addOption(select, 'yellow', Q.text('Site.Layout.ThemeYellow'));
                Q.addOption(select, 'yellow-light', Q.text('Site.Layout.ThemeYellowLight'));
                Q.addOption(select, 'black', Q.text('Site.Layout.ThemeBlack'));
                Q.addOption(select, 'black-light', Q.text('Site.Layout.ThemeBlackLight'));
                select.val(this.getCurrentTheme());
            }
            ThemeSelection.prototype.getCurrentTheme = function () {
                var skinClass = Q.first(($('body').attr('class') || '').split(' '), function (x) { return Q.startsWith(x, 'skin-'); });
                if (skinClass) {
                    return skinClass.substr(5);
                }
                return 'blue';
            };
            return ThemeSelection;
        }(Serenity.Widget));
        Common.ThemeSelection = ThemeSelection;
    })(Common = MWWLAdmin.Common || (MWWLAdmin.Common = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var Administration;
    (function (Administration) {
        var LanguageForm = (function (_super) {
            __extends(LanguageForm, _super);
            function LanguageForm() {
                _super.apply(this, arguments);
            }
            LanguageForm.formKey = 'Administration.Language';
            return LanguageForm;
        }(Serenity.PrefixedContext));
        Administration.LanguageForm = LanguageForm;
        [['LanguageId', function () { return Serenity.StringEditor; }], ['LanguageName', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(LanguageForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Administration = MWWLAdmin.Administration || (MWWLAdmin.Administration = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var Administration;
    (function (Administration) {
        var LanguageRow;
        (function (LanguageRow) {
            LanguageRow.idProperty = 'Id';
            LanguageRow.nameProperty = 'LanguageName';
            LanguageRow.localTextPrefix = 'Administration.Language';
            LanguageRow.lookupKey = 'Administration.Language';
            function getLookup() {
                return Q.getLookup('Administration.Language');
            }
            LanguageRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = LanguageRow.Fields || (LanguageRow.Fields = {}));
            ['Id', 'LanguageId', 'LanguageName'].forEach(function (x) { return Fields[x] = x; });
        })(LanguageRow = Administration.LanguageRow || (Administration.LanguageRow = {}));
    })(Administration = MWWLAdmin.Administration || (MWWLAdmin.Administration = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var Administration;
    (function (Administration) {
        var LanguageService;
        (function (LanguageService) {
            LanguageService.baseUrl = 'Administration/Language';
            var Methods;
            (function (Methods) {
            })(Methods = LanguageService.Methods || (LanguageService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                LanguageService[x] = function (r, s, o) { return Q.serviceRequest(LanguageService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = LanguageService.baseUrl + '/' + x;
            });
        })(LanguageService = Administration.LanguageService || (Administration.LanguageService = {}));
    })(Administration = MWWLAdmin.Administration || (MWWLAdmin.Administration = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var Administration;
    (function (Administration) {
        var RoleForm = (function (_super) {
            __extends(RoleForm, _super);
            function RoleForm() {
                _super.apply(this, arguments);
            }
            RoleForm.formKey = 'Administration.Role';
            return RoleForm;
        }(Serenity.PrefixedContext));
        Administration.RoleForm = RoleForm;
        [['RoleName', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(RoleForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Administration = MWWLAdmin.Administration || (MWWLAdmin.Administration = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var Administration;
    (function (Administration) {
        var RolePermissionRow;
        (function (RolePermissionRow) {
            RolePermissionRow.idProperty = 'RolePermissionId';
            RolePermissionRow.nameProperty = 'PermissionKey';
            RolePermissionRow.localTextPrefix = 'Administration.RolePermission';
            var Fields;
            (function (Fields) {
            })(Fields = RolePermissionRow.Fields || (RolePermissionRow.Fields = {}));
            ['RolePermissionId', 'RoleId', 'PermissionKey', 'RoleRoleName'].forEach(function (x) { return Fields[x] = x; });
        })(RolePermissionRow = Administration.RolePermissionRow || (Administration.RolePermissionRow = {}));
    })(Administration = MWWLAdmin.Administration || (MWWLAdmin.Administration = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var Administration;
    (function (Administration) {
        var RolePermissionService;
        (function (RolePermissionService) {
            RolePermissionService.baseUrl = 'Administration/RolePermission';
            var Methods;
            (function (Methods) {
            })(Methods = RolePermissionService.Methods || (RolePermissionService.Methods = {}));
            ['Update', 'List'].forEach(function (x) {
                RolePermissionService[x] = function (r, s, o) { return Q.serviceRequest(RolePermissionService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = RolePermissionService.baseUrl + '/' + x;
            });
        })(RolePermissionService = Administration.RolePermissionService || (Administration.RolePermissionService = {}));
    })(Administration = MWWLAdmin.Administration || (MWWLAdmin.Administration = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var Administration;
    (function (Administration) {
        var RoleRow;
        (function (RoleRow) {
            RoleRow.idProperty = 'RoleId';
            RoleRow.nameProperty = 'RoleName';
            RoleRow.localTextPrefix = 'Administration.Role';
            RoleRow.lookupKey = 'Administration.Role';
            function getLookup() {
                return Q.getLookup('Administration.Role');
            }
            RoleRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = RoleRow.Fields || (RoleRow.Fields = {}));
            ['RoleId', 'RoleName'].forEach(function (x) { return Fields[x] = x; });
        })(RoleRow = Administration.RoleRow || (Administration.RoleRow = {}));
    })(Administration = MWWLAdmin.Administration || (MWWLAdmin.Administration = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var Administration;
    (function (Administration) {
        var RoleService;
        (function (RoleService) {
            RoleService.baseUrl = 'Administration/Role';
            var Methods;
            (function (Methods) {
            })(Methods = RoleService.Methods || (RoleService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                RoleService[x] = function (r, s, o) { return Q.serviceRequest(RoleService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = RoleService.baseUrl + '/' + x;
            });
        })(RoleService = Administration.RoleService || (Administration.RoleService = {}));
    })(Administration = MWWLAdmin.Administration || (MWWLAdmin.Administration = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var Administration;
    (function (Administration) {
        var TranslationService;
        (function (TranslationService) {
            TranslationService.baseUrl = 'Administration/Translation';
            var Methods;
            (function (Methods) {
            })(Methods = TranslationService.Methods || (TranslationService.Methods = {}));
            ['List', 'Update'].forEach(function (x) {
                TranslationService[x] = function (r, s, o) { return Q.serviceRequest(TranslationService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = TranslationService.baseUrl + '/' + x;
            });
        })(TranslationService = Administration.TranslationService || (Administration.TranslationService = {}));
    })(Administration = MWWLAdmin.Administration || (MWWLAdmin.Administration = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var Administration;
    (function (Administration) {
        var UserForm = (function (_super) {
            __extends(UserForm, _super);
            function UserForm() {
                _super.apply(this, arguments);
            }
            UserForm.formKey = 'Administration.User';
            return UserForm;
        }(Serenity.PrefixedContext));
        Administration.UserForm = UserForm;
        [['Username', function () { return Serenity.StringEditor; }], ['DisplayName', function () { return Serenity.StringEditor; }], ['Email', function () { return Serenity.EmailEditor; }], ['Password', function () { return Serenity.PasswordEditor; }], ['PasswordConfirm', function () { return Serenity.PasswordEditor; }], ['Source', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(UserForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Administration = MWWLAdmin.Administration || (MWWLAdmin.Administration = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var Administration;
    (function (Administration) {
        var UserPermissionRow;
        (function (UserPermissionRow) {
            UserPermissionRow.idProperty = 'UserPermissionId';
            UserPermissionRow.nameProperty = 'PermissionKey';
            UserPermissionRow.localTextPrefix = 'Administration.UserPermission';
            var Fields;
            (function (Fields) {
            })(Fields = UserPermissionRow.Fields || (UserPermissionRow.Fields = {}));
            ['UserPermissionId', 'UserId', 'PermissionKey', 'Granted', 'Username', 'User'].forEach(function (x) { return Fields[x] = x; });
        })(UserPermissionRow = Administration.UserPermissionRow || (Administration.UserPermissionRow = {}));
    })(Administration = MWWLAdmin.Administration || (MWWLAdmin.Administration = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var Administration;
    (function (Administration) {
        var UserPermissionService;
        (function (UserPermissionService) {
            UserPermissionService.baseUrl = 'Administration/UserPermission';
            var Methods;
            (function (Methods) {
            })(Methods = UserPermissionService.Methods || (UserPermissionService.Methods = {}));
            ['Update', 'List', 'ListRolePermissions', 'ListPermissionKeys'].forEach(function (x) {
                UserPermissionService[x] = function (r, s, o) { return Q.serviceRequest(UserPermissionService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = UserPermissionService.baseUrl + '/' + x;
            });
        })(UserPermissionService = Administration.UserPermissionService || (Administration.UserPermissionService = {}));
    })(Administration = MWWLAdmin.Administration || (MWWLAdmin.Administration = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var Administration;
    (function (Administration) {
        var UserRoleRow;
        (function (UserRoleRow) {
            UserRoleRow.idProperty = 'UserRoleId';
            UserRoleRow.localTextPrefix = 'Administration.UserRole';
            var Fields;
            (function (Fields) {
            })(Fields = UserRoleRow.Fields || (UserRoleRow.Fields = {}));
            ['UserRoleId', 'UserId', 'RoleId', 'Username', 'User'].forEach(function (x) { return Fields[x] = x; });
        })(UserRoleRow = Administration.UserRoleRow || (Administration.UserRoleRow = {}));
    })(Administration = MWWLAdmin.Administration || (MWWLAdmin.Administration = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var Administration;
    (function (Administration) {
        var UserRoleService;
        (function (UserRoleService) {
            UserRoleService.baseUrl = 'Administration/UserRole';
            var Methods;
            (function (Methods) {
            })(Methods = UserRoleService.Methods || (UserRoleService.Methods = {}));
            ['Update', 'List'].forEach(function (x) {
                UserRoleService[x] = function (r, s, o) { return Q.serviceRequest(UserRoleService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = UserRoleService.baseUrl + '/' + x;
            });
        })(UserRoleService = Administration.UserRoleService || (Administration.UserRoleService = {}));
    })(Administration = MWWLAdmin.Administration || (MWWLAdmin.Administration = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var Administration;
    (function (Administration) {
        var UserRow;
        (function (UserRow) {
            UserRow.idProperty = 'UserId';
            UserRow.isActiveProperty = 'IsActive';
            UserRow.nameProperty = 'Username';
            UserRow.localTextPrefix = 'Administration.User';
            var Fields;
            (function (Fields) {
            })(Fields = UserRow.Fields || (UserRow.Fields = {}));
            ['UserId', 'Username', 'Source', 'PasswordHash', 'PasswordSalt', 'DisplayName', 'Email', 'LastDirectoryUpdate', 'IsActive', 'Password', 'PasswordConfirm', 'InsertUserId', 'InsertDate', 'UpdateUserId', 'UpdateDate'].forEach(function (x) { return Fields[x] = x; });
        })(UserRow = Administration.UserRow || (Administration.UserRow = {}));
    })(Administration = MWWLAdmin.Administration || (MWWLAdmin.Administration = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var Administration;
    (function (Administration) {
        var UserService;
        (function (UserService) {
            UserService.baseUrl = 'Administration/User';
            var Methods;
            (function (Methods) {
            })(Methods = UserService.Methods || (UserService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Undelete', 'Retrieve', 'List'].forEach(function (x) {
                UserService[x] = function (r, s, o) { return Q.serviceRequest(UserService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = UserService.baseUrl + '/' + x;
            });
        })(UserService = Administration.UserService || (Administration.UserService = {}));
    })(Administration = MWWLAdmin.Administration || (MWWLAdmin.Administration = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var Common;
    (function (Common) {
        var UserPreferenceRow;
        (function (UserPreferenceRow) {
            UserPreferenceRow.idProperty = 'UserPreferenceId';
            UserPreferenceRow.nameProperty = 'Name';
            UserPreferenceRow.localTextPrefix = 'Common.UserPreference';
            var Fields;
            (function (Fields) {
            })(Fields = UserPreferenceRow.Fields || (UserPreferenceRow.Fields = {}));
            ['UserPreferenceId', 'UserId', 'PreferenceType', 'Name', 'Value'].forEach(function (x) { return Fields[x] = x; });
        })(UserPreferenceRow = Common.UserPreferenceRow || (Common.UserPreferenceRow = {}));
    })(Common = MWWLAdmin.Common || (MWWLAdmin.Common = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var Common;
    (function (Common) {
        var UserPreferenceService;
        (function (UserPreferenceService) {
            UserPreferenceService.baseUrl = 'Common/UserPreference';
            var Methods;
            (function (Methods) {
            })(Methods = UserPreferenceService.Methods || (UserPreferenceService.Methods = {}));
            ['Update', 'Retrieve'].forEach(function (x) {
                UserPreferenceService[x] = function (r, s, o) { return Q.serviceRequest(UserPreferenceService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = UserPreferenceService.baseUrl + '/' + x;
            });
        })(UserPreferenceService = Common.UserPreferenceService || (Common.UserPreferenceService = {}));
    })(Common = MWWLAdmin.Common || (MWWLAdmin.Common = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var Membership;
    (function (Membership) {
        var ChangePasswordForm = (function (_super) {
            __extends(ChangePasswordForm, _super);
            function ChangePasswordForm() {
                _super.apply(this, arguments);
            }
            ChangePasswordForm.formKey = 'Membership.ChangePassword';
            return ChangePasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ChangePasswordForm = ChangePasswordForm;
        [['OldPassword', function () { return Serenity.PasswordEditor; }], ['NewPassword', function () { return Serenity.PasswordEditor; }], ['ConfirmPassword', function () { return Serenity.PasswordEditor; }]].forEach(function (x) { return Object.defineProperty(ChangePasswordForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = MWWLAdmin.Membership || (MWWLAdmin.Membership = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordForm = (function (_super) {
            __extends(ForgotPasswordForm, _super);
            function ForgotPasswordForm() {
                _super.apply(this, arguments);
            }
            ForgotPasswordForm.formKey = 'Membership.ForgotPassword';
            return ForgotPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ForgotPasswordForm = ForgotPasswordForm;
        [['Email', function () { return Serenity.EmailEditor; }]].forEach(function (x) { return Object.defineProperty(ForgotPasswordForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = MWWLAdmin.Membership || (MWWLAdmin.Membership = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var Membership;
    (function (Membership) {
        var LoginForm = (function (_super) {
            __extends(LoginForm, _super);
            function LoginForm() {
                _super.apply(this, arguments);
            }
            LoginForm.formKey = 'Membership.Login';
            return LoginForm;
        }(Serenity.PrefixedContext));
        Membership.LoginForm = LoginForm;
        [['Username', function () { return Serenity.StringEditor; }], ['Password', function () { return Serenity.PasswordEditor; }]].forEach(function (x) { return Object.defineProperty(LoginForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = MWWLAdmin.Membership || (MWWLAdmin.Membership = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var Membership;
    (function (Membership) {
        var ResetPasswordForm = (function (_super) {
            __extends(ResetPasswordForm, _super);
            function ResetPasswordForm() {
                _super.apply(this, arguments);
            }
            ResetPasswordForm.formKey = 'Membership.ResetPassword';
            return ResetPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ResetPasswordForm = ResetPasswordForm;
        [['NewPassword', function () { return Serenity.PasswordEditor; }], ['ConfirmPassword', function () { return Serenity.PasswordEditor; }]].forEach(function (x) { return Object.defineProperty(ResetPasswordForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = MWWLAdmin.Membership || (MWWLAdmin.Membership = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var Membership;
    (function (Membership) {
        var SignUpForm = (function (_super) {
            __extends(SignUpForm, _super);
            function SignUpForm() {
                _super.apply(this, arguments);
            }
            SignUpForm.formKey = 'Membership.SignUp';
            return SignUpForm;
        }(Serenity.PrefixedContext));
        Membership.SignUpForm = SignUpForm;
        [['DisplayName', function () { return Serenity.StringEditor; }], ['Email', function () { return Serenity.EmailEditor; }], ['ConfirmEmail', function () { return Serenity.EmailEditor; }], ['Password', function () { return Serenity.PasswordEditor; }], ['ConfirmPassword', function () { return Serenity.PasswordEditor; }]].forEach(function (x) { return Object.defineProperty(SignUpForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = MWWLAdmin.Membership || (MWWLAdmin.Membership = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var MwwlDB;
    (function (MwwlDB) {
        var CategoriesForm = (function (_super) {
            __extends(CategoriesForm, _super);
            function CategoriesForm() {
                _super.apply(this, arguments);
            }
            CategoriesForm.formKey = 'MwwlDB.Categories';
            return CategoriesForm;
        }(Serenity.PrefixedContext));
        MwwlDB.CategoriesForm = CategoriesForm;
        [['Name', function () { return Serenity.StringEditor; }], ['Description', function () { return Serenity.StringEditor; }], ['Active', function () { return Serenity.BooleanEditor; }]].forEach(function (x) { return Object.defineProperty(CategoriesForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(MwwlDB = MWWLAdmin.MwwlDB || (MWWLAdmin.MwwlDB = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var MwwlDB;
    (function (MwwlDB) {
        var CategoriesRow;
        (function (CategoriesRow) {
            CategoriesRow.idProperty = 'Id';
            CategoriesRow.nameProperty = 'Name';
            CategoriesRow.localTextPrefix = 'MwwlDB.Categories';
            CategoriesRow.lookupKey = 'MwwlDB.Categories';
            function getLookup() {
                return Q.getLookup('MwwlDB.Categories');
            }
            CategoriesRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = CategoriesRow.Fields || (CategoriesRow.Fields = {}));
            ['Id', 'Name', 'Description', 'Active'].forEach(function (x) { return Fields[x] = x; });
        })(CategoriesRow = MwwlDB.CategoriesRow || (MwwlDB.CategoriesRow = {}));
    })(MwwlDB = MWWLAdmin.MwwlDB || (MWWLAdmin.MwwlDB = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var MwwlDB;
    (function (MwwlDB) {
        var CategoriesService;
        (function (CategoriesService) {
            CategoriesService.baseUrl = 'MwwlDB/Categories';
            var Methods;
            (function (Methods) {
            })(Methods = CategoriesService.Methods || (CategoriesService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                CategoriesService[x] = function (r, s, o) { return Q.serviceRequest(CategoriesService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = CategoriesService.baseUrl + '/' + x;
            });
        })(CategoriesService = MwwlDB.CategoriesService || (MwwlDB.CategoriesService = {}));
    })(MwwlDB = MWWLAdmin.MwwlDB || (MWWLAdmin.MwwlDB = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var MwwlDB;
    (function (MwwlDB) {
        var EventsForm = (function (_super) {
            __extends(EventsForm, _super);
            function EventsForm() {
                _super.apply(this, arguments);
            }
            EventsForm.formKey = 'MwwlDB.Events';
            return EventsForm;
        }(Serenity.PrefixedContext));
        MwwlDB.EventsForm = EventsForm;
        [['EventName', function () { return Serenity.StringEditor; }], ['EventLocation', function () { return Serenity.StringEditor; }], ['EventLink', function () { return Serenity.StringEditor; }], ['EventStartDate', function () { return Serenity.DateEditor; }], ['EventEndDate', function () { return Serenity.DateEditor; }], ['EventActive', function () { return Serenity.BooleanEditor; }]].forEach(function (x) { return Object.defineProperty(EventsForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(MwwlDB = MWWLAdmin.MwwlDB || (MWWLAdmin.MwwlDB = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var MwwlDB;
    (function (MwwlDB) {
        var EventsRow;
        (function (EventsRow) {
            EventsRow.idProperty = 'EventId';
            EventsRow.nameProperty = 'EventName';
            EventsRow.localTextPrefix = 'MwwlDB.Events';
            var Fields;
            (function (Fields) {
            })(Fields = EventsRow.Fields || (EventsRow.Fields = {}));
            ['EventId', 'EventName', 'EventLocation', 'EventLink', 'EventStartDate', 'EventEndDate', 'EventActive'].forEach(function (x) { return Fields[x] = x; });
        })(EventsRow = MwwlDB.EventsRow || (MwwlDB.EventsRow = {}));
    })(MwwlDB = MWWLAdmin.MwwlDB || (MWWLAdmin.MwwlDB = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var MwwlDB;
    (function (MwwlDB) {
        var EventsService;
        (function (EventsService) {
            EventsService.baseUrl = 'MwwlDB/Events';
            var Methods;
            (function (Methods) {
            })(Methods = EventsService.Methods || (EventsService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                EventsService[x] = function (r, s, o) { return Q.serviceRequest(EventsService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = EventsService.baseUrl + '/' + x;
            });
        })(EventsService = MwwlDB.EventsService || (MwwlDB.EventsService = {}));
    })(MwwlDB = MWWLAdmin.MwwlDB || (MWWLAdmin.MwwlDB = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var MwwlDB;
    (function (MwwlDB) {
        var PaintingCategoriesRow;
        (function (PaintingCategoriesRow) {
            PaintingCategoriesRow.idProperty = 'PaintingCategoriesId';
            PaintingCategoriesRow.localTextPrefix = 'MwwlDB.PaintingCategories';
            var Fields;
            (function (Fields) {
            })(Fields = PaintingCategoriesRow.Fields || (PaintingCategoriesRow.Fields = {}));
            ['PaintingCategoriesId', 'CategoryId', 'PaintingId', 'CategoryName', 'CategoryDescription', 'CategoryActive', 'PaintingTitle', 'PaintingOriginalFileName', 'PaintingDimension', 'PaintingWorkshop', 'PaintingOriginalAvailable', 'PaintingOriginalPrice', 'PaintingFramed'].forEach(function (x) { return Fields[x] = x; });
        })(PaintingCategoriesRow = MwwlDB.PaintingCategoriesRow || (MwwlDB.PaintingCategoriesRow = {}));
    })(MwwlDB = MWWLAdmin.MwwlDB || (MWWLAdmin.MwwlDB = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var MwwlDB;
    (function (MwwlDB) {
        var PaintingsForm = (function (_super) {
            __extends(PaintingsForm, _super);
            function PaintingsForm() {
                _super.apply(this, arguments);
            }
            PaintingsForm.formKey = 'MwwlDB.Paintings';
            return PaintingsForm;
        }(Serenity.PrefixedContext));
        MwwlDB.PaintingsForm = PaintingsForm;
        [['Title', function () { return Serenity.StringEditor; }], ['OriginalFileName', function () { return Serenity.StringEditor; }], ['Dimension', function () { return Serenity.StringEditor; }], ['Workshop', function () { return Serenity.BooleanEditor; }], ['OriginalAvailable', function () { return Serenity.BooleanEditor; }], ['OriginalPrice', function () { return Serenity.DecimalEditor; }], ['Framed', function () { return Serenity.BooleanEditor; }], ['CategoryList', function () { return Serenity.LookupEditor; }]].forEach(function (x) { return Object.defineProperty(PaintingsForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(MwwlDB = MWWLAdmin.MwwlDB || (MWWLAdmin.MwwlDB = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var MwwlDB;
    (function (MwwlDB) {
        var PaintingsRow;
        (function (PaintingsRow) {
            PaintingsRow.idProperty = 'Id';
            PaintingsRow.nameProperty = 'Title';
            PaintingsRow.localTextPrefix = 'MwwlDB.Paintings';
            var Fields;
            (function (Fields) {
            })(Fields = PaintingsRow.Fields || (PaintingsRow.Fields = {}));
            ['Id', 'Title', 'OriginalFileName', 'Dimension', 'Workshop', 'OriginalAvailable', 'OriginalPrice', 'Framed', 'CategoryList'].forEach(function (x) { return Fields[x] = x; });
        })(PaintingsRow = MwwlDB.PaintingsRow || (MwwlDB.PaintingsRow = {}));
    })(MwwlDB = MWWLAdmin.MwwlDB || (MWWLAdmin.MwwlDB = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var MwwlDB;
    (function (MwwlDB) {
        var PaintingsService;
        (function (PaintingsService) {
            PaintingsService.baseUrl = 'MwwlDB/Paintings';
            var Methods;
            (function (Methods) {
            })(Methods = PaintingsService.Methods || (PaintingsService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                PaintingsService[x] = function (r, s, o) { return Q.serviceRequest(PaintingsService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = PaintingsService.baseUrl + '/' + x;
            });
        })(PaintingsService = MwwlDB.PaintingsService || (MwwlDB.PaintingsService = {}));
    })(MwwlDB = MWWLAdmin.MwwlDB || (MWWLAdmin.MwwlDB = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var MwwlDB;
    (function (MwwlDB) {
        var PricesForm = (function (_super) {
            __extends(PricesForm, _super);
            function PricesForm() {
                _super.apply(this, arguments);
            }
            PricesForm.formKey = 'MwwlDB.Prices';
            return PricesForm;
        }(Serenity.PrefixedContext));
        MwwlDB.PricesForm = PricesForm;
        [['Item', function () { return Serenity.StringEditor; }], ['Description', function () { return Serenity.TextAreaEditor; }], ['Price', function () { return Serenity.DecimalEditor; }], ['Active', function () { return Serenity.BooleanEditor; }], ['ProductId', function () { return Serenity.LookupEditor; }]].forEach(function (x) { return Object.defineProperty(PricesForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(MwwlDB = MWWLAdmin.MwwlDB || (MWWLAdmin.MwwlDB = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var MwwlDB;
    (function (MwwlDB) {
        var PricesRow;
        (function (PricesRow) {
            PricesRow.idProperty = 'Id';
            PricesRow.nameProperty = 'Item';
            PricesRow.localTextPrefix = 'MwwlDB.Prices';
            var Fields;
            (function (Fields) {
            })(Fields = PricesRow.Fields || (PricesRow.Fields = {}));
            ['Id', 'Item', 'Description', 'Price', 'Active', 'ProductId', 'ProductTitle', 'ProductDescription', 'ProductAvailable', 'ProductSequence'].forEach(function (x) { return Fields[x] = x; });
        })(PricesRow = MwwlDB.PricesRow || (MwwlDB.PricesRow = {}));
    })(MwwlDB = MWWLAdmin.MwwlDB || (MWWLAdmin.MwwlDB = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var MwwlDB;
    (function (MwwlDB) {
        var PricesService;
        (function (PricesService) {
            PricesService.baseUrl = 'MwwlDB/Prices';
            var Methods;
            (function (Methods) {
            })(Methods = PricesService.Methods || (PricesService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                PricesService[x] = function (r, s, o) { return Q.serviceRequest(PricesService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = PricesService.baseUrl + '/' + x;
            });
        })(PricesService = MwwlDB.PricesService || (MwwlDB.PricesService = {}));
    })(MwwlDB = MWWLAdmin.MwwlDB || (MWWLAdmin.MwwlDB = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var MwwlDB;
    (function (MwwlDB) {
        var ProductsForm = (function (_super) {
            __extends(ProductsForm, _super);
            function ProductsForm() {
                _super.apply(this, arguments);
            }
            ProductsForm.formKey = 'MwwlDB.Products';
            return ProductsForm;
        }(Serenity.PrefixedContext));
        MwwlDB.ProductsForm = ProductsForm;
        [['Title', function () { return Serenity.StringEditor; }], ['Description', function () { return Serenity.TextAreaEditor; }], ['Available', function () { return Serenity.BooleanEditor; }], ['Sequence', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(ProductsForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(MwwlDB = MWWLAdmin.MwwlDB || (MWWLAdmin.MwwlDB = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var MwwlDB;
    (function (MwwlDB) {
        var ProductsRow;
        (function (ProductsRow) {
            ProductsRow.idProperty = 'Id';
            ProductsRow.nameProperty = 'Title';
            ProductsRow.localTextPrefix = 'MwwlDB.Products';
            ProductsRow.lookupKey = 'MwwlDB.Products';
            function getLookup() {
                return Q.getLookup('MwwlDB.Products');
            }
            ProductsRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = ProductsRow.Fields || (ProductsRow.Fields = {}));
            ['Id', 'Title', 'Description', 'Available', 'Sequence'].forEach(function (x) { return Fields[x] = x; });
        })(ProductsRow = MwwlDB.ProductsRow || (MwwlDB.ProductsRow = {}));
    })(MwwlDB = MWWLAdmin.MwwlDB || (MWWLAdmin.MwwlDB = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var MwwlDB;
    (function (MwwlDB) {
        var ProductsService;
        (function (ProductsService) {
            ProductsService.baseUrl = 'MwwlDB/Products';
            var Methods;
            (function (Methods) {
            })(Methods = ProductsService.Methods || (ProductsService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                ProductsService[x] = function (r, s, o) { return Q.serviceRequest(ProductsService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = ProductsService.baseUrl + '/' + x;
            });
        })(ProductsService = MwwlDB.ProductsService || (MwwlDB.ProductsService = {}));
    })(MwwlDB = MWWLAdmin.MwwlDB || (MWWLAdmin.MwwlDB = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var MwwlDB;
    (function (MwwlDB) {
        var TextsForm = (function (_super) {
            __extends(TextsForm, _super);
            function TextsForm() {
                _super.apply(this, arguments);
            }
            TextsForm.formKey = 'MwwlDB.Texts';
            return TextsForm;
        }(Serenity.PrefixedContext));
        MwwlDB.TextsForm = TextsForm;
        [['Text', function () { return Serenity.TextAreaEditor; }], ['Note', function () { return Serenity.TextAreaEditor; }]].forEach(function (x) { return Object.defineProperty(TextsForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(MwwlDB = MWWLAdmin.MwwlDB || (MWWLAdmin.MwwlDB = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var MwwlDB;
    (function (MwwlDB) {
        var TextsRow;
        (function (TextsRow) {
            TextsRow.idProperty = 'Id';
            TextsRow.nameProperty = 'Id';
            TextsRow.localTextPrefix = 'MwwlDB.Texts';
            var Fields;
            (function (Fields) {
            })(Fields = TextsRow.Fields || (TextsRow.Fields = {}));
            ['Id', 'Text', 'Note'].forEach(function (x) { return Fields[x] = x; });
        })(TextsRow = MwwlDB.TextsRow || (MwwlDB.TextsRow = {}));
    })(MwwlDB = MWWLAdmin.MwwlDB || (MWWLAdmin.MwwlDB = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var MwwlDB;
    (function (MwwlDB) {
        var TextsService;
        (function (TextsService) {
            TextsService.baseUrl = 'MwwlDB/Texts';
            var Methods;
            (function (Methods) {
            })(Methods = TextsService.Methods || (TextsService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                TextsService[x] = function (r, s, o) { return Q.serviceRequest(TextsService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = TextsService.baseUrl + '/' + x;
            });
        })(TextsService = MwwlDB.TextsService || (MwwlDB.TextsService = {}));
    })(MwwlDB = MWWLAdmin.MwwlDB || (MWWLAdmin.MwwlDB = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var BasicProgressDialog = (function (_super) {
        __extends(BasicProgressDialog, _super);
        function BasicProgressDialog() {
            var _this = this;
            _super.call(this);
            this.byId('ProgressBar').progressbar({
                max: 100,
                value: 0,
                change: function (e, v) {
                    _this.byId('ProgressLabel').text(_this.value + ' / ' + _this.max);
                }
            });
        }
        Object.defineProperty(BasicProgressDialog.prototype, "max", {
            get: function () {
                return this.byId('ProgressBar').progressbar().progressbar('option', 'max');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('option', 'max', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "value", {
            get: function () {
                return this.byId('ProgressBar').progressbar('value');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('value', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "title", {
            get: function () {
                return this.element.dialog().dialog('option', 'title');
            },
            set: function (value) {
                this.element.dialog().dialog('option', 'title', value);
            },
            enumerable: true,
            configurable: true
        });
        BasicProgressDialog.prototype.getDialogOptions = function () {
            var _this = this;
            var opt = _super.prototype.getDialogOptions.call(this);
            opt.title = Q.text('Site.BasicProgressDialog.PleaseWait');
            opt.width = 600;
            opt.buttons = [{
                    text: Q.text('Dialogs.CancelButton'),
                    click: function () {
                        _this.cancelled = true;
                        _this.element.closest('.ui-dialog')
                            .find('.ui-dialog-buttonpane .ui-button')
                            .attr('disabled', 'disabled')
                            .css('opacity', '0.5');
                        _this.element.dialog('option', 'title', Q.trimToNull(_this.cancelTitle) ||
                            Q.text('Site.BasicProgressDialog.CancelTitle'));
                    }
                }];
            return opt;
        };
        BasicProgressDialog.prototype.initDialog = function () {
            _super.prototype.initDialog.call(this);
            this.element.closest('.ui-dialog').find('.ui-dialog-titlebar-close').hide();
        };
        BasicProgressDialog.prototype.getTemplate = function () {
            return ("<div class='s-DialogContent s-BasicProgressDialogContent'>" +
                "<div id='~_StatusText' class='status-text' ></div>" +
                "<div id='~_ProgressBar' class='progress-bar'>" +
                "<div id='~_ProgressLabel' class='progress-label' ></div>" +
                "</div>" +
                "</div>");
        };
        return BasicProgressDialog;
    }(Serenity.TemplatedDialog));
    MWWLAdmin.BasicProgressDialog = BasicProgressDialog;
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var Common;
    (function (Common) {
        var BulkServiceAction = (function () {
            function BulkServiceAction() {
            }
            BulkServiceAction.prototype.createProgressDialog = function () {
                this.progressDialog = new MWWLAdmin.BasicProgressDialog();
                this.progressDialog.dialogOpen();
                this.progressDialog.max = this.keys.length;
                this.progressDialog.value = 0;
            };
            BulkServiceAction.prototype.getConfirmationFormat = function () {
                return Q.text('Site.BulkServiceAction.ConfirmationFormat');
            };
            BulkServiceAction.prototype.getConfirmationMessage = function (targetCount) {
                return Q.format(this.getConfirmationFormat(), targetCount);
            };
            BulkServiceAction.prototype.confirm = function (targetCount, action) {
                Q.confirm(this.getConfirmationMessage(targetCount), action);
            };
            BulkServiceAction.prototype.getNothingToProcessMessage = function () {
                return Q.text('Site.BulkServiceAction.NothingToProcess');
            };
            BulkServiceAction.prototype.nothingToProcess = function () {
                Q.notifyError(this.getNothingToProcessMessage());
            };
            BulkServiceAction.prototype.getParallelRequests = function () {
                return 1;
            };
            BulkServiceAction.prototype.getBatchSize = function () {
                return 1;
            };
            BulkServiceAction.prototype.startParallelExecution = function () {
                this.createProgressDialog();
                this.successCount = 0;
                this.errorCount = 0;
                this.pendingRequests = 0;
                this.completedRequests = 0;
                this.errorCount = 0;
                this.errorByKey = {};
                this.queue = this.keys.slice();
                this.queueIndex = 0;
                var parallelRequests = this.getParallelRequests();
                while (parallelRequests-- > 0) {
                    this.executeNextBatch();
                }
            };
            BulkServiceAction.prototype.serviceCallCleanup = function () {
                this.pendingRequests--;
                this.completedRequests++;
                var title = Q.text((this.progressDialog.cancelled ?
                    'Site.BasicProgressDialog.CancelTitle' : 'Site.BasicProgressDialog.PleaseWait'));
                title += ' (';
                if (this.successCount > 0) {
                    title += Q.format(Q.text('Site.BulkServiceAction.SuccessCount'), this.successCount);
                }
                if (this.errorCount > 0) {
                    if (this.successCount > 0) {
                        title += ', ';
                    }
                    title += Q.format(Q.text('Site.BulkServiceAction.ErrorCount'), this.errorCount);
                }
                this.progressDialog.title = title + ')';
                this.progressDialog.value = this.successCount + this.errorCount;
                if (!this.progressDialog.cancelled && this.progressDialog.value < this.keys.length) {
                    this.executeNextBatch();
                }
                else if (this.pendingRequests === 0) {
                    this.progressDialog.dialogClose();
                    this.showResults();
                    if (this.done) {
                        this.done();
                        this.done = null;
                    }
                }
            };
            BulkServiceAction.prototype.executeForBatch = function (batch) {
            };
            BulkServiceAction.prototype.executeNextBatch = function () {
                var batchSize = this.getBatchSize();
                var batch = [];
                while (true) {
                    if (batch.length >= batchSize) {
                        break;
                    }
                    if (this.queueIndex >= this.queue.length) {
                        break;
                    }
                    batch.push(this.queue[this.queueIndex++]);
                }
                if (batch.length > 0) {
                    this.pendingRequests++;
                    this.executeForBatch(batch);
                }
            };
            BulkServiceAction.prototype.getAllHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.AllHadErrorsFormat');
            };
            BulkServiceAction.prototype.showAllHadErrors = function () {
                Q.notifyError(Q.format(this.getAllHadErrorsFormat(), this.errorCount));
            };
            BulkServiceAction.prototype.getSomeHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.SomeHadErrorsFormat');
            };
            BulkServiceAction.prototype.showSomeHadErrors = function () {
                Q.notifyWarning(Q.format(this.getSomeHadErrorsFormat(), this.successCount, this.errorCount));
            };
            BulkServiceAction.prototype.getAllSuccessFormat = function () {
                return Q.text('Site.BulkServiceAction.AllSuccessFormat');
            };
            BulkServiceAction.prototype.showAllSuccess = function () {
                Q.notifySuccess(Q.format(this.getAllSuccessFormat(), this.successCount));
            };
            BulkServiceAction.prototype.showResults = function () {
                if (this.errorCount === 0 && this.successCount === 0) {
                    this.nothingToProcess();
                    return;
                }
                if (this.errorCount > 0 && this.successCount === 0) {
                    this.showAllHadErrors();
                    return;
                }
                if (this.errorCount > 0) {
                    this.showSomeHadErrors();
                    return;
                }
                this.showAllSuccess();
            };
            BulkServiceAction.prototype.execute = function (keys) {
                var _this = this;
                this.keys = keys;
                if (this.keys.length === 0) {
                    this.nothingToProcess();
                    return;
                }
                this.confirm(this.keys.length, function () { return _this.startParallelExecution(); });
            };
            BulkServiceAction.prototype.get_successCount = function () {
                return this.successCount;
            };
            BulkServiceAction.prototype.set_successCount = function (value) {
                this.successCount = value;
            };
            BulkServiceAction.prototype.get_errorCount = function () {
                return this.errorCount;
            };
            BulkServiceAction.prototype.set_errorCount = function (value) {
                this.errorCount = value;
            };
            return BulkServiceAction;
        }());
        Common.BulkServiceAction = BulkServiceAction;
    })(Common = MWWLAdmin.Common || (MWWLAdmin.Common = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var DialogUtils;
    (function (DialogUtils) {
        function pendingChangesConfirmation(element, hasPendingChanges) {
            element.bind('dialogbeforeclose', function (e) {
                if (!Serenity.WX.hasOriginalEvent(e) || !hasPendingChanges()) {
                    return;
                }
                e.preventDefault();
                Q.confirm('You have pending changes. Save them?', function () { return element.find('div.save-and-close-button').click(); }, {
                    onNo: function () {
                        element.dialog().dialog('close');
                    }
                });
            });
        }
        DialogUtils.pendingChangesConfirmation = pendingChangesConfirmation;
    })(DialogUtils = MWWLAdmin.DialogUtils || (MWWLAdmin.DialogUtils = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var Common;
    (function (Common) {
        var ExcelExportHelper;
        (function (ExcelExportHelper) {
            function createToolButton(options) {
                return {
                    hint: Q.coalesce(options.title, 'Excel'),
                    title: Q.coalesce(options.hint, ''),
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        if (!options.onViewSubmit()) {
                            return;
                        }
                        var grid = options.grid;
                        var request = Q.deepClone(grid.getView().params);
                        request.Take = 0;
                        request.Skip = 0;
                        var sortBy = grid.getView().sortBy;
                        if (sortBy) {
                            request.Sort = sortBy;
                        }
                        request.IncludeColumns = [];
                        var columns = grid.getGrid().getColumns();
                        for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
                            var column = columns_1[_i];
                            request.IncludeColumns.push(column.id || column.field);
                        }
                        Q.postToService({ service: options.service, request: request, target: '_blank' });
                    },
                    separator: options.separator
                };
            }
            ExcelExportHelper.createToolButton = createToolButton;
        })(ExcelExportHelper = Common.ExcelExportHelper || (Common.ExcelExportHelper = {}));
    })(Common = MWWLAdmin.Common || (MWWLAdmin.Common = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var LanguageList;
    (function (LanguageList) {
        function getValue() {
            var result = [];
            for (var _i = 0, _a = MWWLAdmin.Administration.LanguageRow.getLookup().items; _i < _a.length; _i++) {
                var k = _a[_i];
                if (k.LanguageId !== 'en') {
                    result.push([k.Id.toString(), k.LanguageName]);
                }
            }
            return result;
        }
        LanguageList.getValue = getValue;
    })(LanguageList = MWWLAdmin.LanguageList || (MWWLAdmin.LanguageList = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var Common;
    (function (Common) {
        var ReportHelper;
        (function (ReportHelper) {
            function createToolButton(options) {
                return {
                    title: Q.coalesce(options.title, 'Report'),
                    cssClass: Q.coalesce(options.cssClass, 'print-button'),
                    icon: options.icon,
                    onClick: function () {
                        Q.postToUrl({
                            url: '~/Report/' + (options.download ? 'Download' : 'Render'),
                            params: {
                                key: options.reportKey,
                                ext: Q.coalesce(options.extension, 'pdf'),
                                opt: (options.getParams == null ? '' : $.toJSON(options.getParams()))
                            },
                            target: Q.coalesce(options.target, '_blank')
                        });
                    }
                };
            }
            ReportHelper.createToolButton = createToolButton;
        })(ReportHelper = Common.ReportHelper || (Common.ReportHelper = {}));
    })(Common = MWWLAdmin.Common || (MWWLAdmin.Common = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var Administration;
    (function (Administration) {
        var RoleCheckEditor = (function (_super) {
            __extends(RoleCheckEditor, _super);
            function RoleCheckEditor(div) {
                _super.call(this, div);
            }
            RoleCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(text || '').toUpperCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            RoleCheckEditor.prototype.getButtons = function () {
                return [];
            };
            RoleCheckEditor.prototype.getTreeItems = function () {
                return Administration.RoleRow.getLookup().items.map(function (role) { return {
                    id: role.RoleId.toString(),
                    text: role.RoleName
                }; });
            };
            RoleCheckEditor.prototype.onViewFilter = function (item) {
                return _super.prototype.onViewFilter.call(this, item) &&
                    (Q.isEmptyOrNull(this.searchText) ||
                        Select2.util.stripDiacritics(item.text || '')
                            .toUpperCase().indexOf(this.searchText) >= 0);
            };
            RoleCheckEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], RoleCheckEditor);
            return RoleCheckEditor;
        }(Serenity.CheckTreeEditor));
        Administration.RoleCheckEditor = RoleCheckEditor;
    })(Administration = MWWLAdmin.Administration || (MWWLAdmin.Administration = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var Administration;
    (function (Administration) {
        var UserRoleDialog = (function (_super) {
            __extends(UserRoleDialog, _super);
            function UserRoleDialog(opt) {
                var _this = this;
                _super.call(this, opt);
                this.permissions = new Administration.RoleCheckEditor(this.byId('Roles'));
                Administration.UserRoleService.List({
                    UserID: this.options.userID
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return x.toString(); });
                });
            }
            UserRoleDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        click: function () {
                            Q.serviceRequest('Administration/UserRole/Update', {
                                UserID: _this.options.userID,
                                Roles: _this.permissions.value.map(function (x) { return parseInt(x, 10); })
                            }, function (response) {
                                _this.dialogClose();
                                Q.notifySuccess(Q.text('Site.UserRoleDialog.SaveSuccess'));
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }];
                opt.title = Q.format(Q.text('Site.UserRoleDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserRoleDialog.prototype.getTemplate = function () {
                return "<div id='~_Roles'></div>";
            };
            UserRoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserRoleDialog);
            return UserRoleDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserRoleDialog = UserRoleDialog;
    })(Administration = MWWLAdmin.Administration || (MWWLAdmin.Administration = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var Administration;
    (function (Administration) {
        var PermissionCheckEditor = (function (_super) {
            __extends(PermissionCheckEditor, _super);
            function PermissionCheckEditor(container, opt) {
                var _this = this;
                _super.call(this, container, opt);
                this.rolePermissions = {};
                var titleByKey = {};
                var permissionKeys = this.getSortedGroupAndPermissionKeys(titleByKey);
                var items = permissionKeys.map(function (key) { return {
                    Key: key,
                    ParentKey: _this.getParentKey(key),
                    Title: titleByKey[key],
                    GrantRevoke: null,
                    IsGroup: key.charAt(key.length - 1) === ':'
                }; });
                this.byParentKey = Q.toGrouping(items, function (x) { return x.ParentKey; });
                this.setItems(items);
            }
            PermissionCheckEditor.prototype.getIdProperty = function () { return "Key"; };
            PermissionCheckEditor.prototype.getItemGrantRevokeClass = function (item, grant) {
                if (!item.IsGroup) {
                    return ((item.GrantRevoke === grant) ? ' checked' : '');
                }
                var desc = this.getDescendants(item, true);
                var granted = desc.filter(function (x) { return x.GrantRevoke === grant; });
                if (!granted.length) {
                    return '';
                }
                if (desc.length === granted.length) {
                    return 'checked';
                }
                return 'checked partial';
            };
            PermissionCheckEditor.prototype.getItemEffectiveClass = function (item) {
                var _this = this;
                if (item.IsGroup) {
                    var desc = this.getDescendants(item, true);
                    var grantCount = Q.count(desc, function (x) { return x.GrantRevoke === true ||
                        (x.GrantRevoke == null && _this.rolePermissions[x.Key]); });
                    if (grantCount === desc.length || desc.length === 0) {
                        return 'allow';
                    }
                    if (grantCount === 0) {
                        return 'deny';
                    }
                    return 'partial';
                }
                var granted = item.GrantRevoke === true ||
                    (item.GrantRevoke == null && this.rolePermissions[item.Key]);
                return (granted ? ' allow' : ' deny');
            };
            PermissionCheckEditor.prototype.getColumns = function () {
                var _this = this;
                var columns = [{
                        name: Q.text('Site.UserPermissionDialog.Permission'),
                        field: 'Title',
                        format: Serenity.SlickFormatting.treeToggle(function () { return _this.view; }, function (x) { return x.Key; }, function (ctx) {
                            var item = ctx.item;
                            var klass = _this.getItemEffectiveClass(item);
                            return '<span class="effective-permission ' + klass + '">' + Q.htmlEncode(ctx.value) + '</span>';
                        }),
                        width: 495,
                        sortable: false
                    }, {
                        name: Q.text('Site.UserPermissionDialog.Grant'), field: 'Grant',
                        format: function (ctx) {
                            var item1 = ctx.item;
                            var klass1 = _this.getItemGrantRevokeClass(item1, true);
                            return "<span class='check-box grant no-float " + klass1 + "'></span>";
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    }];
                if (this.options.showRevoke) {
                    columns.push({
                        name: Q.text('Site.UserPermissionDialog.Revoke'), field: 'Revoke',
                        format: function (ctx) {
                            var item2 = ctx.item;
                            var klass2 = _this.getItemGrantRevokeClass(item2, false);
                            return '<span class="check-box revoke no-float ' + klass2 + '"></span>';
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    });
                }
                return columns;
            };
            PermissionCheckEditor.prototype.setItems = function (items) {
                Serenity.SlickTreeHelper.setIndents(items, function (x) { return x.Key; }, function (x) { return x.ParentKey; }, false);
                this.view.setItems(items, true);
            };
            PermissionCheckEditor.prototype.onViewSubmit = function () {
                return false;
            };
            PermissionCheckEditor.prototype.onViewFilter = function (item) {
                var _this = this;
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!Serenity.SlickTreeHelper.filterById(item, this.view, function (x) { return x.ParentKey; }))
                    return false;
                if (this.searchText) {
                    return this.matchContains(item) || item.IsGroup && Q.any(this.getDescendants(item, false), function (x) { return _this.matchContains(x); });
                }
                return true;
            };
            PermissionCheckEditor.prototype.matchContains = function (item) {
                return Select2.util.stripDiacritics(item.Title || '').toLowerCase().indexOf(this.searchText) >= 0;
            };
            PermissionCheckEditor.prototype.getDescendants = function (item, excludeGroups) {
                var result = [];
                var stack = [item];
                while (stack.length > 0) {
                    var i = stack.pop();
                    var children = this.byParentKey[i.Key];
                    if (!children)
                        continue;
                    for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                        var child = children_1[_i];
                        if (!excludeGroups || !child.IsGroup) {
                            result.push(child);
                        }
                        stack.push(child);
                    }
                }
                return result;
            };
            PermissionCheckEditor.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (!e.isDefaultPrevented()) {
                    Serenity.SlickTreeHelper.toggleClick(e, row, cell, this.view, function (x) { return x.Key; });
                }
                if (e.isDefaultPrevented()) {
                    return;
                }
                var target = $(e.target);
                var grant = target.hasClass('grant');
                if (grant || target.hasClass('revoke')) {
                    e.preventDefault();
                    var item = this.itemAt(row);
                    var checkedOrPartial = target.hasClass('checked') || target.hasClass('partial');
                    if (checkedOrPartial) {
                        grant = null;
                    }
                    else {
                        grant = grant !== checkedOrPartial;
                    }
                    if (item.IsGroup) {
                        for (var _i = 0, _a = this.getDescendants(item, true); _i < _a.length; _i++) {
                            var d = _a[_i];
                            d.GrantRevoke = grant;
                        }
                    }
                    else
                        item.GrantRevoke = grant;
                    this.slickGrid.invalidate();
                }
            };
            PermissionCheckEditor.prototype.getParentKey = function (key) {
                if (key.charAt(key.length - 1) === ':') {
                    key = key.substr(0, key.length - 1);
                }
                var idx = key.lastIndexOf(':');
                if (idx >= 0) {
                    return key.substr(0, idx + 1);
                }
                return null;
            };
            PermissionCheckEditor.prototype.getButtons = function () {
                return [];
            };
            PermissionCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(Q.trimToNull(text) || '').toLowerCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            PermissionCheckEditor.prototype.getSortedGroupAndPermissionKeys = function (titleByKey) {
                var keys = Q.getRemoteData('Administration.PermissionKeys').Entities;
                var titleWithGroup = {};
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var k = keys_1[_i];
                    var s = k;
                    if (!s) {
                        continue;
                    }
                    if (s.charAt(s.length - 1) == ':') {
                        s = s.substr(0, s.length - 1);
                        if (s.length === 0) {
                            continue;
                        }
                    }
                    if (titleByKey[s]) {
                        continue;
                    }
                    titleByKey[s] = Q.coalesce(Q.tryGetText('Permission.' + s), s);
                    var parts = s.split(':');
                    var group = '';
                    var groupTitle = '';
                    for (var i = 0; i < parts.length - 1; i++) {
                        group = group + parts[i] + ':';
                        var txt = Q.tryGetText('Permission.' + group);
                        if (txt == null) {
                            txt = parts[i];
                        }
                        titleByKey[group] = txt;
                        groupTitle = groupTitle + titleByKey[group] + ':';
                        titleWithGroup[group] = groupTitle;
                    }
                    titleWithGroup[s] = groupTitle + titleByKey[s];
                }
                keys = Object.keys(titleByKey);
                keys = keys.sort(function (x, y) { return Q.turkishLocaleCompare(titleWithGroup[x], titleWithGroup[y]); });
                return keys;
            };
            PermissionCheckEditor.prototype.get_value = function () {
                var result = [];
                for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    if (item.GrantRevoke != null && item.Key.charAt(item.Key.length - 1) != ':') {
                        result.push({ PermissionKey: item.Key, Granted: item.GrantRevoke });
                    }
                }
                return result;
            };
            PermissionCheckEditor.prototype.set_value = function (value) {
                for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    item.GrantRevoke = null;
                }
                if (value != null) {
                    for (var _b = 0, value_1 = value; _b < value_1.length; _b++) {
                        var row = value_1[_b];
                        var r = this.view.getItemById(row.PermissionKey);
                        if (r) {
                            r.GrantRevoke = Q.coalesce(row.Granted, true);
                        }
                    }
                }
                this.setItems(this.getItems());
            };
            PermissionCheckEditor.prototype.get_rolePermissions = function () {
                return Object.keys(this.rolePermissions);
            };
            PermissionCheckEditor.prototype.set_rolePermissions = function (value) {
                this.rolePermissions = {};
                if (value) {
                    for (var _i = 0, value_2 = value; _i < value_2.length; _i++) {
                        var k = value_2[_i];
                        this.rolePermissions[k] = true;
                    }
                }
                this.setItems(this.getItems());
            };
            PermissionCheckEditor = __decorate([
                Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue])
            ], PermissionCheckEditor);
            return PermissionCheckEditor;
        }(Serenity.DataGrid));
        Administration.PermissionCheckEditor = PermissionCheckEditor;
    })(Administration = MWWLAdmin.Administration || (MWWLAdmin.Administration = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var Administration;
    (function (Administration) {
        var UserPermissionDialog = (function (_super) {
            __extends(UserPermissionDialog, _super);
            function UserPermissionDialog(opt) {
                var _this = this;
                _super.call(this, opt);
                this.permissions = new Administration.PermissionCheckEditor(this.byId('Permissions'), {
                    showRevoke: true
                });
                Administration.UserPermissionService.List({
                    UserID: this.options.userID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.set_value(response.Entities);
                });
                Administration.UserPermissionService.ListRolePermissions({
                    UserID: this.options.userID,
                    Module: null,
                    Submodule: null,
                }, function (response) {
                    _this.permissions.set_rolePermissions(response.Entities);
                });
            }
            UserPermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.UserPermissionService.Update({
                                UserID: _this.options.userID,
                                Permissions: _this.permissions.get_value(),
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.UserPermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }];
                opt.title = Q.format(Q.text('Site.UserPermissionDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserPermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            UserPermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserPermissionDialog);
            return UserPermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserPermissionDialog = UserPermissionDialog;
    })(Administration = MWWLAdmin.Administration || (MWWLAdmin.Administration = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var Administration;
    (function (Administration) {
        var UserDialog = (function (_super) {
            __extends(UserDialog, _super);
            function UserDialog() {
                var _this = this;
                _super.call(this);
                this.form = new Administration.UserForm(this.idPrefix);
                this.form.Password.addValidationRule(this.uniqueName, function (e) {
                    if (_this.form.Password.value.length < 7)
                        return "Password must be at least 7 characters!";
                });
                this.form.PasswordConfirm.addValidationRule(this.uniqueName, function (e) {
                    if (_this.form.Password.value != _this.form.PasswordConfirm.value)
                        return "The passwords entered doesn't match!";
                });
            }
            UserDialog.prototype.getFormKey = function () { return Administration.UserForm.formKey; };
            UserDialog.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserDialog.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserDialog.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserDialog.prototype.getNameProperty = function () { return Administration.UserRow.nameProperty; };
            UserDialog.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.UserDialog.EditRolesButton'),
                    cssClass: 'edit-roles-button',
                    icon: 'icon-people text-blue',
                    onClick: function () {
                        new Administration.UserRoleDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                buttons.push({
                    title: Q.text('Site.UserDialog.EditPermissionsButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'icon-lock-open text-green',
                    onClick: function () {
                        new Administration.UserPermissionDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            UserDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('edit-roles-button').toggleClass('disabled', this.isNewOrDeleted());
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            UserDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // these fields are only required in new record mode
                this.form.Password.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
                this.form.PasswordConfirm.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
            };
            UserDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserDialog);
            return UserDialog;
        }(Serenity.EntityDialog));
        Administration.UserDialog = UserDialog;
    })(Administration = MWWLAdmin.Administration || (MWWLAdmin.Administration = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var Administration;
    (function (Administration) {
        var UserGrid = (function (_super) {
            __extends(UserGrid, _super);
            function UserGrid(container) {
                _super.call(this, container);
            }
            UserGrid.prototype.getColumnsKey = function () { return "Administration.User"; };
            UserGrid.prototype.getDialogType = function () { return Administration.UserDialog; };
            UserGrid.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserGrid.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserGrid.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserGrid.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserGrid.prototype.getDefaultSortBy = function () {
                return [Administration.UserRow.Fields.Username];
            };
            UserGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UserGrid);
            return UserGrid;
        }(Serenity.EntityGrid));
        Administration.UserGrid = UserGrid;
    })(Administration = MWWLAdmin.Administration || (MWWLAdmin.Administration = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var Authorization;
    (function (Authorization) {
        Object.defineProperty(Authorization, 'userDefinition', {
            get: function () {
                return Q.getRemoteData('UserData');
            }
        });
        function hasPermission(permissionKey) {
            var ud = Authorization.userDefinition;
            return ud.Username === 'admin' || !!ud.Permissions[permissionKey];
        }
        Authorization.hasPermission = hasPermission;
    })(Authorization = MWWLAdmin.Authorization || (MWWLAdmin.Authorization = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var Administration;
    (function (Administration) {
        var TranslationGrid = (function (_super) {
            __extends(TranslationGrid, _super);
            function TranslationGrid(container) {
                var _this = this;
                _super.call(this, container);
                this.element.on('keyup.' + this.uniqueName + ' change.' + this.uniqueName, 'input.custom-text', function (e) {
                    var value = Q.trimToNull($(e.target).val());
                    if (value === '') {
                        value = null;
                    }
                    _this.view.getItemById($(e.target).data('key')).CustomText = value;
                    _this.hasChanges = true;
                });
            }
            TranslationGrid.prototype.getIdProperty = function () { return "Key"; };
            TranslationGrid.prototype.getLocalTextPrefix = function () { return "Administration.Translation"; };
            TranslationGrid.prototype.getService = function () { return Administration.TranslationService.baseUrl; };
            TranslationGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented()) {
                    return;
                }
                var item = this.itemAt(row);
                var done;
                if ($(e.target).hasClass('source-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.SourceText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.SourceText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
                if ($(e.target).hasClass('target-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.TargetText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.TargetText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
            };
            TranslationGrid.prototype.getColumns = function () {
                var columns = [];
                columns.push({ field: 'Key', width: 300, sortable: false });
                columns.push({
                    field: 'SourceText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) {
                        return Q.outerHtml($('<a/>')
                            .addClass('source-text')
                            .text(ctx.value || ''));
                    }
                });
                columns.push({
                    field: 'CustomText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<input/>')
                        .addClass('custom-text')
                        .attr('value', ctx.value)
                        .attr('type', 'text')
                        .attr('data-key', ctx.item.Key)); }
                });
                columns.push({
                    field: 'TargetText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<a/>')
                        .addClass('target-text')
                        .text(ctx.value || '')); }
                });
                return columns;
            };
            TranslationGrid.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                var opt = {
                    lookupKey: 'Administration.Language'
                };
                this.sourceLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.SourceLanguage') + ' ---'); },
                    options: opt
                });
                this.sourceLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
                this.targetLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.TargetLanguage') + ' ---'); },
                    options: opt
                });
                this.targetLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
            };
            TranslationGrid.prototype.saveChanges = function (language) {
                var _this = this;
                var translations = {};
                for (var _i = 0, _a = this.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    translations[item.Key] = item.CustomText;
                }
                return RSVP.resolve(Administration.TranslationService.Update({
                    TargetLanguageID: language,
                    Translations: translations
                })).then(function () {
                    _this.hasChanges = false;
                    language = Q.trimToNull(language) || 'invariant';
                    Q.notifySuccess('User translations in "' + language +
                        '" language are saved to "user.texts.' +
                        language + '.json" ' + 'file under "~/App_Data/texts/"', '');
                });
            };
            TranslationGrid.prototype.onViewSubmit = function () {
                var request = this.view.params;
                request.SourceLanguageID = this.sourceLanguage.value;
                this.targetLanguageKey = this.targetLanguage.value || '';
                request.TargetLanguageID = this.targetLanguageKey;
                this.hasChanges = false;
                return _super.prototype.onViewSubmit.call(this);
            };
            TranslationGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: Q.text('Db.Administration.Translation.SaveChangesButton'),
                        onClick: function (e) { return _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); }); },
                        cssClass: 'apply-changes-button'
                    }];
            };
            TranslationGrid.prototype.createQuickSearchInput = function () {
                var _this = this;
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, searchText) {
                    _this.searchText = searchText;
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            TranslationGrid.prototype.onViewFilter = function (item) {
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!this.searchText) {
                    return true;
                }
                var sd = Select2.util.stripDiacritics;
                var searching = sd(this.searchText).toLowerCase();
                function match(str) {
                    if (!str)
                        return false;
                    return str.toLowerCase().indexOf(searching) >= 0;
                }
                return Q.isEmptyOrNull(searching) || match(item.Key) || match(item.SourceText) ||
                    match(item.TargetText) || match(item.CustomText);
            };
            TranslationGrid.prototype.usePager = function () {
                return false;
            };
            TranslationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TranslationGrid);
            return TranslationGrid;
        }(Serenity.EntityGrid));
        Administration.TranslationGrid = TranslationGrid;
    })(Administration = MWWLAdmin.Administration || (MWWLAdmin.Administration = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var Administration;
    (function (Administration) {
        var RolePermissionDialog = (function (_super) {
            __extends(RolePermissionDialog, _super);
            function RolePermissionDialog(opt) {
                var _this = this;
                _super.call(this, opt);
                this.permissions = new Administration.PermissionCheckEditor(this.byId('Permissions'), {
                    showRevoke: false
                });
                Administration.RolePermissionService.List({
                    RoleID: this.options.roleID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.set_value(response.Entities.map(function (x) { return ({ PermissionKey: x }); }));
                });
            }
            RolePermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.RolePermissionService.Update({
                                RoleID: _this.options.roleID,
                                Permissions: _this.permissions.get_value().map(function (x) { return x.PermissionKey; }),
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.RolePermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }];
                opt.title = Q.format(Q.text('Site.RolePermissionDialog.DialogTitle'), this.options.title);
                return opt;
            };
            RolePermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            RolePermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RolePermissionDialog);
            return RolePermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.RolePermissionDialog = RolePermissionDialog;
    })(Administration = MWWLAdmin.Administration || (MWWLAdmin.Administration = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var Administration;
    (function (Administration) {
        var RoleDialog = (function (_super) {
            __extends(RoleDialog, _super);
            function RoleDialog() {
                _super.apply(this, arguments);
                this.form = new Administration.RoleForm(this.idPrefix);
            }
            RoleDialog.prototype.getFormKey = function () { return Administration.RoleForm.formKey; };
            RoleDialog.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleDialog.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleDialog.prototype.getNameProperty = function () { return Administration.RoleRow.nameProperty; };
            RoleDialog.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.RolePermissionDialog.EditButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'icon-lock-open text-green',
                    onClick: function () {
                        new Administration.RolePermissionDialog({
                            roleID: _this.entity.RoleId,
                            title: _this.entity.RoleName
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            RoleDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            RoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleDialog);
            return RoleDialog;
        }(Serenity.EntityDialog));
        Administration.RoleDialog = RoleDialog;
    })(Administration = MWWLAdmin.Administration || (MWWLAdmin.Administration = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var Administration;
    (function (Administration) {
        var RoleGrid = (function (_super) {
            __extends(RoleGrid, _super);
            function RoleGrid(container) {
                _super.call(this, container);
            }
            RoleGrid.prototype.getColumnsKey = function () { return "Administration.Role"; };
            RoleGrid.prototype.getDialogType = function () { return Administration.RoleDialog; };
            RoleGrid.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleGrid.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleGrid.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleGrid.prototype.getDefaultSortBy = function () {
                return [Administration.RoleRow.Fields.RoleName];
            };
            RoleGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleGrid);
            return RoleGrid;
        }(Serenity.EntityGrid));
        Administration.RoleGrid = RoleGrid;
    })(Administration = MWWLAdmin.Administration || (MWWLAdmin.Administration = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var Administration;
    (function (Administration) {
        var LanguageDialog = (function (_super) {
            __extends(LanguageDialog, _super);
            function LanguageDialog() {
                _super.apply(this, arguments);
                this.form = new Administration.LanguageForm(this.idPrefix);
            }
            LanguageDialog.prototype.getFormKey = function () { return Administration.LanguageForm.formKey; };
            LanguageDialog.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageDialog.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageDialog.prototype.getNameProperty = function () { return Administration.LanguageRow.nameProperty; };
            LanguageDialog.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageDialog);
            return LanguageDialog;
        }(Serenity.EntityDialog));
        Administration.LanguageDialog = LanguageDialog;
    })(Administration = MWWLAdmin.Administration || (MWWLAdmin.Administration = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
var MWWLAdmin;
(function (MWWLAdmin) {
    var Administration;
    (function (Administration) {
        var LanguageGrid = (function (_super) {
            __extends(LanguageGrid, _super);
            function LanguageGrid(container) {
                _super.call(this, container);
            }
            LanguageGrid.prototype.getColumnsKey = function () { return "Administration.Language"; };
            LanguageGrid.prototype.getDialogType = function () { return Administration.LanguageDialog; };
            LanguageGrid.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageGrid.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageGrid.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageGrid.prototype.getDefaultSortBy = function () {
                return [Administration.LanguageRow.Fields.LanguageName];
            };
            LanguageGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageGrid);
            return LanguageGrid;
        }(Serenity.EntityGrid));
        Administration.LanguageGrid = LanguageGrid;
    })(Administration = MWWLAdmin.Administration || (MWWLAdmin.Administration = {}));
})(MWWLAdmin || (MWWLAdmin = {}));
//# sourceMappingURL=MWWLAdmin.Web.js.map