(function () {
  'use strict';

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  var get = function get(object, property, receiver) {
    if (object === null) object = Function.prototype;
    var desc = Object.getOwnPropertyDescriptor(object, property);

    if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);

      if (parent === null) {
        return undefined;
      } else {
        return get(parent, property, receiver);
      }
    } else if ("value" in desc) {
      return desc.value;
    } else {
      var getter = desc.get;

      if (getter === undefined) {
        return undefined;
      }

      return getter.call(receiver);
    }
  };

  var inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };

  var possibleConstructorReturn = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  };

  var taggedTemplateLiteral = function (strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  };

  /**
  @license
  Copyright 2018 Google Inc. All Rights Reserved.

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
  */

  var hasCustomEventConstructor = typeof CustomEvent === 'function';

  var MDCWebComponentMixin = function MDCWebComponentMixin(superClass) {
    return function (_superClass) {
      inherits(MDCWebComponent, _superClass);

      function MDCWebComponent() {
        classCallCheck(this, MDCWebComponent);
        return possibleConstructorReturn(this, (MDCWebComponent.__proto__ || Object.getPrototypeOf(MDCWebComponent)).apply(this, arguments));
      }

      createClass(MDCWebComponent, [{
        key: 'initialize',
        value: function initialize() {
          var _babelHelpers$get;

          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          (_babelHelpers$get = get(MDCWebComponent.prototype.__proto__ || Object.getPrototypeOf(MDCWebComponent.prototype), 'initialize', this)).call.apply(_babelHelpers$get, [this].concat(args));
          this._host = this.root_.getRootNode().host;
        }

        // TODO(sorvell): would be nice in MDC

      }, {
        key: 'createAdapter',
        value: function createAdapter() {
          return null;
        }
      }, {
        key: 'getDefaultFoundation',
        value: function getDefaultFoundation() {
          var foundation = get(MDCWebComponent.prototype.__proto__ || Object.getPrototypeOf(MDCWebComponent.prototype), 'getDefaultFoundation', this).call(this);
          _extends(foundation.adapter_, this.createAdapter());
          return foundation;
        }

        // TODO(sorvell): convenient but maybe not best.

      }, {
        key: 'emit',
        value: function emit(evtType, evtData) {
          var shouldBubble = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

          var evt = void 0;
          if (hasCustomEventConstructor) {
            evt = new CustomEvent(evtType, {
              detail: evtData,
              bubbles: shouldBubble,
              composed: true
            });
          } else {
            evt = document.createEvent('CustomEvent');
            evt.initCustomEvent(evtType, shouldBubble, false, evtData);
          }

          this.root_.dispatchEvent(evt);
        }
      }, {
        key: 'host',
        get: function get$$1() {
          return this._host;
        }

        // TODO(sorvell): should be changed in MDC

      }, {
        key: 'activeElement',
        get: function get$$1() {
          return this.host.getRootNode().activeElement;
        }
      }]);
      return MDCWebComponent;
    }(superClass);
  };

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  window.JSCompiler_renameProperty = function (prop) {
    return prop;
  };

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  // unique global id for deduping mixins.
  var dedupeId = 0;

  /* eslint-disable valid-jsdoc */
  /**
   * Wraps an ES6 class expression mixin such that the mixin is only applied
   * if it has not already been applied its base argument. Also memoizes mixin
   * applications.
   *
   * @template T
   * @param {T} mixin ES6 class expression mixin to wrap
   * @return {T}
   * @suppress {invalidCasts}
   */
  var dedupingMixin = function dedupingMixin(mixin) {
    var mixinApplications = /** @type {!MixinFunction} */mixin.__mixinApplications;
    if (!mixinApplications) {
      mixinApplications = new WeakMap();
      /** @type {!MixinFunction} */mixin.__mixinApplications = mixinApplications;
    }
    // maintain a unique id for each mixin
    var mixinDedupeId = dedupeId++;
    function dedupingMixin(base) {
      var baseSet = /** @type {!MixinFunction} */base.__mixinSet;
      if (baseSet && baseSet[mixinDedupeId]) {
        return base;
      }
      var map = mixinApplications;
      var extended = map.get(base);
      if (!extended) {
        extended = /** @type {!Function} */mixin(base);
        map.set(base, extended);
      }
      // copy inherited mixin set from the extended class, or the base class
      // NOTE: we avoid use of Set here because some browser (IE11)
      // cannot extend a base Set via the constructor.
      var mixinSet = Object.create( /** @type {!MixinFunction} */extended.__mixinSet || baseSet || null);
      mixinSet[mixinDedupeId] = true;
      /** @type {!MixinFunction} */extended.__mixinSet = mixinSet;
      return extended;
    }

    return dedupingMixin;
  };
  /* eslint-enable valid-jsdoc */

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  // Microtask implemented using Mutation Observer
  var microtaskCurrHandle = 0;
  var microtaskLastHandle = 0;
  var microtaskCallbacks = [];
  var microtaskNodeContent = 0;
  var microtaskNode = document.createTextNode('');
  new window.MutationObserver(microtaskFlush).observe(microtaskNode, { characterData: true });

  function microtaskFlush() {
    var len = microtaskCallbacks.length;
    for (var i = 0; i < len; i++) {
      var cb = microtaskCallbacks[i];
      if (cb) {
        try {
          cb();
        } catch (e) {
          setTimeout(function () {
            throw e;
          });
        }
      }
    }
    microtaskCallbacks.splice(0, len);
    microtaskLastHandle += len;
  }

  /**
   * Async interface for enqueuing callbacks that run at microtask timing.
   *
   * Note that microtask timing is achieved via a single `MutationObserver`,
   * and thus callbacks enqueued with this API will all run in a single
   * batch, and not interleaved with other microtasks such as promises.
   * Promises are avoided as an implementation choice for the time being
   * due to Safari bugs that cause Promises to lack microtask guarantees.
   *
   * @namespace
   * @summary Async interface for enqueuing callbacks that run at microtask
   *   timing.
   */
  var microTask = {

    /**
     * Enqueues a function called at microtask timing.
     *
     * @memberof microTask
     * @param {!Function=} callback Callback to run
     * @return {number} Handle used for canceling task
     */
    run: function run(callback) {
      microtaskNode.textContent = microtaskNodeContent++;
      microtaskCallbacks.push(callback);
      return microtaskCurrHandle++;
    },


    /**
     * Cancels a previously enqueued `microTask` callback.
     *
     * @memberof microTask
     * @param {number} handle Handle returned from `run` of callback to cancel
     * @return {void}
     */
    cancel: function cancel(handle) {
      var idx = handle - microtaskLastHandle;
      if (idx >= 0) {
        if (!microtaskCallbacks[idx]) {
          throw new Error('invalid async handle: ' + handle);
        }
        microtaskCallbacks[idx] = null;
      }
    }
  };

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  /** @const {!AsyncInterface} */
  var microtask = microTask;

  /**
   * Element class mixin that provides basic meta-programming for creating one
   * or more property accessors (getter/setter pair) that enqueue an async
   * (batched) `_propertiesChanged` callback.
   *
   * For basic usage of this mixin, call `MyClass.createProperties(props)`
   * once at class definition time to create property accessors for properties
   * named in props, implement `_propertiesChanged` to react as desired to
   * property changes, and implement `static get observedAttributes()` and
   * include lowercase versions of any property names that should be set from
   * attributes. Last, call `this._enableProperties()` in the element's
   * `connectedCallback` to enable the accessors.
   *
   * @mixinFunction
   * @polymer
   * @summary Element class mixin for reacting to property changes from
   *   generated property accessors.
   */
  var PropertiesChanged = dedupingMixin(
  /**
   * @template T
   * @param {function(new:T)} superClass Class to apply mixin to.
   * @return {function(new:T)} superClass with mixin applied.
   */
  function (superClass) {

    /**
     * @polymer
     * @mixinClass
     * @implements {Polymer_PropertiesChanged}
     * @unrestricted
     */
    var PropertiesChanged = function (_superClass) {
      inherits(PropertiesChanged, _superClass);
      createClass(PropertiesChanged, [{
        key: '_createPropertyAccessor',
        //eslint-disable-line no-unused-vars

        /**
         * Creates a setter/getter pair for the named property with its own
         * local storage.  The getter returns the value in the local storage,
         * and the setter calls `_setProperty`, which updates the local storage
         * for the property and enqueues a `_propertiesChanged` callback.
         *
         * This method may be called on a prototype or an instance.  Calling
         * this method may overwrite a property value that already exists on
         * the prototype/instance by creating the accessor.
         *
         * @param {string} property Name of the property
         * @param {boolean=} readOnly When true, no setter is created; the
         *   protected `_setProperty` function must be used to set the property
         * @return {void}
         * @protected
         * @override
         */
        value: function _createPropertyAccessor(property, readOnly) {
          this._addPropertyToAttributeMap(property);
          if (!this.hasOwnProperty('__dataHasAccessor')) {
            this.__dataHasAccessor = _extends({}, this.__dataHasAccessor);
          }
          if (!this.__dataHasAccessor[property]) {
            this.__dataHasAccessor[property] = true;
            this._definePropertyAccessor(property, readOnly);
          }
        }

        /**
         * Adds the given `property` to a map matching attribute names
         * to property names, using `attributeNameForProperty`. This map is
         * used when deserializing attribute values to properties.
         *
         * @param {string} property Name of the property
         * @override
         */

      }, {
        key: '_addPropertyToAttributeMap',
        value: function _addPropertyToAttributeMap(property) {
          if (!this.hasOwnProperty('__dataAttributes')) {
            this.__dataAttributes = _extends({}, this.__dataAttributes);
          }
          if (!this.__dataAttributes[property]) {
            var attr = this.constructor.attributeNameForProperty(property);
            this.__dataAttributes[attr] = property;
          }
        }

        /**
         * Defines a property accessor for the given property.
         * @param {string} property Name of the property
         * @param {boolean=} readOnly When true, no setter is created
         * @return {void}
         * @override
         */

      }, {
        key: '_definePropertyAccessor',
        value: function _definePropertyAccessor(property, readOnly) {
          Object.defineProperty(this, property, {
            /* eslint-disable valid-jsdoc */
            /** @this {PropertiesChanged} */
            get: function get$$1() {
              return this._getProperty(property);
            },

            /** @this {PropertiesChanged} */
            set: readOnly ? function () {} : function (value) {
              this._setProperty(property, value);
            }
            /* eslint-enable */
          });
        }
      }], [{
        key: 'createProperties',


        /**
         * Creates property accessors for the given property names.
         * @param {!Object} props Object whose keys are names of accessors.
         * @return {void}
         * @protected
         */
        value: function createProperties(props) {
          var proto = this.prototype;
          for (var prop in props) {
            // don't stomp an existing accessor
            if (!(prop in proto)) {
              proto._createPropertyAccessor(prop);
            }
          }
        }

        /**
         * Returns an attribute name that corresponds to the given property.
         * The attribute name is the lowercased property name. Override to
         * customize this mapping.
         * @param {string} property Property to convert
         * @return {string} Attribute name corresponding to the given property.
         *
         * @protected
         */

      }, {
        key: 'attributeNameForProperty',
        value: function attributeNameForProperty(property) {
          return property.toLowerCase();
        }

        /**
         * Override point to provide a type to which to deserialize a value to
         * a given property.
         * @param {string} name Name of property
         *
         * @protected
         */

      }, {
        key: 'typeForProperty',
        value: function typeForProperty(name) {}
      }]);

      function PropertiesChanged() {
        classCallCheck(this, PropertiesChanged);

        var _this = possibleConstructorReturn(this, (PropertiesChanged.__proto__ || Object.getPrototypeOf(PropertiesChanged)).call(this));

        _this.__dataEnabled = false;
        _this.__dataReady = false;
        _this.__dataInvalid = false;
        _this.__data = {};
        _this.__dataPending = null;
        _this.__dataOld = null;
        _this.__dataInstanceProps = null;
        _this.__serializing = false;
        _this._initializeProperties();
        return _this;
      }

      /**
       * Lifecycle callback called when properties are enabled via
       * `_enableProperties`.
       *
       * Users may override this function to implement behavior that is
       * dependent on the element having its property data initialized, e.g.
       * from defaults (initialized from `constructor`, `_initializeProperties`),
       * `attributeChangedCallback`, or values propagated from host e.g. via
       * bindings.  `super.ready()` must be called to ensure the data system
       * becomes enabled.
       *
       * @return {void}
       * @public
       * @override
       */


      createClass(PropertiesChanged, [{
        key: 'ready',
        value: function ready() {
          this.__dataReady = true;
          this._flushProperties();
        }

        /**
         * Initializes the local storage for property accessors.
         *
         * Provided as an override point for performing any setup work prior
         * to initializing the property accessor system.
         *
         * @return {void}
         * @protected
         * @override
         */

      }, {
        key: '_initializeProperties',
        value: function _initializeProperties() {
          // Capture instance properties; these will be set into accessors
          // during first flush. Don't set them here, since we want
          // these to overwrite defaults/constructor assignments
          for (var p in this.__dataHasAccessor) {
            if (this.hasOwnProperty(p)) {
              this.__dataInstanceProps = this.__dataInstanceProps || {};
              this.__dataInstanceProps[p] = this[p];
              delete this[p];
            }
          }
        }

        /**
         * Called at ready time with bag of instance properties that overwrote
         * accessors when the element upgraded.
         *
         * The default implementation sets these properties back into the
         * setter at ready time.  This method is provided as an override
         * point for customizing or providing more efficient initialization.
         *
         * @param {Object} props Bag of property values that were overwritten
         *   when creating property accessors.
         * @return {void}
         * @protected
         * @override
         */

      }, {
        key: '_initializeInstanceProperties',
        value: function _initializeInstanceProperties(props) {
          _extends(this, props);
        }

        /**
         * Updates the local storage for a property (via `_setPendingProperty`)
         * and enqueues a `_proeprtiesChanged` callback.
         *
         * @param {string} property Name of the property
         * @param {*} value Value to set
         * @return {void}
         * @protected
         * @override
         */

      }, {
        key: '_setProperty',
        value: function _setProperty(property, value) {
          if (this._setPendingProperty(property, value)) {
            this._invalidateProperties();
          }
        }

        /**
         * Returns the value for the given property.
         * @param {string} property Name of property
         * @return {*} Value for the given property
         * @protected
         * @override
         */

      }, {
        key: '_getProperty',
        value: function _getProperty(property) {
          return this.__data[property];
        }

        /* eslint-disable no-unused-vars */
        /**
         * Updates the local storage for a property, records the previous value,
         * and adds it to the set of "pending changes" that will be passed to the
         * `_propertiesChanged` callback.  This method does not enqueue the
         * `_propertiesChanged` callback.
         *
         * @param {string} property Name of the property
         * @param {*} value Value to set
         * @param {boolean=} ext Not used here; affordance for closure
         * @return {boolean} Returns true if the property changed
         * @protected
         * @override
         */

      }, {
        key: '_setPendingProperty',
        value: function _setPendingProperty(property, value, ext) {
          var old = this.__data[property];
          var changed = this._shouldPropertyChange(property, value, old);
          if (changed) {
            if (!this.__dataPending) {
              this.__dataPending = {};
              this.__dataOld = {};
            }
            // Ensure old is captured from the last turn
            if (this.__dataOld && !(property in this.__dataOld)) {
              this.__dataOld[property] = old;
            }
            this.__data[property] = value;
            this.__dataPending[property] = value;
          }
          return changed;
        }
        /* eslint-enable */

        /**
         * Marks the properties as invalid, and enqueues an async
         * `_propertiesChanged` callback.
         *
         * @return {void}
         * @protected
         * @override
         */

      }, {
        key: '_invalidateProperties',
        value: function _invalidateProperties() {
          var _this2 = this;

          if (!this.__dataInvalid && this.__dataReady) {
            this.__dataInvalid = true;
            microtask.run(function () {
              if (_this2.__dataInvalid) {
                _this2.__dataInvalid = false;
                _this2._flushProperties();
              }
            });
          }
        }

        /**
         * Call to enable property accessor processing. Before this method is
         * called accessor values will be set but side effects are
         * queued. When called, any pending side effects occur immediately.
         * For elements, generally `connectedCallback` is a normal spot to do so.
         * It is safe to call this method multiple times as it only turns on
         * property accessors once.
         *
         * @return {void}
         * @protected
         * @override
         */

      }, {
        key: '_enableProperties',
        value: function _enableProperties() {
          if (!this.__dataEnabled) {
            this.__dataEnabled = true;
            if (this.__dataInstanceProps) {
              this._initializeInstanceProperties(this.__dataInstanceProps);
              this.__dataInstanceProps = null;
            }
            this.ready();
          }
        }

        /**
         * Calls the `_propertiesChanged` callback with the current set of
         * pending changes (and old values recorded when pending changes were
         * set), and resets the pending set of changes. Generally, this method
         * should not be called in user code.
         *
         * @return {void}
         * @protected
         * @override
         */

      }, {
        key: '_flushProperties',
        value: function _flushProperties() {
          var props = this.__data;
          var changedProps = this.__dataPending;
          var old = this.__dataOld;
          if (this._shouldPropertiesChange(props, changedProps, old)) {
            this.__dataPending = null;
            this.__dataOld = null;
            this._propertiesChanged(props, changedProps, old);
          }
        }

        /**
         * Called in `_flushProperties` to determine if `_propertiesChanged`
         * should be called. The default implementation returns true if
         * properties are pending. Override to customize when
         * `_propertiesChanged` is called.
         * @param {!Object} currentProps Bag of all current accessor values
         * @param {?Object} changedProps Bag of properties changed since the last
         *   call to `_propertiesChanged`
         * @param {?Object} oldProps Bag of previous values for each property
         *   in `changedProps`
         * @return {boolean} true if changedProps is truthy
         * @override
         */

      }, {
        key: '_shouldPropertiesChange',
        value: function _shouldPropertiesChange(currentProps, changedProps, oldProps) {
          // eslint-disable-line no-unused-vars
          return Boolean(changedProps);
        }

        /**
         * Callback called when any properties with accessors created via
         * `_createPropertyAccessor` have been set.
         *
         * @param {!Object} currentProps Bag of all current accessor values
         * @param {?Object} changedProps Bag of properties changed since the last
         *   call to `_propertiesChanged`
         * @param {?Object} oldProps Bag of previous values for each property
         *   in `changedProps`
         * @return {void}
         * @protected
         * @override
         */

      }, {
        key: '_propertiesChanged',
        value: function _propertiesChanged(currentProps, changedProps, oldProps) {} // eslint-disable-line no-unused-vars


        /**
         * Method called to determine whether a property value should be
         * considered as a change and cause the `_propertiesChanged` callback
         * to be enqueued.
         *
         * The default implementation returns `true` if a strict equality
         * check fails. The method always returns false for `NaN`.
         *
         * Override this method to e.g. provide stricter checking for
         * Objects/Arrays when using immutable patterns.
         *
         * @param {string} property Property name
         * @param {*} value New property value
         * @param {*} old Previous property value
         * @return {boolean} Whether the property should be considered a change
         *   and enqueue a `_proeprtiesChanged` callback
         * @protected
         * @override
         */

      }, {
        key: '_shouldPropertyChange',
        value: function _shouldPropertyChange(property, value, old) {
          return (
            // Strict equality check
            old !== value && (
            // This ensures (old==NaN, value==NaN) always returns false
            old === old || value === value)
          );
        }

        /**
         * Implements native Custom Elements `attributeChangedCallback` to
         * set an attribute value to a property via `_attributeToProperty`.
         *
         * @param {string} name Name of attribute that changed
         * @param {?string} old Old attribute value
         * @param {?string} value New attribute value
         * @param {?string} namespace Attribute namespace.
         * @return {void}
         * @suppress {missingProperties} Super may or may not implement the callback
         * @override
         */

      }, {
        key: 'attributeChangedCallback',
        value: function attributeChangedCallback(name, old, value, namespace) {
          if (old !== value) {
            this._attributeToProperty(name, value);
          }
          if (get(PropertiesChanged.prototype.__proto__ || Object.getPrototypeOf(PropertiesChanged.prototype), 'attributeChangedCallback', this)) {
            get(PropertiesChanged.prototype.__proto__ || Object.getPrototypeOf(PropertiesChanged.prototype), 'attributeChangedCallback', this).call(this, name, old, value, namespace);
          }
        }

        /**
         * Deserializes an attribute to its associated property.
         *
         * This method calls the `_deserializeValue` method to convert the string to
         * a typed value.
         *
         * @param {string} attribute Name of attribute to deserialize.
         * @param {?string} value of the attribute.
         * @param {*=} type type to deserialize to, defaults to the value
         * returned from `typeForProperty`
         * @return {void}
         * @override
         */

      }, {
        key: '_attributeToProperty',
        value: function _attributeToProperty(attribute, value, type) {
          if (!this.__serializing) {
            var map = this.__dataAttributes;
            var property = map && map[attribute] || attribute;
            this[property] = this._deserializeValue(value, type || this.constructor.typeForProperty(property));
          }
        }

        /**
         * Serializes a property to its associated attribute.
         *
         * @suppress {invalidCasts} Closure can't figure out `this` is an element.
         *
         * @param {string} property Property name to reflect.
         * @param {string=} attribute Attribute name to reflect to.
         * @param {*=} value Property value to refect.
         * @return {void}
         * @override
         */

      }, {
        key: '_propertyToAttribute',
        value: function _propertyToAttribute(property, attribute, value) {
          this.__serializing = true;
          value = arguments.length < 3 ? this[property] : value;
          this._valueToNodeAttribute( /** @type {!HTMLElement} */this, value, attribute || this.constructor.attributeNameForProperty(property));
          this.__serializing = false;
        }

        /**
         * Sets a typed value to an HTML attribute on a node.
         *
         * This method calls the `_serializeValue` method to convert the typed
         * value to a string.  If the `_serializeValue` method returns `undefined`,
         * the attribute will be removed (this is the default for boolean
         * type `false`).
         *
         * @param {Element} node Element to set attribute to.
         * @param {*} value Value to serialize.
         * @param {string} attribute Attribute name to serialize to.
         * @return {void}
         * @override
         */

      }, {
        key: '_valueToNodeAttribute',
        value: function _valueToNodeAttribute(node, value, attribute) {
          var str = this._serializeValue(value);
          if (str === undefined) {
            node.removeAttribute(attribute);
          } else {
            node.setAttribute(attribute, str);
          }
        }

        /**
         * Converts a typed JavaScript value to a string.
         *
         * This method is called when setting JS property values to
         * HTML attributes.  Users may override this method to provide
         * serialization for custom types.
         *
         * @param {*} value Property value to serialize.
         * @return {string | undefined} String serialized from the provided
         * property  value.
         * @override
         */

      }, {
        key: '_serializeValue',
        value: function _serializeValue(value) {
          switch (typeof value === 'undefined' ? 'undefined' : _typeof(value)) {
            case 'boolean':
              return value ? '' : undefined;
            default:
              return value != null ? value.toString() : undefined;
          }
        }

        /**
         * Converts a string to a typed JavaScript value.
         *
         * This method is called when reading HTML attribute values to
         * JS properties.  Users may override this method to provide
         * deserialization for custom `type`s. Types for `Boolean`, `String`,
         * and `Number` convert attributes to the expected types.
         *
         * @param {?string} value Value to deserialize.
         * @param {*=} type Type to deserialize the string to.
         * @return {*} Typed value deserialized from the provided string.
         * @override
         */

      }, {
        key: '_deserializeValue',
        value: function _deserializeValue(value, type) {
          switch (type) {
            case Boolean:
              return value !== null;
            case Number:
              return Number(value);
            default:
              return value;
          }
        }
      }]);
      return PropertiesChanged;
    }(superClass);

    return PropertiesChanged;
  });

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  /**
   * Creates a copy of `props` with each property normalized such that
   * upgraded it is an object with at least a type property { type: Type}.
   *
   * @param {Object} props Properties to normalize
   * @return {Object} Copy of input `props` with normalized properties that
   * are in the form {type: Type}
   * @private
   */
  function normalizeProperties(props) {
    var output = {};
    for (var p in props) {
      var o = props[p];
      output[p] = typeof o === 'function' ? { type: o } : o;
    }
    return output;
  }

  /**
   * Mixin that provides a minimal starting point to using the PropertiesChanged
   * mixin by providing a mechanism to declare properties in a static
   * getter (e.g. static get properties() { return { foo: String } }). Changes
   * are reported via the `_propertiesChanged` method.
   *
   * This mixin provides no specific support for rendering. Users are expected
   * to create a ShadowRoot and put content into it and update it in whatever
   * way makes sense. This can be done in reaction to properties changing by
   * implementing `_propertiesChanged`.
   *
   * @mixinFunction
   * @polymer
   * @appliesMixin PropertiesChanged
   * @summary Mixin that provides a minimal starting point for using
   * the PropertiesChanged mixin by providing a declarative `properties` object.
   */
  var PropertiesMixin = dedupingMixin(function (superClass) {

    /**
     * @constructor
     * @implements {Polymer_PropertiesChanged}
     * @private
     */
    var base = PropertiesChanged(superClass);

    /**
     * Returns the super class constructor for the given class, if it is an
     * instance of the PropertiesMixin.
     *
     * @param {!PropertiesMixinConstructor} constructor PropertiesMixin constructor
     * @return {?PropertiesMixinConstructor} Super class constructor
     */
    function superPropertiesClass(constructor) {
      var superCtor = Object.getPrototypeOf(constructor);

      // Note, the `PropertiesMixin` class below only refers to the class
      // generated by this call to the mixin; the instanceof test only works
      // because the mixin is deduped and guaranteed only to apply once, hence
      // all constructors in a proto chain will see the same `PropertiesMixin`
      return superCtor.prototype instanceof PropertiesMixin ?
      /** @type {!PropertiesMixinConstructor} */superCtor : null;
    }

    /**
     * Returns a memoized version of the `properties` object for the
     * given class. Properties not in object format are converted to at
     * least {type}.
     *
     * @param {PropertiesMixinConstructor} constructor PropertiesMixin constructor
     * @return {Object} Memoized properties object
     */
    function ownProperties(constructor) {
      if (!constructor.hasOwnProperty(JSCompiler_renameProperty('__ownProperties', constructor))) {
        var props = null;

        if (constructor.hasOwnProperty(JSCompiler_renameProperty('properties', constructor)) && constructor.properties) {
          props = normalizeProperties(constructor.properties);
        }

        constructor.__ownProperties = props;
      }
      return constructor.__ownProperties;
    }

    /**
     * @polymer
     * @mixinClass
     * @extends {base}
     * @implements {Polymer_PropertiesMixin}
     * @unrestricted
     */

    var PropertiesMixin = function (_base) {
      inherits(PropertiesMixin, _base);

      function PropertiesMixin() {
        classCallCheck(this, PropertiesMixin);
        return possibleConstructorReturn(this, (PropertiesMixin.__proto__ || Object.getPrototypeOf(PropertiesMixin)).apply(this, arguments));
      }

      createClass(PropertiesMixin, [{
        key: '_initializeProperties',


        /**
         * Overrides `PropertiesChanged` method and adds a call to
         * `finalize` which lazily configures the element's property accessors.
         * @override
         * @return {void}
         */
        value: function _initializeProperties() {
          this.constructor.finalize();
          get(PropertiesMixin.prototype.__proto__ || Object.getPrototypeOf(PropertiesMixin.prototype), '_initializeProperties', this).call(this);
        }

        /**
         * Called when the element is added to a document.
         * Calls `_enableProperties` to turn on property system from
         * `PropertiesChanged`.
         * @suppress {missingProperties} Super may or may not implement the callback
         * @return {void}
         * @override
         */

      }, {
        key: 'connectedCallback',
        value: function connectedCallback() {
          if (get(PropertiesMixin.prototype.__proto__ || Object.getPrototypeOf(PropertiesMixin.prototype), 'connectedCallback', this)) {
            get(PropertiesMixin.prototype.__proto__ || Object.getPrototypeOf(PropertiesMixin.prototype), 'connectedCallback', this).call(this);
          }
          this._enableProperties();
        }

        /**
         * Called when the element is removed from a document
         * @suppress {missingProperties} Super may or may not implement the callback
         * @return {void}
         * @override
         */

      }, {
        key: 'disconnectedCallback',
        value: function disconnectedCallback() {
          if (get(PropertiesMixin.prototype.__proto__ || Object.getPrototypeOf(PropertiesMixin.prototype), 'disconnectedCallback', this)) {
            get(PropertiesMixin.prototype.__proto__ || Object.getPrototypeOf(PropertiesMixin.prototype), 'disconnectedCallback', this).call(this);
          }
        }
      }], [{
        key: 'finalize',


        /**
         * Finalizes an element definition, including ensuring any super classes
         * are also finalized. This includes ensuring property
         * accessors exist on the element prototype. This method calls
         * `_finalizeClass` to finalize each constructor in the prototype chain.
         * @return {void}
         */
        value: function finalize() {
          if (!this.hasOwnProperty(JSCompiler_renameProperty('__finalized', this))) {
            var superCtor = superPropertiesClass( /** @type {!PropertiesMixinConstructor} */this);
            if (superCtor) {
              superCtor.finalize();
            }
            this.__finalized = true;
            this._finalizeClass();
          }
        }

        /**
         * Finalize an element class. This includes ensuring property
         * accessors exist on the element prototype. This method is called by
         * `finalize` and finalizes the class constructor.
         *
         * @protected
         */

      }, {
        key: '_finalizeClass',
        value: function _finalizeClass() {
          var props = ownProperties( /** @type {!PropertiesMixinConstructor} */this);
          if (props) {
            this.createProperties(props);
          }
        }

        /**
         * Returns a memoized version of all properties, including those inherited
         * from super classes. Properties not in object format are converted to
         * at least {type}.
         *
         * @return {Object} Object containing properties for this class
         * @protected
         */

      }, {
        key: 'typeForProperty',


        /**
         * Overrides `PropertiesChanged` method to return type specified in the
         * static `properties` object for the given property.
         * @param {string} name Name of property
         * @return {*} Type to which to deserialize attribute
         *
         * @protected
         */
        value: function typeForProperty(name) {
          var info = this._properties[name];
          return info && info.type;
        }
      }, {
        key: 'observedAttributes',


        /**
         * Implements standard custom elements getter to observes the attributes
         * listed in `properties`.
         * @suppress {missingProperties} Interfaces in closure do not inherit statics, but classes do
         */
        get: function get$$1() {
          var _this2 = this;

          var props = this._properties;
          return props ? Object.keys(props).map(function (p) {
            return _this2.attributeNameForProperty(p);
          }) : [];
        }
      }, {
        key: '_properties',
        get: function get$$1() {
          if (!this.hasOwnProperty(JSCompiler_renameProperty('__properties', this))) {
            var superCtor = superPropertiesClass( /** @type {!PropertiesMixinConstructor} */this);
            this.__properties = _extends({}, superCtor && superCtor._properties, ownProperties( /** @type {PropertiesMixinConstructor} */this));
          }
          return this.__properties;
        }
      }]);
      return PropertiesMixin;
    }(base);

    return PropertiesMixin;
  });

  /**
  @license
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */

  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  // The first argument to JS template tags retain identity across multiple
  // calls to a tag for the same literal, so we can cache work done per literal
  // in a Map.
  var templateCaches = new Map();
  /**
   * The return type of `html`, which holds a Template and the values from
   * interpolated expressions.
   */
  var TemplateResult = function () {
      function TemplateResult(strings, values, type) {
          var partCallback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : defaultPartCallback;
          classCallCheck(this, TemplateResult);

          this.strings = strings;
          this.values = values;
          this.type = type;
          this.partCallback = partCallback;
      }
      /**
       * Returns a string of HTML used to create a <template> element.
       */


      createClass(TemplateResult, [{
          key: 'getHTML',
          value: function getHTML() {
              var l = this.strings.length - 1;
              var html = '';
              var isTextBinding = true;
              for (var i = 0; i < l; i++) {
                  var s = this.strings[i];
                  html += s;
                  // We're in a text position if the previous string closed its tags.
                  // If it doesn't have any tags, then we use the previous text position
                  // state.
                  var closing = findTagClose(s);
                  isTextBinding = closing > -1 ? closing < s.length : isTextBinding;
                  html += isTextBinding ? nodeMarker : marker;
              }
              html += this.strings[l];
              return html;
          }
      }, {
          key: 'getTemplateElement',
          value: function getTemplateElement() {
              var template = document.createElement('template');
              template.innerHTML = this.getHTML();
              return template;
          }
      }]);
      return TemplateResult;
  }();
  /**
   * A TemplateResult for SVG fragments.
   *
   * This class wraps HTMl in an <svg> tag in order to parse its contents in the
   * SVG namespace, then modifies the template to remove the <svg> tag so that
   * clones only container the original fragment.
   */
  var SVGTemplateResult = function (_TemplateResult) {
      inherits(SVGTemplateResult, _TemplateResult);

      function SVGTemplateResult() {
          classCallCheck(this, SVGTemplateResult);
          return possibleConstructorReturn(this, (SVGTemplateResult.__proto__ || Object.getPrototypeOf(SVGTemplateResult)).apply(this, arguments));
      }

      createClass(SVGTemplateResult, [{
          key: 'getHTML',
          value: function getHTML() {
              return '<svg>' + get(SVGTemplateResult.prototype.__proto__ || Object.getPrototypeOf(SVGTemplateResult.prototype), 'getHTML', this).call(this) + '</svg>';
          }
      }, {
          key: 'getTemplateElement',
          value: function getTemplateElement() {
              var template = get(SVGTemplateResult.prototype.__proto__ || Object.getPrototypeOf(SVGTemplateResult.prototype), 'getTemplateElement', this).call(this);
              var content = template.content;
              var svgElement = content.firstChild;
              content.removeChild(svgElement);
              reparentNodes(content, svgElement.firstChild);
              return template;
          }
      }]);
      return SVGTemplateResult;
  }(TemplateResult);
  /**
   * An expression marker with embedded unique key to avoid collision with
   * possible text in templates.
   */
  var marker = '{{lit-' + String(Math.random()).slice(2) + '}}';
  /**
   * An expression marker used text-positions, not attribute positions,
   * in template.
   */
  var nodeMarker = '<!--' + marker + '-->';
  var markerRegex = new RegExp(marker + '|' + nodeMarker);
  /**
   * This regex extracts the attribute name preceding an attribute-position
   * expression. It does this by matching the syntax allowed for attributes
   * against the string literal directly preceding the expression, assuming that
   * the expression is in an attribute-value position.
   *
   * See attributes in the HTML spec:
   * https://www.w3.org/TR/html5/syntax.html#attributes-0
   *
   * "\0-\x1F\x7F-\x9F" are Unicode control characters
   *
   * " \x09\x0a\x0c\x0d" are HTML space characters:
   * https://www.w3.org/TR/html5/infrastructure.html#space-character
   *
   * So an attribute is:
   *  * The name: any character except a control character, space character, ('),
   *    ("), ">", "=", or "/"
   *  * Followed by zero or more space characters
   *  * Followed by "="
   *  * Followed by zero or more space characters
   *  * Followed by:
   *    * Any character except space, ('), ("), "<", ">", "=", (`), or
   *    * (") then any non-("), or
   *    * (') then any non-(')
   */
  var lastAttributeNameRegex = /[ \x09\x0a\x0c\x0d]([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)[ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*)$/;
  /**
   * Finds the closing index of the last closed HTML tag.
   * This has 3 possible return values:
   *   - `-1`, meaning there is no tag in str.
   *   - `string.length`, meaning the last opened tag is unclosed.
   *   - Some positive number < str.length, meaning the index of the closing '>'.
   */
  function findTagClose(str) {
      var close = str.lastIndexOf('>');
      var open = str.indexOf('<', close + 1);
      return open > -1 ? str.length : close;
  }
  /**
   * A placeholder for a dynamic expression in an HTML template.
   *
   * There are two built-in part types: AttributePart and NodePart. NodeParts
   * always represent a single dynamic expression, while AttributeParts may
   * represent as many expressions are contained in the attribute.
   *
   * A Template's parts are mutable, so parts can be replaced or modified
   * (possibly to implement different template semantics). The contract is that
   * parts can only be replaced, not removed, added or reordered, and parts must
   * always consume the correct number of values in their `update()` method.
   *
   * TODO(justinfagnani): That requirement is a little fragile. A
   * TemplateInstance could instead be more careful about which values it gives
   * to Part.update().
   */
  var TemplatePart = function TemplatePart(type, index, name, rawName, strings) {
      classCallCheck(this, TemplatePart);

      this.type = type;
      this.index = index;
      this.name = name;
      this.rawName = rawName;
      this.strings = strings;
  };
  var isTemplatePartActive = function isTemplatePartActive(part) {
      return part.index !== -1;
  };
  /**
   * An updateable Template that tracks the location of dynamic parts.
   */
  var Template = function Template(result, element) {
      classCallCheck(this, Template);

      this.parts = [];
      this.element = element;
      var content = this.element.content;
      // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null
      var walker = document.createTreeWalker(content, 133 /* NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT |
                                                          NodeFilter.SHOW_TEXT */, null, false);
      var index = -1;
      var partIndex = 0;
      var nodesToRemove = [];
      // The actual previous node, accounting for removals: if a node is removed
      // it will never be the previousNode.
      var previousNode = void 0;
      // Used to set previousNode at the top of the loop.
      var currentNode = void 0;
      while (walker.nextNode()) {
          index++;
          previousNode = currentNode;
          var node = currentNode = walker.currentNode;
          if (node.nodeType === 1 /* Node.ELEMENT_NODE */) {
                  if (!node.hasAttributes()) {
                      continue;
                  }
                  var attributes = node.attributes;
                  // Per https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap,
                  // attributes are not guaranteed to be returned in document order. In
                  // particular, Edge/IE can return them out of order, so we cannot assume
                  // a correspondance between part index and attribute index.
                  var count = 0;
                  for (var i = 0; i < attributes.length; i++) {
                      if (attributes[i].value.indexOf(marker) >= 0) {
                          count++;
                      }
                  }
                  while (count-- > 0) {
                      // Get the template literal section leading up to the first
                      // expression in this attribute
                      var stringForPart = result.strings[partIndex];
                      // Find the attribute name
                      var attributeNameInPart = lastAttributeNameRegex.exec(stringForPart)[1];
                      // Find the corresponding attribute
                      // TODO(justinfagnani): remove non-null assertion
                      var attribute = attributes.getNamedItem(attributeNameInPart);
                      var stringsForAttributeValue = attribute.value.split(markerRegex);
                      this.parts.push(new TemplatePart('attribute', index, attribute.name, attributeNameInPart, stringsForAttributeValue));
                      node.removeAttribute(attribute.name);
                      partIndex += stringsForAttributeValue.length - 1;
                  }
              } else if (node.nodeType === 3 /* Node.TEXT_NODE */) {
                  var nodeValue = node.nodeValue;
                  if (nodeValue.indexOf(marker) < 0) {
                      continue;
                  }
                  var parent = node.parentNode;
                  var strings = nodeValue.split(markerRegex);
                  var lastIndex = strings.length - 1;
                  // We have a part for each match found
                  partIndex += lastIndex;
                  // Generate a new text node for each literal section
                  // These nodes are also used as the markers for node parts
                  for (var _i = 0; _i < lastIndex; _i++) {
                      parent.insertBefore(strings[_i] === '' ? document.createComment('') : document.createTextNode(strings[_i]), node);
                      this.parts.push(new TemplatePart('node', index++));
                  }
                  parent.insertBefore(strings[lastIndex] === '' ? document.createComment('') : document.createTextNode(strings[lastIndex]), node);
                  nodesToRemove.push(node);
              } else if (node.nodeType === 8 /* Node.COMMENT_NODE */ && node.nodeValue === marker) {
              var _parent = node.parentNode;
              // Add a new marker node to be the startNode of the Part if any of the
              // following are true:
              //  * We don't have a previousSibling
              //  * previousSibling is being removed (thus it's not the
              //    `previousNode`)
              //  * previousSibling is not a Text node
              //
              // TODO(justinfagnani): We should be able to use the previousNode here
              // as the marker node and reduce the number of extra nodes we add to a
              // template. See https://github.com/PolymerLabs/lit-html/issues/147
              var previousSibling = node.previousSibling;
              if (previousSibling === null || previousSibling !== previousNode || previousSibling.nodeType !== Node.TEXT_NODE) {
                  _parent.insertBefore(document.createComment(''), node);
              } else {
                  index--;
              }
              this.parts.push(new TemplatePart('node', index++));
              nodesToRemove.push(node);
              // If we don't have a nextSibling add a marker node.
              // We don't have to check if the next node is going to be removed,
              // because that node will induce a new marker if so.
              if (node.nextSibling === null) {
                  _parent.insertBefore(document.createComment(''), node);
              } else {
                  index--;
              }
              currentNode = previousNode;
              partIndex++;
          }
      }
      // Remove text binding nodes after the walk to not disturb the TreeWalker
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
          for (var _iterator = nodesToRemove[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var n = _step.value;

              n.parentNode.removeChild(n);
          }
      } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
      } finally {
          try {
              if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
              }
          } finally {
              if (_didIteratorError) {
                  throw _iteratorError;
              }
          }
      }
  };
  /**
   * Returns a value ready to be inserted into a Part from a user-provided value.
   *
   * If the user value is a directive, this invokes the directive with the given
   * part. If the value is null, it's converted to undefined to work better
   * with certain DOM APIs, like textContent.
   */
  var getValue = function getValue(part, value) {
      // `null` as the value of a Text node will render the string 'null'
      // so we convert it to undefined
      if (isDirective(value)) {
          value = value(part);
          return noChange;
      }
      return value === null ? undefined : value;
  };
  var isDirective = function isDirective(o) {
      return typeof o === 'function' && o.__litDirective === true;
  };
  /**
   * A sentinel value that signals that a value was handled by a directive and
   * should not be written to the DOM.
   */
  var noChange = {};
  var isPrimitiveValue = function isPrimitiveValue(value) {
      return value === null || !((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' || typeof value === 'function');
  };
  var AttributePart = function () {
      function AttributePart(instance, element, name, strings) {
          classCallCheck(this, AttributePart);

          this.instance = instance;
          this.element = element;
          this.name = name;
          this.strings = strings;
          this.size = strings.length - 1;
          this._previousValues = [];
      }

      createClass(AttributePart, [{
          key: '_interpolate',
          value: function _interpolate(values, startIndex) {
              var strings = this.strings;
              var l = strings.length - 1;
              var text = '';
              for (var i = 0; i < l; i++) {
                  text += strings[i];
                  var v = getValue(this, values[startIndex + i]);
                  if (v && v !== noChange && (Array.isArray(v) || typeof v !== 'string' && v[Symbol.iterator])) {
                      var _iteratorNormalCompletion2 = true;
                      var _didIteratorError2 = false;
                      var _iteratorError2 = undefined;

                      try {
                          for (var _iterator2 = v[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                              var t = _step2.value;

                              // TODO: we need to recursively call getValue into iterables...
                              text += t;
                          }
                      } catch (err) {
                          _didIteratorError2 = true;
                          _iteratorError2 = err;
                      } finally {
                          try {
                              if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                  _iterator2.return();
                              }
                          } finally {
                              if (_didIteratorError2) {
                                  throw _iteratorError2;
                              }
                          }
                      }
                  } else {
                      text += v;
                  }
              }
              return text + strings[l];
          }
      }, {
          key: '_equalToPreviousValues',
          value: function _equalToPreviousValues(values, startIndex) {
              for (var i = startIndex; i < startIndex + this.size; i++) {
                  if (this._previousValues[i] !== values[i] || !isPrimitiveValue(values[i])) {
                      return false;
                  }
              }
              return true;
          }
      }, {
          key: 'setValue',
          value: function setValue(values, startIndex) {
              if (this._equalToPreviousValues(values, startIndex)) {
                  return;
              }
              var s = this.strings;
              var value = void 0;
              if (s.length === 2 && s[0] === '' && s[1] === '') {
                  // An expression that occupies the whole attribute value will leave
                  // leading and trailing empty strings.
                  value = getValue(this, values[startIndex]);
                  if (Array.isArray(value)) {
                      value = value.join('');
                  }
              } else {
                  value = this._interpolate(values, startIndex);
              }
              if (value !== noChange) {
                  this.element.setAttribute(this.name, value);
              }
              this._previousValues = values;
          }
      }]);
      return AttributePart;
  }();
  var NodePart = function () {
      function NodePart(instance, startNode, endNode) {
          classCallCheck(this, NodePart);

          this.instance = instance;
          this.startNode = startNode;
          this.endNode = endNode;
          this._previousValue = undefined;
      }

      createClass(NodePart, [{
          key: 'setValue',
          value: function setValue(value) {
              value = getValue(this, value);
              if (value === noChange) {
                  return;
              }
              if (isPrimitiveValue(value)) {
                  // Handle primitive values
                  // If the value didn't change, do nothing
                  if (value === this._previousValue) {
                      return;
                  }
                  this._setText(value);
              } else if (value instanceof TemplateResult) {
                  this._setTemplateResult(value);
              } else if (Array.isArray(value) || value[Symbol.iterator]) {
                  this._setIterable(value);
              } else if (value instanceof Node) {
                  this._setNode(value);
              } else if (value.then !== undefined) {
                  this._setPromise(value);
              } else {
                  // Fallback, will render the string representation
                  this._setText(value);
              }
          }
      }, {
          key: '_insert',
          value: function _insert(node) {
              this.endNode.parentNode.insertBefore(node, this.endNode);
          }
      }, {
          key: '_setNode',
          value: function _setNode(value) {
              if (this._previousValue === value) {
                  return;
              }
              this.clear();
              this._insert(value);
              this._previousValue = value;
          }
      }, {
          key: '_setText',
          value: function _setText(value) {
              var node = this.startNode.nextSibling;
              value = value === undefined ? '' : value;
              if (node === this.endNode.previousSibling && node.nodeType === Node.TEXT_NODE) {
                  // If we only have a single text node between the markers, we can just
                  // set its value, rather than replacing it.
                  // TODO(justinfagnani): Can we just check if _previousValue is
                  // primitive?
                  node.textContent = value;
              } else {
                  this._setNode(document.createTextNode(value));
              }
              this._previousValue = value;
          }
      }, {
          key: '_setTemplateResult',
          value: function _setTemplateResult(value) {
              var template = this.instance._getTemplate(value);
              var instance = void 0;
              if (this._previousValue && this._previousValue.template === template) {
                  instance = this._previousValue;
              } else {
                  instance = new TemplateInstance(template, this.instance._partCallback, this.instance._getTemplate);
                  this._setNode(instance._clone());
                  this._previousValue = instance;
              }
              instance.update(value.values);
          }
      }, {
          key: '_setIterable',
          value: function _setIterable(value) {
              // For an Iterable, we create a new InstancePart per item, then set its
              // value to the item. This is a little bit of overhead for every item in
              // an Iterable, but it lets us recurse easily and efficiently update Arrays
              // of TemplateResults that will be commonly returned from expressions like:
              // array.map((i) => html`${i}`), by reusing existing TemplateInstances.
              // If _previousValue is an array, then the previous render was of an
              // iterable and _previousValue will contain the NodeParts from the previous
              // render. If _previousValue is not an array, clear this part and make a new
              // array for NodeParts.
              if (!Array.isArray(this._previousValue)) {
                  this.clear();
                  this._previousValue = [];
              }
              // Lets us keep track of how many items we stamped so we can clear leftover
              // items from a previous render
              var itemParts = this._previousValue;
              var partIndex = 0;
              var _iteratorNormalCompletion3 = true;
              var _didIteratorError3 = false;
              var _iteratorError3 = undefined;

              try {
                  for (var _iterator3 = value[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                      var item = _step3.value;

                      // Try to reuse an existing part
                      var itemPart = itemParts[partIndex];
                      // If no existing part, create a new one
                      if (itemPart === undefined) {
                          // If we're creating the first item part, it's startNode should be the
                          // container's startNode
                          var itemStart = this.startNode;
                          // If we're not creating the first part, create a new separator marker
                          // node, and fix up the previous part's endNode to point to it
                          if (partIndex > 0) {
                              var previousPart = itemParts[partIndex - 1];
                              itemStart = previousPart.endNode = document.createTextNode('');
                              this._insert(itemStart);
                          }
                          itemPart = new NodePart(this.instance, itemStart, this.endNode);
                          itemParts.push(itemPart);
                      }
                      itemPart.setValue(item);
                      partIndex++;
                  }
              } catch (err) {
                  _didIteratorError3 = true;
                  _iteratorError3 = err;
              } finally {
                  try {
                      if (!_iteratorNormalCompletion3 && _iterator3.return) {
                          _iterator3.return();
                      }
                  } finally {
                      if (_didIteratorError3) {
                          throw _iteratorError3;
                      }
                  }
              }

              if (partIndex === 0) {
                  this.clear();
                  this._previousValue = undefined;
              } else if (partIndex < itemParts.length) {
                  var lastPart = itemParts[partIndex - 1];
                  // Truncate the parts array so _previousValue reflects the current state
                  itemParts.length = partIndex;
                  this.clear(lastPart.endNode.previousSibling);
                  lastPart.endNode = this.endNode;
              }
          }
      }, {
          key: '_setPromise',
          value: function _setPromise(value) {
              var _this2 = this;

              this._previousValue = value;
              value.then(function (v) {
                  if (_this2._previousValue === value) {
                      _this2.setValue(v);
                  }
              });
          }
      }, {
          key: 'clear',
          value: function clear() {
              var startNode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.startNode;

              removeNodes(this.startNode.parentNode, startNode.nextSibling, this.endNode);
          }
      }]);
      return NodePart;
  }();
  var defaultPartCallback = function defaultPartCallback(instance, templatePart, node) {
      if (templatePart.type === 'attribute') {
          return new AttributePart(instance, node, templatePart.name, templatePart.strings);
      } else if (templatePart.type === 'node') {
          return new NodePart(instance, node, node.nextSibling);
      }
      throw new Error('Unknown part type ' + templatePart.type);
  };
  /**
   * An instance of a `Template` that can be attached to the DOM and updated
   * with new values.
   */
  var TemplateInstance = function () {
      function TemplateInstance(template, partCallback, getTemplate) {
          classCallCheck(this, TemplateInstance);

          this._parts = [];
          this.template = template;
          this._partCallback = partCallback;
          this._getTemplate = getTemplate;
      }

      createClass(TemplateInstance, [{
          key: 'update',
          value: function update(values) {
              var valueIndex = 0;
              var _iteratorNormalCompletion4 = true;
              var _didIteratorError4 = false;
              var _iteratorError4 = undefined;

              try {
                  for (var _iterator4 = this._parts[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                      var part = _step4.value;

                      if (!part) {
                          valueIndex++;
                      } else if (part.size === undefined) {
                          part.setValue(values[valueIndex]);
                          valueIndex++;
                      } else {
                          part.setValue(values, valueIndex);
                          valueIndex += part.size;
                      }
                  }
              } catch (err) {
                  _didIteratorError4 = true;
                  _iteratorError4 = err;
              } finally {
                  try {
                      if (!_iteratorNormalCompletion4 && _iterator4.return) {
                          _iterator4.return();
                      }
                  } finally {
                      if (_didIteratorError4) {
                          throw _iteratorError4;
                      }
                  }
              }
          }
      }, {
          key: '_clone',
          value: function _clone() {
              // Clone the node, rather than importing it, to keep the fragment in the
              // template's document. This leaves the fragment inert so custom elements
              // won't upgrade until after the main document adopts the node.
              var fragment = this.template.element.content.cloneNode(true);
              var parts = this.template.parts;
              if (parts.length > 0) {
                  // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be
                  // null
                  var _walker = document.createTreeWalker(fragment, 133 /* NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT |
                                                                        NodeFilter.SHOW_TEXT */, null, false);
                  var _index = -1;
                  for (var i = 0; i < parts.length; i++) {
                      var part = parts[i];
                      var partActive = isTemplatePartActive(part);
                      // An inactive part has no coresponding Template node.
                      if (partActive) {
                          while (_index < part.index) {
                              _index++;
                              _walker.nextNode();
                          }
                      }
                      this._parts.push(partActive ? this._partCallback(this, part, _walker.currentNode) : undefined);
                  }
              }
              return fragment;
          }
      }]);
      return TemplateInstance;
  }();
  /**
   * Reparents nodes, starting from `startNode` (inclusive) to `endNode`
   * (exclusive), into another container (could be the same container), before
   * `beforeNode`. If `beforeNode` is null, it appends the nodes to the
   * container.
   */
  var reparentNodes = function reparentNodes(container, start) {
      var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var before = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

      var node = start;
      while (node !== end) {
          var n = node.nextSibling;
          container.insertBefore(node, before);
          node = n;
      }
  };
  /**
   * Removes nodes, starting from `startNode` (inclusive) to `endNode`
   * (exclusive), from `container`.
   */
  var removeNodes = function removeNodes(container, startNode) {
      var endNode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      var node = startNode;
      while (node !== endNode) {
          var n = node.nextSibling;
          container.removeChild(node);
          node = n;
      }
  };

  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  var walkerNodeFilter = NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT;
  /**
   * Removes the list of nodes from a Template safely. In addition to removing
   * nodes from the Template, the Template part indices are updated to match
   * the mutated Template DOM.
   *
   * As the template is walked the removal state is tracked and
   * part indices are adjusted as needed.
   *
   * div
   *   div#1 (remove) <-- start removing (removing node is div#1)
   *     div
   *       div#2 (remove)  <-- continue removing (removing node is still div#1)
   *         div
   * div <-- stop removing since previous sibling is the removing node (div#1, removed 4 nodes)
   */
  function removeNodesFromTemplate(template, nodesToRemove) {
      var content = template.element.content,
          parts = template.parts;

      var walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
      var partIndex = 0;
      var part = parts[0];
      var nodeIndex = -1;
      var removeCount = 0;
      var nodesToRemoveInTemplate = [];
      var currentRemovingNode = null;
      while (walker.nextNode()) {
          nodeIndex++;
          var node = walker.currentNode;
          // End removal if stepped past the removing node
          if (node.previousSibling === currentRemovingNode) {
              currentRemovingNode = null;
          }
          // A node to remove was found in the template
          if (nodesToRemove.has(node)) {
              nodesToRemoveInTemplate.push(node);
              // Track node we're removing
              if (currentRemovingNode === null) {
                  currentRemovingNode = node;
              }
          }
          // When removing, increment count by which to adjust subsequent part indices
          if (currentRemovingNode !== null) {
              removeCount++;
          }
          while (part !== undefined && part.index === nodeIndex) {
              // If part is in a removed node deactivate it by setting index to -1 or
              // adjust the index as needed.
              part.index = currentRemovingNode !== null ? -1 : part.index - removeCount;
              part = parts[++partIndex];
          }
      }
      nodesToRemoveInTemplate.forEach(function (n) {
          return n.parentNode.removeChild(n);
      });
  }
  var countNodes = function countNodes(node) {
      var count = 1;
      var walker = document.createTreeWalker(node, walkerNodeFilter, null, false);
      while (walker.nextNode()) {
          count++;
      }
      return count;
  };
  var nextActiveIndexInTemplateParts = function nextActiveIndexInTemplateParts(parts) {
      var startIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;

      for (var i = startIndex + 1; i < parts.length; i++) {
          var part = parts[i];
          if (isTemplatePartActive(part)) {
              return i;
          }
      }
      return -1;
  };
  /**
   * Inserts the given node into the Template, optionally before the given
   * refNode. In addition to inserting the node into the Template, the Template
   * part indices are updated to match the mutated Template DOM.
   */
  function insertNodeIntoTemplate(template, node) {
      var refNode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var content = template.element.content,
          parts = template.parts;
      // If there's no refNode, then put node at end of template.
      // No part indices need to be shifted in this case.

      if (refNode === null || refNode === undefined) {
          content.appendChild(node);
          return;
      }
      var walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
      var partIndex = nextActiveIndexInTemplateParts(parts);
      var insertCount = 0;
      var walkerIndex = -1;
      while (walker.nextNode()) {
          walkerIndex++;
          var walkerNode = walker.currentNode;
          if (walkerNode === refNode) {
              refNode.parentNode.insertBefore(node, refNode);
              insertCount = countNodes(node);
          }
          while (partIndex !== -1 && parts[partIndex].index === walkerIndex) {
              // If we've inserted the node, simply adjust all subsequent parts
              if (insertCount > 0) {
                  while (partIndex !== -1) {
                      parts[partIndex].index += insertCount;
                      partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
                  }
                  return;
              }
              partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
          }
      }
  }

  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  // Get a key to lookup in `templateCaches`.
  var getTemplateCacheKey = function getTemplateCacheKey(type, scopeName) {
      return type + '--' + scopeName;
  };
  /**
   * Template factory which scopes template DOM using ShadyCSS.
   * @param scopeName {string}
   */
  var shadyTemplateFactory = function shadyTemplateFactory(scopeName) {
      return function (result) {
          var cacheKey = getTemplateCacheKey(result.type, scopeName);
          var templateCache = templateCaches.get(cacheKey);
          if (templateCache === undefined) {
              templateCache = new Map();
              templateCaches.set(cacheKey, templateCache);
          }
          var template = templateCache.get(result.strings);
          if (template === undefined) {
              var element = result.getTemplateElement();
              if (_typeof(window.ShadyCSS) === 'object') {
                  window.ShadyCSS.prepareTemplateDom(element, scopeName);
              }
              template = new Template(result, element);
              templateCache.set(result.strings, template);
          }
          return template;
      };
  };
  var TEMPLATE_TYPES = ['html', 'svg'];
  /**
   * Removes all style elements from Templates for the given scopeName.
   */
  function removeStylesFromLitTemplates(scopeName) {
      TEMPLATE_TYPES.forEach(function (type) {
          var templates = templateCaches.get(getTemplateCacheKey(type, scopeName));
          if (templates !== undefined) {
              templates.forEach(function (template) {
                  var content = template.element.content;

                  var styles = content.querySelectorAll('style');
                  removeNodesFromTemplate(template, new Set(Array.from(styles)));
              });
          }
      });
  }
  var shadyRenderSet = new Set();
  /**
   * For the given scope name, ensures that ShadyCSS style scoping is performed.
   * This is done just once per scope name so the fragment and template cannot
   * be modified.
   * (1) extracts styles from the rendered fragment and hands them to ShadyCSS
   * to be scoped and appended to the document
   * (2) removes style elements from all lit-html Templates for this scope name.
   *
   * Note, <style> elements can only be placed into templates for the
   * initial rendering of the scope. If <style> elements are included in templates
   * dynamically rendered to the scope (after the first scope render), they will
   * not be scoped and the <style> will be left in the template and rendered output.
   */
  var ensureStylesScoped = function ensureStylesScoped(fragment, template, scopeName) {
      // only scope element template once per scope name
      if (!shadyRenderSet.has(scopeName)) {
          shadyRenderSet.add(scopeName);
          var styleTemplate = document.createElement('template');
          Array.from(fragment.querySelectorAll('style')).forEach(function (s) {
              styleTemplate.content.appendChild(s);
          });
          window.ShadyCSS.prepareTemplateStyles(styleTemplate, scopeName);
          // Fix templates: note the expectation here is that the given `fragment`
          // has been generated from the given `template` which contains
          // the set of templates rendered into this scope.
          // It is only from this set of initial templates from which styles
          // will be scoped and removed.
          removeStylesFromLitTemplates(scopeName);
          // ApplyShim case
          if (window.ShadyCSS.nativeShadow) {
              var style = styleTemplate.content.querySelector('style');
              if (style !== null) {
                  // Insert style into rendered fragment
                  fragment.insertBefore(style, fragment.firstChild);
                  // Insert into lit-template (for subsequent renders)
                  insertNodeIntoTemplate(template, style.cloneNode(true), template.element.content.firstChild);
              }
          }
      }
  };
  // NOTE: We're copying code from lit-html's `render` method here.
  // We're doing this explicitly because the API for rendering templates is likely
  // to change in the near term.
  function render$1(result, container, scopeName) {
      var templateFactory = shadyTemplateFactory(scopeName);
      var template = templateFactory(result);
      var instance = container.__templateInstance;
      // Repeat render, just call update()
      if (instance !== undefined && instance.template === template && instance._partCallback === result.partCallback) {
          instance.update(result.values);
          return;
      }
      // First render, create a new TemplateInstance and append it
      instance = new TemplateInstance(template, result.partCallback, templateFactory);
      container.__templateInstance = instance;
      var fragment = instance._clone();
      instance.update(result.values);
      var host = container instanceof ShadowRoot ? container.host : undefined;
      // If there's a shadow host, do ShadyCSS scoping...
      if (host !== undefined && _typeof(window.ShadyCSS) === 'object') {
          ensureStylesScoped(fragment, template, scopeName);
          window.ShadyCSS.styleElement(host);
      }
      removeNodes(container, container.firstChild);
      container.appendChild(fragment);
  }

  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  /**
   * Interprets a template literal as a lit-extended HTML template.
   */
  var html$1 = function html$$1(strings) {
      for (var _len = arguments.length, values = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          values[_key - 1] = arguments[_key];
      }

      return new TemplateResult(strings, values, 'html', extendedPartCallback);
  };
  /**
   * A PartCallback which allows templates to set properties and declarative
   * event handlers.
   *
   * Properties are set by default, instead of attributes. Attribute names in
   * lit-html templates preserve case, so properties are case sensitive. If an
   * expression takes up an entire attribute value, then the property is set to
   * that value. If an expression is interpolated with a string or other
   * expressions then the property is set to the string result of the
   * interpolation.
   *
   * To set an attribute instead of a property, append a `$` suffix to the
   * attribute name.
   *
   * Example:
   *
   *     html`<button class$="primary">Buy Now</button>`
   *
   * To set an event handler, prefix the attribute name with `on-`:
   *
   * Example:
   *
   *     html`<button on-click=${(e)=> this.onClickHandler(e)}>Buy Now</button>`
   *
   */
  var extendedPartCallback = function extendedPartCallback(instance, templatePart, node) {
      if (templatePart.type === 'attribute') {
          if (templatePart.rawName.substr(0, 3) === 'on-') {
              var eventName = templatePart.rawName.slice(3);
              return new EventPart(instance, node, eventName);
          }
          var lastChar = templatePart.name.substr(templatePart.name.length - 1);
          if (lastChar === '$') {
              var name = templatePart.name.slice(0, -1);
              return new AttributePart(instance, node, name, templatePart.strings);
          }
          if (lastChar === '?') {
              var _name = templatePart.name.slice(0, -1);
              return new BooleanAttributePart(instance, node, _name, templatePart.strings);
          }
          return new PropertyPart(instance, node, templatePart.rawName, templatePart.strings);
      }
      return defaultPartCallback(instance, templatePart, node);
  };
  /**
   * Implements a boolean attribute, roughly as defined in the HTML
   * specification.
   *
   * If the value is truthy, then the attribute is present with a value of
   * ''. If the value is falsey, the attribute is removed.
   */
  var BooleanAttributePart = function (_AttributePart) {
      inherits(BooleanAttributePart, _AttributePart);

      function BooleanAttributePart() {
          classCallCheck(this, BooleanAttributePart);
          return possibleConstructorReturn(this, (BooleanAttributePart.__proto__ || Object.getPrototypeOf(BooleanAttributePart)).apply(this, arguments));
      }

      createClass(BooleanAttributePart, [{
          key: 'setValue',
          value: function setValue(values, startIndex) {
              var s = this.strings;
              if (s.length === 2 && s[0] === '' && s[1] === '') {
                  var value = getValue(this, values[startIndex]);
                  if (value === noChange) {
                      return;
                  }
                  if (value) {
                      this.element.setAttribute(this.name, '');
                  } else {
                      this.element.removeAttribute(this.name);
                  }
              } else {
                  throw new Error('boolean attributes can only contain a single expression');
              }
          }
      }]);
      return BooleanAttributePart;
  }(AttributePart);
  var PropertyPart = function (_AttributePart2) {
      inherits(PropertyPart, _AttributePart2);

      function PropertyPart() {
          classCallCheck(this, PropertyPart);
          return possibleConstructorReturn(this, (PropertyPart.__proto__ || Object.getPrototypeOf(PropertyPart)).apply(this, arguments));
      }

      createClass(PropertyPart, [{
          key: 'setValue',
          value: function setValue(values, startIndex) {
              var s = this.strings;
              var value = void 0;
              if (this._equalToPreviousValues(values, startIndex)) {
                  return;
              }
              if (s.length === 2 && s[0] === '' && s[1] === '') {
                  // An expression that occupies the whole attribute value will leave
                  // leading and trailing empty strings.
                  value = getValue(this, values[startIndex]);
              } else {
                  // Interpolation, so interpolate
                  value = this._interpolate(values, startIndex);
              }
              if (value !== noChange) {
                  this.element[this.name] = value;
              }
              this._previousValues = values;
          }
      }]);
      return PropertyPart;
  }(AttributePart);
  var EventPart = function () {
      function EventPart(instance, element, eventName) {
          classCallCheck(this, EventPart);

          this.instance = instance;
          this.element = element;
          this.eventName = eventName;
      }

      createClass(EventPart, [{
          key: 'setValue',
          value: function setValue(value) {
              var listener = getValue(this, value);
              if (listener === this._listener) {
                  return;
              }
              if (listener == null) {
                  this.element.removeEventListener(this.eventName, this);
              } else if (this._listener == null) {
                  this.element.addEventListener(this.eventName, this);
              }
              this._listener = listener;
          }
      }, {
          key: 'handleEvent',
          value: function handleEvent(event) {
              if (typeof this._listener === 'function') {
                  this._listener.call(this.element, event);
              } else if (typeof this._listener.handleEvent === 'function') {
                  this._listener.handleEvent(event);
              }
          }
      }]);
      return EventPart;
  }();

  /**
   * Returns a string of css class names formed by taking the properties
   * in the `classInfo` object and appending the property name to the string of
   * class names if the property value is truthy.
   * @param classInfo
   */
  function classString(classInfo) {
      var o = [];
      for (var name in classInfo) {
          var v = classInfo[name];
          if (v) {
              o.push(name);
          }
      }
      return o.join(' ');
  }
  var LitElement = function (_PropertiesMixin) {
      inherits(LitElement, _PropertiesMixin);

      function LitElement() {
          classCallCheck(this, LitElement);

          var _this = possibleConstructorReturn(this, (LitElement.__proto__ || Object.getPrototypeOf(LitElement)).apply(this, arguments));

          _this.__renderComplete = null;
          _this.__resolveRenderComplete = null;
          _this.__isInvalid = false;
          _this.__isChanging = false;
          return _this;
      }
      /**
       * Override which sets up element rendering by calling* `_createRoot`
       * and `_firstRendered`.
       */


      createClass(LitElement, [{
          key: 'ready',
          value: function ready() {
              this._root = this._createRoot();
              get(LitElement.prototype.__proto__ || Object.getPrototypeOf(LitElement.prototype), 'ready', this).call(this);
              this._firstRendered();
          }
      }, {
          key: 'connectedCallback',
          value: function connectedCallback() {
              if (window.ShadyCSS && this._root) {
                  window.ShadyCSS.styleElement(this);
              }
              get(LitElement.prototype.__proto__ || Object.getPrototypeOf(LitElement.prototype), 'connectedCallback', this).call(this);
          }
          /**
           * Called after the element DOM is rendered for the first time.
           * Implement to perform tasks after first rendering like capturing a
           * reference to a static node which must be directly manipulated.
           * This should not be commonly needed. For tasks which should be performed
           * before first render, use the element constructor.
           */

      }, {
          key: '_firstRendered',
          value: function _firstRendered() {}
          /**
           * Implement to customize where the element's template is rendered by
           * returning an element into which to render. By default this creates
           * a shadowRoot for the element. To render into the element's childNodes,
           * return `this`.
           * @returns {Element|DocumentFragment} Returns a node into which to render.
           */

      }, {
          key: '_createRoot',
          value: function _createRoot() {
              return this.attachShadow({ mode: 'open' });
          }
          /**
           * Override which returns the value of `_shouldRender` which users
           * should implement to control rendering. If this method returns false,
           * _propertiesChanged will not be called and no rendering will occur even
           * if property values change or `requestRender` is called.
           * @param _props Current element properties
           * @param _changedProps Changing element properties
           * @param _prevProps Previous element properties
           * @returns {boolean} Default implementation always returns true.
           */

      }, {
          key: '_shouldPropertiesChange',
          value: function _shouldPropertiesChange(_props, _changedProps, _prevProps) {
              var shouldRender = this._shouldRender(_props, _changedProps, _prevProps);
              if (!shouldRender && this.__resolveRenderComplete) {
                  this.__resolveRenderComplete(false);
              }
              return shouldRender;
          }
          /**
           * Implement to control if rendering should occur when property values
           * change or `requestRender` is called. By default, this method always
           * returns true, but this can be customized as an optimization to avoid
           * rendering work when changes occur which should not be rendered.
           * @param _props Current element properties
           * @param _changedProps Changing element properties
           * @param _prevProps Previous element properties
           * @returns {boolean} Default implementation always returns true.
           */

      }, {
          key: '_shouldRender',
          value: function _shouldRender(_props, _changedProps, _prevProps) {
              return true;
          }
          /**
           * Override which performs element rendering by calling
           * `_render`, `_applyRender`, and finally `_didRender`.
           * @param props Current element properties
           * @param changedProps Changing element properties
           * @param prevProps Previous element properties
           */

      }, {
          key: '_propertiesChanged',
          value: function _propertiesChanged(props, changedProps, prevProps) {
              get(LitElement.prototype.__proto__ || Object.getPrototypeOf(LitElement.prototype), '_propertiesChanged', this).call(this, props, changedProps, prevProps);
              var result = this._render(props);
              if (result && this._root !== undefined) {
                  this._applyRender(result, this._root);
              }
              this._didRender(props, changedProps, prevProps);
              if (this.__resolveRenderComplete) {
                  this.__resolveRenderComplete(true);
              }
          }
      }, {
          key: '_flushProperties',
          value: function _flushProperties() {
              this.__isChanging = true;
              this.__isInvalid = false;
              get(LitElement.prototype.__proto__ || Object.getPrototypeOf(LitElement.prototype), '_flushProperties', this).call(this);
              this.__isChanging = false;
          }
          /**
           * Override which warns when a user attempts to change a property during
           * the rendering lifecycle. This is an anti-pattern and should be avoided.
           * @param property {string}
           * @param value {any}
           * @param old {any}
           */
          // tslint:disable-next-line no-any

      }, {
          key: '_shouldPropertyChange',
          value: function _shouldPropertyChange(property, value, old) {
              var change = get(LitElement.prototype.__proto__ || Object.getPrototypeOf(LitElement.prototype), '_shouldPropertyChange', this).call(this, property, value, old);
              if (change && this.__isChanging) {
                  console.trace('Setting properties in response to other properties changing ' + ('considered harmful. Setting \'' + property + '\' from ') + ('\'' + this._getProperty(property) + '\' to \'' + value + '\'.'));
              }
              return change;
          }
          /**
           * Implement to describe the DOM which should be rendered in the element.
           * Ideally, the implementation is a pure function using only props to describe
           * the element template. The implementation must return a `lit-html`
           * TemplateResult. By default this template is rendered into the element's
           * shadowRoot. This can be customized by implementing `_createRoot`. This
           * method must be implemented.
           * @param {*} _props Current element properties
           * @returns {TemplateResult} Must return a lit-html TemplateResult.
           */

      }, {
          key: '_render',
          value: function _render(_props) {
              throw new Error('_render() not implemented');
          }
          /**
           * Renders the given lit-html template `result` into the given `node`.
           * Implement to customize the way rendering is applied. This is should not
           * typically be needed and is provided for advanced use cases.
           * @param result {TemplateResult} `lit-html` template result to render
           * @param node {Element|DocumentFragment} node into which to render
           */

      }, {
          key: '_applyRender',
          value: function _applyRender(result, node) {
              render$1(result, node, this.localName);
          }
          /**
           * Called after element DOM has been rendered. Implement to
           * directly control rendered DOM. Typically this is not needed as `lit-html`
           * can be used in the `_render` method to set properties, attributes, and
           * event listeners. However, it is sometimes useful for calling methods on
           * rendered elements, like calling `focus()` on an element to focus it.
           * @param _props Current element properties
           * @param _changedProps Changing element properties
           * @param _prevProps Previous element properties
           */

      }, {
          key: '_didRender',
          value: function _didRender(_props, _changedProps, _prevProps) {}
          /**
           * Call to request the element to asynchronously re-render regardless
           * of whether or not any property changes are pending.
           */

      }, {
          key: 'requestRender',
          value: function requestRender() {
              this._invalidateProperties();
          }
          /**
           * Override which provides tracking of invalidated state.
           */

      }, {
          key: '_invalidateProperties',
          value: function _invalidateProperties() {
              this.__isInvalid = true;
              get(LitElement.prototype.__proto__ || Object.getPrototypeOf(LitElement.prototype), '_invalidateProperties', this).call(this);
          }
          /**
           * Returns a promise which resolves after the element next renders.
           * The promise resolves to `true` if the element rendered and `false` if the
           * element did not render.
           * This is useful when users (e.g. tests) need to react to the rendered state
           * of the element after a change is made.
           * This can also be useful in event handlers if it is desireable to wait
           * to send an event until after rendering. If possible implement the
           * `_didRender` method to directly respond to rendering within the
           * rendering lifecycle.
           */

      }, {
          key: 'renderComplete',
          get: function get$$1() {
              var _this2 = this;

              if (!this.__renderComplete) {
                  this.__renderComplete = new Promise(function (resolve) {
                      _this2.__resolveRenderComplete = function (value) {
                          _this2.__resolveRenderComplete = _this2.__renderComplete = null;
                          resolve(value);
                      };
                  });
                  if (!this.__isInvalid && this.__resolveRenderComplete) {
                      Promise.resolve().then(function () {
                          return _this2.__resolveRenderComplete(false);
                      });
                  }
              }
              return this.__renderComplete;
          }
      }]);
      return LitElement;
  }(PropertiesMixin(HTMLElement));

  var _templateObject = taggedTemplateLiteral(['<style>@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var: 1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug::before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:transparent;will-change:transform, opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear;z-index:1}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:225ms mdc-ripple-fg-radius-in forwards,75ms mdc-ripple-fg-opacity-in forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:150ms mdc-ripple-fg-opacity-out;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000}.mdc-ripple-surface:hover::before{opacity:.04}.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before,.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before{transition-duration:75ms;opacity:.12}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.16}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: .16}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee}@supports not (-ms-ime-align: auto){.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:var(--mdc-theme-primary, #6200ee)}}.mdc-ripple-surface--primary:hover::before{opacity:.04}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before,.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.16}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: .16}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786}@supports not (-ms-ime-align: auto){.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:var(--mdc-theme-secondary, #018786)}}.mdc-ripple-surface--accent:hover::before{opacity:.04}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before,.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.16}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: .16}.mdc-ripple-surface{pointer-events:none;position:absolute;top:0;right:0;bottom:0;left:0}\n</style>'], ['<style>@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var: 1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug::before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-ripple-surface{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:transparent;will-change:transform, opacity;position:relative;outline:none;overflow:hidden}.mdc-ripple-surface::before,.mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-ripple-surface::before{transition:opacity 15ms linear;z-index:1}.mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:225ms mdc-ripple-fg-radius-in forwards,75ms mdc-ripple-fg-opacity-in forwards}.mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:150ms mdc-ripple-fg-opacity-out;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-ripple-surface::before,.mdc-ripple-surface::after{background-color:#000}.mdc-ripple-surface:hover::before{opacity:.04}.mdc-ripple-surface:not(.mdc-ripple-upgraded):focus::before,.mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before{transition-duration:75ms;opacity:.12}.mdc-ripple-surface:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.16}.mdc-ripple-surface.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: .16}.mdc-ripple-surface::before,.mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]{overflow:visible}.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded]::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::before,.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface[data-mdc-ripple-is-unbounded].mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:#6200ee}@supports not (-ms-ime-align: auto){.mdc-ripple-surface--primary::before,.mdc-ripple-surface--primary::after{background-color:var(--mdc-theme-primary, #6200ee)}}.mdc-ripple-surface--primary:hover::before{opacity:.04}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):focus::before,.mdc-ripple-surface--primary.mdc-ripple-upgraded--background-focused::before{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--primary:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.16}.mdc-ripple-surface--primary.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: .16}.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:#018786}@supports not (-ms-ime-align: auto){.mdc-ripple-surface--accent::before,.mdc-ripple-surface--accent::after{background-color:var(--mdc-theme-secondary, #018786)}}.mdc-ripple-surface--accent:hover::before{opacity:.04}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):focus::before,.mdc-ripple-surface--accent.mdc-ripple-upgraded--background-focused::before{transition-duration:75ms;opacity:.12}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-ripple-surface--accent:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.16}.mdc-ripple-surface--accent.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: .16}.mdc-ripple-surface{pointer-events:none;position:absolute;top:0;right:0;bottom:0;left:0}\n</style>']);

  var style = html$1(_templateObject);

  /**
   * @license
   * Copyright 2016 Google Inc.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
   * @template A
   */
  var MDCFoundation = function () {
    createClass(MDCFoundation, null, [{
      key: "cssClasses",

      /** @return enum{cssClasses} */
      get: function get$$1() {
        // Classes extending MDCFoundation should implement this method to return an object which exports every
        // CSS class the foundation class needs as a property. e.g. {ACTIVE: 'mdc-component--active'}
        return {};
      }

      /** @return enum{strings} */

    }, {
      key: "strings",
      get: function get$$1() {
        // Classes extending MDCFoundation should implement this method to return an object which exports all
        // semantic strings as constants. e.g. {ARIA_ROLE: 'tablist'}
        return {};
      }

      /** @return enum{numbers} */

    }, {
      key: "numbers",
      get: function get$$1() {
        // Classes extending MDCFoundation should implement this method to return an object which exports all
        // of its semantic numbers as constants. e.g. {ANIMATION_DELAY_MS: 350}
        return {};
      }

      /** @return {!Object} */

    }, {
      key: "defaultAdapter",
      get: function get$$1() {
        // Classes extending MDCFoundation may choose to implement this getter in order to provide a convenient
        // way of viewing the necessary methods of an adapter. In the future, this could also be used for adapter
        // validation.
        return {};
      }

      /**
       * @param {A=} adapter
       */

    }]);

    function MDCFoundation() {
      var adapter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      classCallCheck(this, MDCFoundation);

      /** @protected {!A} */
      this.adapter_ = adapter;
    }

    createClass(MDCFoundation, [{
      key: "init",
      value: function init() {
        // Subclasses should override this method to perform initialization routines (registering events, etc.)
      }
    }, {
      key: "destroy",
      value: function destroy() {
        // Subclasses should override this method to perform de-initialization routines (de-registering events, etc.)
      }
    }]);
    return MDCFoundation;
  }();

  /**
   * @license
   * Copyright 2016 Google Inc.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
   * @template F
   */

  var MDCComponent = function () {
    createClass(MDCComponent, null, [{
      key: 'attachTo',

      /**
       * @param {!Element} root
       * @return {!MDCComponent}
       */
      value: function attachTo(root) {
        // Subclasses which extend MDCBase should provide an attachTo() method that takes a root element and
        // returns an instantiated component with its root set to that element. Also note that in the cases of
        // subclasses, an explicit foundation class will not have to be passed in; it will simply be initialized
        // from getDefaultFoundation().
        return new MDCComponent(root, new MDCFoundation());
      }

      /**
       * @param {!Element} root
       * @param {F=} foundation
       * @param {...?} args
       */

    }]);

    function MDCComponent(root) {
      var foundation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      classCallCheck(this, MDCComponent);

      /** @protected {!Element} */
      this.root_ = root;

      for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        args[_key - 2] = arguments[_key];
      }

      this.initialize.apply(this, args);
      // Note that we initialize foundation here and not within the constructor's default param so that
      // this.root_ is defined and can be used within the foundation class.
      /** @protected {!F} */
      this.foundation_ = foundation === undefined ? this.getDefaultFoundation() : foundation;
      this.foundation_.init();
      this.initialSyncWithDOM();
    }

    createClass(MDCComponent, [{
      key: 'initialize',
      value: function initialize() /* ...args */{}
      // Subclasses can override this to do any additional setup work that would be considered part of a
      // "constructor". Essentially, it is a hook into the parent constructor before the foundation is
      // initialized. Any additional arguments besides root and foundation will be passed in here.


      /**
       * @return {!F} foundation
       */

    }, {
      key: 'getDefaultFoundation',
      value: function getDefaultFoundation() {
        // Subclasses must override this method to return a properly configured foundation class for the
        // component.
        throw new Error('Subclasses must override getDefaultFoundation to return a properly configured ' + 'foundation class');
      }
    }, {
      key: 'initialSyncWithDOM',
      value: function initialSyncWithDOM() {
        // Subclasses should override this method if they need to perform work to synchronize with a host DOM
        // object. An example of this would be a form control wrapper that needs to synchronize its internal state
        // to some property or attribute of the host DOM. Please note: this is *not* the place to perform DOM
        // reads/writes that would cause layout / paint, as this is called synchronously from within the constructor.
      }
    }, {
      key: 'destroy',
      value: function destroy() {
        // Subclasses may implement this method to release any resources / deregister any listeners they have
        // attached. An example of this might be deregistering a resize event from the window object.
        this.foundation_.destroy();
      }

      /**
       * Wrapper method to add an event listener to the component's root element. This is most useful when
       * listening for custom events.
       * @param {string} evtType
       * @param {!Function} handler
       */

    }, {
      key: 'listen',
      value: function listen(evtType, handler) {
        this.root_.addEventListener(evtType, handler);
      }

      /**
       * Wrapper method to remove an event listener to the component's root element. This is most useful when
       * unlistening for custom events.
       * @param {string} evtType
       * @param {!Function} handler
       */

    }, {
      key: 'unlisten',
      value: function unlisten(evtType, handler) {
        this.root_.removeEventListener(evtType, handler);
      }

      /**
       * Fires a cross-browser-compatible custom event from the component root of the given type,
       * with the given data.
       * @param {string} evtType
       * @param {!Object} evtData
       * @param {boolean=} shouldBubble
       */

    }, {
      key: 'emit',
      value: function emit(evtType, evtData) {
        var shouldBubble = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        var evt = void 0;
        if (typeof CustomEvent === 'function') {
          evt = new CustomEvent(evtType, {
            detail: evtData,
            bubbles: shouldBubble
          });
        } else {
          evt = document.createEvent('CustomEvent');
          evt.initCustomEvent(evtType, shouldBubble, false, evtData);
        }

        this.root_.dispatchEvent(evt);
      }
    }]);
    return MDCComponent;
  }();

  /**
   * @license
   * Copyright 2016 Google Inc. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /* eslint no-unused-vars: [2, {"args": "none"}] */

  /**
   * Adapter for MDC Ripple. Provides an interface for managing
   * - classes
   * - dom
   * - CSS variables
   * - position
   * - dimensions
   * - scroll position
   * - event handlers
   * - unbounded, active and disabled states
   *
   * Additionally, provides type information for the adapter to the Closure
   * compiler.
   *
   * Implement this adapter for your framework of choice to delegate updates to
   * the component in your framework of choice. See architecture documentation
   * for more details.
   * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
   *
   * @record
   */
  var MDCRippleAdapter = function () {
    function MDCRippleAdapter() {
      classCallCheck(this, MDCRippleAdapter);
    }

    createClass(MDCRippleAdapter, [{
      key: "browserSupportsCssVars",

      /** @return {boolean} */
      value: function browserSupportsCssVars() {}

      /** @return {boolean} */

    }, {
      key: "isUnbounded",
      value: function isUnbounded() {}

      /** @return {boolean} */

    }, {
      key: "isSurfaceActive",
      value: function isSurfaceActive() {}

      /** @return {boolean} */

    }, {
      key: "isSurfaceDisabled",
      value: function isSurfaceDisabled() {}

      /** @param {string} className */

    }, {
      key: "addClass",
      value: function addClass(className) {}

      /** @param {string} className */

    }, {
      key: "removeClass",
      value: function removeClass(className) {}

      /** @param {!EventTarget} target */

    }, {
      key: "containsEventTarget",
      value: function containsEventTarget(target) {}

      /**
       * @param {string} evtType
       * @param {!Function} handler
       */

    }, {
      key: "registerInteractionHandler",
      value: function registerInteractionHandler(evtType, handler) {}

      /**
       * @param {string} evtType
       * @param {!Function} handler
       */

    }, {
      key: "deregisterInteractionHandler",
      value: function deregisterInteractionHandler(evtType, handler) {}

      /**
       * @param {string} evtType
       * @param {!Function} handler
       */

    }, {
      key: "registerDocumentInteractionHandler",
      value: function registerDocumentInteractionHandler(evtType, handler) {}

      /**
       * @param {string} evtType
       * @param {!Function} handler
       */

    }, {
      key: "deregisterDocumentInteractionHandler",
      value: function deregisterDocumentInteractionHandler(evtType, handler) {}

      /**
       * @param {!Function} handler
       */

    }, {
      key: "registerResizeHandler",
      value: function registerResizeHandler(handler) {}

      /**
       * @param {!Function} handler
       */

    }, {
      key: "deregisterResizeHandler",
      value: function deregisterResizeHandler(handler) {}

      /**
       * @param {string} varName
       * @param {?number|string} value
       */

    }, {
      key: "updateCssVariable",
      value: function updateCssVariable(varName, value) {}

      /** @return {!ClientRect} */

    }, {
      key: "computeBoundingRect",
      value: function computeBoundingRect() {}

      /** @return {{x: number, y: number}} */

    }, {
      key: "getWindowPageOffset",
      value: function getWindowPageOffset() {}
    }]);
    return MDCRippleAdapter;
  }();

  /**
   * @license
   * Copyright 2016 Google Inc. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  var cssClasses = {
    // Ripple is a special case where the "root" component is really a "mixin" of sorts,
    // given that it's an 'upgrade' to an existing component. That being said it is the root
    // CSS class that all other CSS classes derive from.
    ROOT: 'mdc-ripple-upgraded',
    UNBOUNDED: 'mdc-ripple-upgraded--unbounded',
    BG_FOCUSED: 'mdc-ripple-upgraded--background-focused',
    FG_ACTIVATION: 'mdc-ripple-upgraded--foreground-activation',
    FG_DEACTIVATION: 'mdc-ripple-upgraded--foreground-deactivation'
  };

  var strings = {
    VAR_LEFT: '--mdc-ripple-left',
    VAR_TOP: '--mdc-ripple-top',
    VAR_FG_SIZE: '--mdc-ripple-fg-size',
    VAR_FG_SCALE: '--mdc-ripple-fg-scale',
    VAR_FG_TRANSLATE_START: '--mdc-ripple-fg-translate-start',
    VAR_FG_TRANSLATE_END: '--mdc-ripple-fg-translate-end'
  };

  var numbers = {
    PADDING: 10,
    INITIAL_ORIGIN_SCALE: 0.6,
    DEACTIVATION_TIMEOUT_MS: 225, // Corresponds to $mdc-ripple-translate-duration (i.e. activation animation duration)
    FG_DEACTIVATION_MS: 150, // Corresponds to $mdc-ripple-fade-out-duration (i.e. deactivation animation duration)
    TAP_DELAY_MS: 300 // Delay between touch and simulated mouse events on touch devices
  };

  /**
   * @license
   * Copyright 2016 Google Inc. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
   * Stores result from supportsCssVariables to avoid redundant processing to detect CSS custom variable support.
   * @private {boolean|undefined}
   */
  var supportsCssVariables_ = void 0;

  /**
   * Stores result from applyPassive to avoid redundant processing to detect passive event listener support.
   * @private {boolean|undefined}
   */
  var supportsPassive_ = void 0;

  /**
   * @param {!Window} windowObj
   * @return {boolean}
   */
  function detectEdgePseudoVarBug(windowObj) {
    // Detect versions of Edge with buggy var() support
    // See: https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/11495448/
    var document = windowObj.document;
    var node = document.createElement('div');
    node.className = 'mdc-ripple-surface--test-edge-var-bug';
    document.body.appendChild(node);

    // The bug exists if ::before style ends up propagating to the parent element.
    // Additionally, getComputedStyle returns null in iframes with display: "none" in Firefox,
    // but Firefox is known to support CSS custom properties correctly.
    // See: https://bugzilla.mozilla.org/show_bug.cgi?id=548397
    var computedStyle = windowObj.getComputedStyle(node);
    var hasPseudoVarBug = computedStyle !== null && computedStyle.borderTopStyle === 'solid';
    node.remove();
    return hasPseudoVarBug;
  }

  /**
   * @param {!Window} windowObj
   * @param {boolean=} forceRefresh
   * @return {boolean|undefined}
   */

  function supportsCssVariables(windowObj) {
    var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var supportsCssVariables = supportsCssVariables_;
    if (typeof supportsCssVariables_ === 'boolean' && !forceRefresh) {
      return supportsCssVariables;
    }

    var supportsFunctionPresent = windowObj.CSS && typeof windowObj.CSS.supports === 'function';
    if (!supportsFunctionPresent) {
      return;
    }

    var explicitlySupportsCssVars = windowObj.CSS.supports('--css-vars', 'yes');
    // See: https://bugs.webkit.org/show_bug.cgi?id=154669
    // See: README section on Safari
    var weAreFeatureDetectingSafari10plus = windowObj.CSS.supports('(--css-vars: yes)') && windowObj.CSS.supports('color', '#00000000');

    if (explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus) {
      supportsCssVariables = !detectEdgePseudoVarBug(windowObj);
    } else {
      supportsCssVariables = false;
    }

    if (!forceRefresh) {
      supportsCssVariables_ = supportsCssVariables;
    }
    return supportsCssVariables;
  }

  //
  /**
   * Determine whether the current browser supports passive event listeners, and if so, use them.
   * @param {!Window=} globalObj
   * @param {boolean=} forceRefresh
   * @return {boolean|{passive: boolean}}
   */
  function applyPassive() {
    var globalObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
    var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    if (supportsPassive_ === undefined || forceRefresh) {
      var isSupported = false;
      try {
        globalObj.document.addEventListener('test', null, { get passive() {
            isSupported = true;
          } });
      } catch (e) {}

      supportsPassive_ = isSupported;
    }

    return supportsPassive_ ? { passive: true } : false;
  }

  /**
   * @param {!Object} HTMLElementPrototype
   * @return {!Array<string>}
   */
  function getMatchesProperty(HTMLElementPrototype) {
    return ['webkitMatchesSelector', 'msMatchesSelector', 'matches'].filter(function (p) {
      return p in HTMLElementPrototype;
    }).pop();
  }

  /**
   * @param {!Event} ev
   * @param {{x: number, y: number}} pageOffset
   * @param {!ClientRect} clientRect
   * @return {{x: number, y: number}}
   */
  function getNormalizedEventCoords(ev, pageOffset, clientRect) {
    var x = pageOffset.x,
        y = pageOffset.y;

    var documentX = x + clientRect.left;
    var documentY = y + clientRect.top;

    var normalizedX = void 0;
    var normalizedY = void 0;
    // Determine touch point relative to the ripple container.
    if (ev.type === 'touchstart') {
      normalizedX = ev.changedTouches[0].pageX - documentX;
      normalizedY = ev.changedTouches[0].pageY - documentY;
    } else {
      normalizedX = ev.pageX - documentX;
      normalizedY = ev.pageY - documentY;
    }

    return { x: normalizedX, y: normalizedY };
  }

  /**
   * @license
   * Copyright 2016 Google Inc. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  // Activation events registered on the root element of each instance for activation
  var ACTIVATION_EVENT_TYPES = ['touchstart', 'pointerdown', 'mousedown', 'keydown'];

  // Deactivation events registered on documentElement when a pointer-related down event occurs
  var POINTER_DEACTIVATION_EVENT_TYPES = ['touchend', 'pointerup', 'mouseup'];

  // Tracks activations that have occurred on the current frame, to avoid simultaneous nested activations
  /** @type {!Array<!EventTarget>} */
  var activatedTargets = [];

  /**
   * @extends {MDCFoundation<!MDCRippleAdapter>}
   */

  var MDCRippleFoundation = function (_MDCFoundation) {
    inherits(MDCRippleFoundation, _MDCFoundation);
    createClass(MDCRippleFoundation, null, [{
      key: 'cssClasses',
      get: function get$$1() {
        return cssClasses;
      }
    }, {
      key: 'strings',
      get: function get$$1() {
        return strings;
      }
    }, {
      key: 'numbers',
      get: function get$$1() {
        return numbers;
      }
    }, {
      key: 'defaultAdapter',
      get: function get$$1() {
        return {
          browserSupportsCssVars: function browserSupportsCssVars() /* boolean - cached */{},
          isUnbounded: function isUnbounded() /* boolean */{},
          isSurfaceActive: function isSurfaceActive() /* boolean */{},
          isSurfaceDisabled: function isSurfaceDisabled() /* boolean */{},
          addClass: function addClass() /* className: string */{},
          removeClass: function removeClass() /* className: string */{},
          containsEventTarget: function containsEventTarget() /* target: !EventTarget */{},
          registerInteractionHandler: function registerInteractionHandler() /* evtType: string, handler: EventListener */{},
          deregisterInteractionHandler: function deregisterInteractionHandler() /* evtType: string, handler: EventListener */{},
          registerDocumentInteractionHandler: function registerDocumentInteractionHandler() /* evtType: string, handler: EventListener */{},
          deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler() /* evtType: string, handler: EventListener */{},
          registerResizeHandler: function registerResizeHandler() /* handler: EventListener */{},
          deregisterResizeHandler: function deregisterResizeHandler() /* handler: EventListener */{},
          updateCssVariable: function updateCssVariable() /* varName: string, value: string */{},
          computeBoundingRect: function computeBoundingRect() /* ClientRect */{},
          getWindowPageOffset: function getWindowPageOffset() /* {x: number, y: number} */{}
        };
      }
    }]);

    function MDCRippleFoundation(adapter) {
      classCallCheck(this, MDCRippleFoundation);

      /** @private {number} */
      var _this = possibleConstructorReturn(this, (MDCRippleFoundation.__proto__ || Object.getPrototypeOf(MDCRippleFoundation)).call(this, _extends(MDCRippleFoundation.defaultAdapter, adapter)));

      _this.layoutFrame_ = 0;

      /** @private {!ClientRect} */
      _this.frame_ = /** @type {!ClientRect} */{ width: 0, height: 0 };

      /** @private {!ActivationStateType} */
      _this.activationState_ = _this.defaultActivationState_();

      /** @private {number} */
      _this.initialSize_ = 0;

      /** @private {number} */
      _this.maxRadius_ = 0;

      /** @private {function(!Event)} */
      _this.activateHandler_ = function (e) {
        return _this.activate_(e);
      };

      /** @private {function(!Event)} */
      _this.deactivateHandler_ = function (e) {
        return _this.deactivate_(e);
      };

      /** @private {function(?Event=)} */
      _this.focusHandler_ = function () {
        return requestAnimationFrame(function () {
          return _this.adapter_.addClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
        });
      };

      /** @private {function(?Event=)} */
      _this.blurHandler_ = function () {
        return requestAnimationFrame(function () {
          return _this.adapter_.removeClass(MDCRippleFoundation.cssClasses.BG_FOCUSED);
        });
      };

      /** @private {!Function} */
      _this.resizeHandler_ = function () {
        return _this.layout();
      };

      /** @private {{left: number, top:number}} */
      _this.unboundedCoords_ = {
        left: 0,
        top: 0
      };

      /** @private {number} */
      _this.fgScale_ = 0;

      /** @private {number} */
      _this.activationTimer_ = 0;

      /** @private {number} */
      _this.fgDeactivationRemovalTimer_ = 0;

      /** @private {boolean} */
      _this.activationAnimationHasEnded_ = false;

      /** @private {!Function} */
      _this.activationTimerCallback_ = function () {
        _this.activationAnimationHasEnded_ = true;
        _this.runDeactivationUXLogicIfReady_();
      };

      /** @private {?Event} */
      _this.previousActivationEvent_ = null;
      return _this;
    }

    /**
     * We compute this property so that we are not querying information about the client
     * until the point in time where the foundation requests it. This prevents scenarios where
     * client-side feature-detection may happen too early, such as when components are rendered on the server
     * and then initialized at mount time on the client.
     * @return {boolean}
     * @private
     */


    createClass(MDCRippleFoundation, [{
      key: 'isSupported_',
      value: function isSupported_() {
        return this.adapter_.browserSupportsCssVars();
      }

      /**
       * @return {!ActivationStateType}
       */

    }, {
      key: 'defaultActivationState_',
      value: function defaultActivationState_() {
        return {
          isActivated: false,
          hasDeactivationUXRun: false,
          wasActivatedByPointer: false,
          wasElementMadeActive: false,
          activationEvent: null,
          isProgrammatic: false
        };
      }
    }, {
      key: 'init',
      value: function init() {
        var _this2 = this;

        if (!this.isSupported_()) {
          return;
        }
        this.registerRootHandlers_();

        var _MDCRippleFoundation$ = MDCRippleFoundation.cssClasses,
            ROOT = _MDCRippleFoundation$.ROOT,
            UNBOUNDED = _MDCRippleFoundation$.UNBOUNDED;

        requestAnimationFrame(function () {
          _this2.adapter_.addClass(ROOT);
          if (_this2.adapter_.isUnbounded()) {
            _this2.adapter_.addClass(UNBOUNDED);
            // Unbounded ripples need layout logic applied immediately to set coordinates for both shade and ripple
            _this2.layoutInternal_();
          }
        });
      }
    }, {
      key: 'destroy',
      value: function destroy() {
        var _this3 = this;

        if (!this.isSupported_()) {
          return;
        }

        if (this.activationTimer_) {
          clearTimeout(this.activationTimer_);
          this.activationTimer_ = 0;
          var FG_ACTIVATION = MDCRippleFoundation.cssClasses.FG_ACTIVATION;

          this.adapter_.removeClass(FG_ACTIVATION);
        }

        this.deregisterRootHandlers_();
        this.deregisterDeactivationHandlers_();

        var _MDCRippleFoundation$2 = MDCRippleFoundation.cssClasses,
            ROOT = _MDCRippleFoundation$2.ROOT,
            UNBOUNDED = _MDCRippleFoundation$2.UNBOUNDED;

        requestAnimationFrame(function () {
          _this3.adapter_.removeClass(ROOT);
          _this3.adapter_.removeClass(UNBOUNDED);
          _this3.removeCssVars_();
        });
      }

      /** @private */

    }, {
      key: 'registerRootHandlers_',
      value: function registerRootHandlers_() {
        var _this4 = this;

        ACTIVATION_EVENT_TYPES.forEach(function (type) {
          _this4.adapter_.registerInteractionHandler(type, _this4.activateHandler_);
        });
        this.adapter_.registerInteractionHandler('focus', this.focusHandler_);
        this.adapter_.registerInteractionHandler('blur', this.blurHandler_);

        if (this.adapter_.isUnbounded()) {
          this.adapter_.registerResizeHandler(this.resizeHandler_);
        }
      }

      /**
       * @param {!Event} e
       * @private
       */

    }, {
      key: 'registerDeactivationHandlers_',
      value: function registerDeactivationHandlers_(e) {
        var _this5 = this;

        if (e.type === 'keydown') {
          this.adapter_.registerInteractionHandler('keyup', this.deactivateHandler_);
        } else {
          POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (type) {
            _this5.adapter_.registerDocumentInteractionHandler(type, _this5.deactivateHandler_);
          });
        }
      }

      /** @private */

    }, {
      key: 'deregisterRootHandlers_',
      value: function deregisterRootHandlers_() {
        var _this6 = this;

        ACTIVATION_EVENT_TYPES.forEach(function (type) {
          _this6.adapter_.deregisterInteractionHandler(type, _this6.activateHandler_);
        });
        this.adapter_.deregisterInteractionHandler('focus', this.focusHandler_);
        this.adapter_.deregisterInteractionHandler('blur', this.blurHandler_);

        if (this.adapter_.isUnbounded()) {
          this.adapter_.deregisterResizeHandler(this.resizeHandler_);
        }
      }

      /** @private */

    }, {
      key: 'deregisterDeactivationHandlers_',
      value: function deregisterDeactivationHandlers_() {
        var _this7 = this;

        this.adapter_.deregisterInteractionHandler('keyup', this.deactivateHandler_);
        POINTER_DEACTIVATION_EVENT_TYPES.forEach(function (type) {
          _this7.adapter_.deregisterDocumentInteractionHandler(type, _this7.deactivateHandler_);
        });
      }

      /** @private */

    }, {
      key: 'removeCssVars_',
      value: function removeCssVars_() {
        var _this8 = this;

        var strings$$1 = MDCRippleFoundation.strings;

        Object.keys(strings$$1).forEach(function (k) {
          if (k.indexOf('VAR_') === 0) {
            _this8.adapter_.updateCssVariable(strings$$1[k], null);
          }
        });
      }

      /**
       * @param {?Event} e
       * @private
       */

    }, {
      key: 'activate_',
      value: function activate_(e) {
        var _this9 = this;

        if (this.adapter_.isSurfaceDisabled()) {
          return;
        }

        var activationState = this.activationState_;
        if (activationState.isActivated) {
          return;
        }

        // Avoid reacting to follow-on events fired by touch device after an already-processed user interaction
        var previousActivationEvent = this.previousActivationEvent_;
        var isSameInteraction = previousActivationEvent && e && previousActivationEvent.type !== e.type;
        if (isSameInteraction) {
          return;
        }

        activationState.isActivated = true;
        activationState.isProgrammatic = e === null;
        activationState.activationEvent = e;
        activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : e.type === 'mousedown' || e.type === 'touchstart' || e.type === 'pointerdown';

        var hasActivatedChild = e && activatedTargets.length > 0 && activatedTargets.some(function (target) {
          return _this9.adapter_.containsEventTarget(target);
        });
        if (hasActivatedChild) {
          // Immediately reset activation state, while preserving logic that prevents touch follow-on events
          this.resetActivationState_();
          return;
        }

        if (e) {
          activatedTargets.push( /** @type {!EventTarget} */e.target);
          this.registerDeactivationHandlers_(e);
        }

        activationState.wasElementMadeActive = this.checkElementMadeActive_(e);
        if (activationState.wasElementMadeActive) {
          this.animateActivation_();
        }

        requestAnimationFrame(function () {
          // Reset array on next frame after the current event has had a chance to bubble to prevent ancestor ripples
          activatedTargets = [];

          if (!activationState.wasElementMadeActive && (e.key === ' ' || e.keyCode === 32)) {
            // If space was pressed, try again within an rAF call to detect :active, because different UAs report
            // active states inconsistently when they're called within event handling code:
            // - https://bugs.chromium.org/p/chromium/issues/detail?id=635971
            // - https://bugzilla.mozilla.org/show_bug.cgi?id=1293741
            // We try first outside rAF to support Edge, which does not exhibit this problem, but will crash if a CSS
            // variable is set within a rAF callback for a submit button interaction (#2241).
            activationState.wasElementMadeActive = _this9.checkElementMadeActive_(e);
            if (activationState.wasElementMadeActive) {
              _this9.animateActivation_();
            }
          }

          if (!activationState.wasElementMadeActive) {
            // Reset activation state immediately if element was not made active.
            _this9.activationState_ = _this9.defaultActivationState_();
          }
        });
      }

      /**
       * @param {?Event} e
       * @private
       */

    }, {
      key: 'checkElementMadeActive_',
      value: function checkElementMadeActive_(e) {
        return e && e.type === 'keydown' ? this.adapter_.isSurfaceActive() : true;
      }

      /**
       * @param {?Event=} event Optional event containing position information.
       */

    }, {
      key: 'activate',
      value: function activate() {
        var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

        this.activate_(event);
      }

      /** @private */

    }, {
      key: 'animateActivation_',
      value: function animateActivation_() {
        var _this10 = this;

        var _MDCRippleFoundation$3 = MDCRippleFoundation.strings,
            VAR_FG_TRANSLATE_START = _MDCRippleFoundation$3.VAR_FG_TRANSLATE_START,
            VAR_FG_TRANSLATE_END = _MDCRippleFoundation$3.VAR_FG_TRANSLATE_END;
        var _MDCRippleFoundation$4 = MDCRippleFoundation.cssClasses,
            FG_DEACTIVATION = _MDCRippleFoundation$4.FG_DEACTIVATION,
            FG_ACTIVATION = _MDCRippleFoundation$4.FG_ACTIVATION;
        var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation.numbers.DEACTIVATION_TIMEOUT_MS;


        this.layoutInternal_();

        var translateStart = '';
        var translateEnd = '';

        if (!this.adapter_.isUnbounded()) {
          var _getFgTranslationCoor = this.getFgTranslationCoordinates_(),
              startPoint = _getFgTranslationCoor.startPoint,
              endPoint = _getFgTranslationCoor.endPoint;

          translateStart = startPoint.x + 'px, ' + startPoint.y + 'px';
          translateEnd = endPoint.x + 'px, ' + endPoint.y + 'px';
        }

        this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
        this.adapter_.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
        // Cancel any ongoing activation/deactivation animations
        clearTimeout(this.activationTimer_);
        clearTimeout(this.fgDeactivationRemovalTimer_);
        this.rmBoundedActivationClasses_();
        this.adapter_.removeClass(FG_DEACTIVATION);

        // Force layout in order to re-trigger the animation.
        this.adapter_.computeBoundingRect();
        this.adapter_.addClass(FG_ACTIVATION);
        this.activationTimer_ = setTimeout(function () {
          return _this10.activationTimerCallback_();
        }, DEACTIVATION_TIMEOUT_MS);
      }

      /**
       * @private
       * @return {{startPoint: PointType, endPoint: PointType}}
       */

    }, {
      key: 'getFgTranslationCoordinates_',
      value: function getFgTranslationCoordinates_() {
        var _activationState_ = this.activationState_,
            activationEvent = _activationState_.activationEvent,
            wasActivatedByPointer = _activationState_.wasActivatedByPointer;


        var startPoint = void 0;
        if (wasActivatedByPointer) {
          startPoint = getNormalizedEventCoords(
          /** @type {!Event} */activationEvent, this.adapter_.getWindowPageOffset(), this.adapter_.computeBoundingRect());
        } else {
          startPoint = {
            x: this.frame_.width / 2,
            y: this.frame_.height / 2
          };
        }
        // Center the element around the start point.
        startPoint = {
          x: startPoint.x - this.initialSize_ / 2,
          y: startPoint.y - this.initialSize_ / 2
        };

        var endPoint = {
          x: this.frame_.width / 2 - this.initialSize_ / 2,
          y: this.frame_.height / 2 - this.initialSize_ / 2
        };

        return { startPoint: startPoint, endPoint: endPoint };
      }

      /** @private */

    }, {
      key: 'runDeactivationUXLogicIfReady_',
      value: function runDeactivationUXLogicIfReady_() {
        var _this11 = this;

        // This method is called both when a pointing device is released, and when the activation animation ends.
        // The deactivation animation should only run after both of those occur.
        var FG_DEACTIVATION = MDCRippleFoundation.cssClasses.FG_DEACTIVATION;
        var _activationState_2 = this.activationState_,
            hasDeactivationUXRun = _activationState_2.hasDeactivationUXRun,
            isActivated = _activationState_2.isActivated;

        var activationHasEnded = hasDeactivationUXRun || !isActivated;

        if (activationHasEnded && this.activationAnimationHasEnded_) {
          this.rmBoundedActivationClasses_();
          this.adapter_.addClass(FG_DEACTIVATION);
          this.fgDeactivationRemovalTimer_ = setTimeout(function () {
            _this11.adapter_.removeClass(FG_DEACTIVATION);
          }, numbers.FG_DEACTIVATION_MS);
        }
      }

      /** @private */

    }, {
      key: 'rmBoundedActivationClasses_',
      value: function rmBoundedActivationClasses_() {
        var FG_ACTIVATION = MDCRippleFoundation.cssClasses.FG_ACTIVATION;

        this.adapter_.removeClass(FG_ACTIVATION);
        this.activationAnimationHasEnded_ = false;
        this.adapter_.computeBoundingRect();
      }
    }, {
      key: 'resetActivationState_',
      value: function resetActivationState_() {
        var _this12 = this;

        this.previousActivationEvent_ = this.activationState_.activationEvent;
        this.activationState_ = this.defaultActivationState_();
        // Touch devices may fire additional events for the same interaction within a short time.
        // Store the previous event until it's safe to assume that subsequent events are for new interactions.
        setTimeout(function () {
          return _this12.previousActivationEvent_ = null;
        }, MDCRippleFoundation.numbers.TAP_DELAY_MS);
      }

      /**
       * @param {?Event} e
       * @private
       */

    }, {
      key: 'deactivate_',
      value: function deactivate_(e) {
        var _this13 = this;

        var activationState = this.activationState_;
        // This can happen in scenarios such as when you have a keyup event that blurs the element.
        if (!activationState.isActivated) {
          return;
        }

        var state = /** @type {!ActivationStateType} */_extends({}, activationState);

        if (activationState.isProgrammatic) {
          var evtObject = null;
          requestAnimationFrame(function () {
            return _this13.animateDeactivation_(evtObject, state);
          });
          this.resetActivationState_();
        } else {
          this.deregisterDeactivationHandlers_();
          requestAnimationFrame(function () {
            _this13.activationState_.hasDeactivationUXRun = true;
            _this13.animateDeactivation_(e, state);
            _this13.resetActivationState_();
          });
        }
      }

      /**
       * @param {?Event=} event Optional event containing position information.
       */

    }, {
      key: 'deactivate',
      value: function deactivate() {
        var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

        this.deactivate_(event);
      }

      /**
       * @param {Event} e
       * @param {!ActivationStateType} options
       * @private
       */

    }, {
      key: 'animateDeactivation_',
      value: function animateDeactivation_(e, _ref) {
        var wasActivatedByPointer = _ref.wasActivatedByPointer,
            wasElementMadeActive = _ref.wasElementMadeActive;

        if (wasActivatedByPointer || wasElementMadeActive) {
          this.runDeactivationUXLogicIfReady_();
        }
      }
    }, {
      key: 'layout',
      value: function layout() {
        var _this14 = this;

        if (this.layoutFrame_) {
          cancelAnimationFrame(this.layoutFrame_);
        }
        this.layoutFrame_ = requestAnimationFrame(function () {
          _this14.layoutInternal_();
          _this14.layoutFrame_ = 0;
        });
      }

      /** @private */

    }, {
      key: 'layoutInternal_',
      value: function layoutInternal_() {
        var _this15 = this;

        this.frame_ = this.adapter_.computeBoundingRect();
        var maxDim = Math.max(this.frame_.height, this.frame_.width);

        // Surface diameter is treated differently for unbounded vs. bounded ripples.
        // Unbounded ripple diameter is calculated smaller since the surface is expected to already be padded appropriately
        // to extend the hitbox, and the ripple is expected to meet the edges of the padded hitbox (which is typically
        // square). Bounded ripples, on the other hand, are fully expected to expand beyond the surface's longest diameter
        // (calculated based on the diagonal plus a constant padding), and are clipped at the surface's border via
        // `overflow: hidden`.
        var getBoundedRadius = function getBoundedRadius() {
          var hypotenuse = Math.sqrt(Math.pow(_this15.frame_.width, 2) + Math.pow(_this15.frame_.height, 2));
          return hypotenuse + MDCRippleFoundation.numbers.PADDING;
        };

        this.maxRadius_ = this.adapter_.isUnbounded() ? maxDim : getBoundedRadius();

        // Ripple is sized as a fraction of the largest dimension of the surface, then scales up using a CSS scale transform
        this.initialSize_ = maxDim * MDCRippleFoundation.numbers.INITIAL_ORIGIN_SCALE;
        this.fgScale_ = this.maxRadius_ / this.initialSize_;

        this.updateLayoutCssVars_();
      }

      /** @private */

    }, {
      key: 'updateLayoutCssVars_',
      value: function updateLayoutCssVars_() {
        var _MDCRippleFoundation$5 = MDCRippleFoundation.strings,
            VAR_FG_SIZE = _MDCRippleFoundation$5.VAR_FG_SIZE,
            VAR_LEFT = _MDCRippleFoundation$5.VAR_LEFT,
            VAR_TOP = _MDCRippleFoundation$5.VAR_TOP,
            VAR_FG_SCALE = _MDCRippleFoundation$5.VAR_FG_SCALE;


        this.adapter_.updateCssVariable(VAR_FG_SIZE, this.initialSize_ + 'px');
        this.adapter_.updateCssVariable(VAR_FG_SCALE, this.fgScale_);

        if (this.adapter_.isUnbounded()) {
          this.unboundedCoords_ = {
            left: Math.round(this.frame_.width / 2 - this.initialSize_ / 2),
            top: Math.round(this.frame_.height / 2 - this.initialSize_ / 2)
          };

          this.adapter_.updateCssVariable(VAR_LEFT, this.unboundedCoords_.left + 'px');
          this.adapter_.updateCssVariable(VAR_TOP, this.unboundedCoords_.top + 'px');
        }
      }

      /** @param {boolean} unbounded */

    }, {
      key: 'setUnbounded',
      value: function setUnbounded(unbounded) {
        var UNBOUNDED = MDCRippleFoundation.cssClasses.UNBOUNDED;

        if (unbounded) {
          this.adapter_.addClass(UNBOUNDED);
        } else {
          this.adapter_.removeClass(UNBOUNDED);
        }
      }
    }]);
    return MDCRippleFoundation;
  }(MDCFoundation);

  /**
   * @license
   * Copyright 2016 Google Inc. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
   * @extends MDCComponent<!MDCRippleFoundation>
   */

  var MDCRipple = function (_MDCComponent) {
    inherits(MDCRipple, _MDCComponent);

    /** @param {...?} args */
    function MDCRipple() {
      var _ref;

      classCallCheck(this, MDCRipple);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      /** @type {boolean} */
      var _this = possibleConstructorReturn(this, (_ref = MDCRipple.__proto__ || Object.getPrototypeOf(MDCRipple)).call.apply(_ref, [this].concat(args)));

      _this.disabled = false;

      /** @private {boolean} */
      _this.unbounded_;
      return _this;
    }

    /**
     * @param {!Element} root
     * @param {{isUnbounded: (boolean|undefined)}=} options
     * @return {!MDCRipple}
     */


    createClass(MDCRipple, [{
      key: 'setUnbounded_',


      /**
       * Closure Compiler throws an access control error when directly accessing a
       * protected or private property inside a getter/setter, like unbounded above.
       * By accessing the protected property inside a method, we solve that problem.
       * That's why this function exists.
       * @private
       */
      value: function setUnbounded_() {
        this.foundation_.setUnbounded(this.unbounded_);
      }
    }, {
      key: 'activate',
      value: function activate() {
        this.foundation_.activate();
      }
    }, {
      key: 'deactivate',
      value: function deactivate() {
        this.foundation_.deactivate();
      }
    }, {
      key: 'layout',
      value: function layout() {
        this.foundation_.layout();
      }

      /** @return {!MDCRippleFoundation} */

    }, {
      key: 'getDefaultFoundation',
      value: function getDefaultFoundation() {
        return new MDCRippleFoundation(MDCRipple.createAdapter(this));
      }
    }, {
      key: 'initialSyncWithDOM',
      value: function initialSyncWithDOM() {
        this.unbounded = 'mdcRippleIsUnbounded' in this.root_.dataset;
      }
    }, {
      key: 'unbounded',


      /** @return {boolean} */
      get: function get$$1() {
        return this.unbounded_;
      }

      /** @param {boolean} unbounded */
      ,
      set: function set$$1(unbounded) {
        this.unbounded_ = Boolean(unbounded);
        this.setUnbounded_();
      }
    }], [{
      key: 'attachTo',
      value: function attachTo(root) {
        var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            _ref2$isUnbounded = _ref2.isUnbounded,
            isUnbounded = _ref2$isUnbounded === undefined ? undefined : _ref2$isUnbounded;

        var ripple = new MDCRipple(root);
        // Only override unbounded behavior if option is explicitly specified
        if (isUnbounded !== undefined) {
          ripple.unbounded = /** @type {boolean} */isUnbounded;
        }
        return ripple;
      }

      /**
       * @param {!RippleCapableSurface} instance
       * @return {!MDCRippleAdapter}
       */

    }, {
      key: 'createAdapter',
      value: function createAdapter(instance) {
        var MATCHES = getMatchesProperty(HTMLElement.prototype);

        return {
          browserSupportsCssVars: function browserSupportsCssVars() {
            return supportsCssVariables(window);
          },
          isUnbounded: function isUnbounded() {
            return instance.unbounded;
          },
          isSurfaceActive: function isSurfaceActive() {
            return instance.root_[MATCHES](':active');
          },
          isSurfaceDisabled: function isSurfaceDisabled() {
            return instance.disabled;
          },
          addClass: function addClass(className) {
            return instance.root_.classList.add(className);
          },
          removeClass: function removeClass(className) {
            return instance.root_.classList.remove(className);
          },
          containsEventTarget: function containsEventTarget(target) {
            return instance.root_.contains(target);
          },
          registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
            return instance.root_.addEventListener(evtType, handler, applyPassive());
          },
          deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
            return instance.root_.removeEventListener(evtType, handler, applyPassive());
          },
          registerDocumentInteractionHandler: function registerDocumentInteractionHandler(evtType, handler) {
            return document.documentElement.addEventListener(evtType, handler, applyPassive());
          },
          deregisterDocumentInteractionHandler: function deregisterDocumentInteractionHandler(evtType, handler) {
            return document.documentElement.removeEventListener(evtType, handler, applyPassive());
          },
          registerResizeHandler: function registerResizeHandler(handler) {
            return window.addEventListener('resize', handler);
          },
          deregisterResizeHandler: function deregisterResizeHandler(handler) {
            return window.removeEventListener('resize', handler);
          },
          updateCssVariable: function updateCssVariable(varName, value) {
            return instance.root_.style.setProperty(varName, value);
          },
          computeBoundingRect: function computeBoundingRect() {
            return instance.root_.getBoundingClientRect();
          },
          getWindowPageOffset: function getWindowPageOffset() {
            return { x: window.pageXOffset, y: window.pageYOffset };
          }
        };
      }
    }]);
    return MDCRipple;
  }(MDCComponent);

  /**
   * See Material Design spec for more details on when to use ripples.
   * https://material.io/guidelines/motion/choreography.html#choreography-creation
   * @record
   */


  var RippleCapableSurface = function RippleCapableSurface() {
    classCallCheck(this, RippleCapableSurface);
  };

  /** @protected {!Element} */


  RippleCapableSurface.prototype.root_;

  /**
   * Whether or not the ripple bleeds out of the bounds of the element.
   * @type {boolean|undefined}
   */
  RippleCapableSurface.prototype.unbounded;

  /**
   * Whether or not the ripple is attached to a disabled component.
   * @type {boolean|undefined}
   */
  RippleCapableSurface.prototype.disabled;

  /**
  @license
  Copyright 2018 Google Inc. All Rights Reserved.

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
  */

  var afterRenderPromise = void 0;
  function afterNextRender() {
    if (!afterRenderPromise) {
      afterRenderPromise = new Promise(function (resolve) {
        requestAnimationFrame(function () {
          return setTimeout(function () {
            afterRenderPromise = null;
            resolve();
          });
        });
      });
    }
    return afterRenderPromise;
  }

  var _templateObject$1 = taggedTemplateLiteral(['\n      ', '\n      <div class$="mdc-ripple-surface ', '" data-mdc-ripple-is-unbounded?="', '"></div>'], ['\n      ', '\n      <div class$="mdc-ripple-surface ', '" data-mdc-ripple-is-unbounded?="', '"></div>']);

  // TODO(sorvell): These are MDC utils. Would be nice to use em, but they don't appear to be easily
  // exposed via the public builds.
  var supportsPassive_$1 = void 0;
  function applyPassive$1() {
    var globalObj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
    var forceRefresh = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    if (supportsPassive_$1 === undefined || forceRefresh) {
      var isSupported = false;
      try {
        globalObj.document.addEventListener('test', null, { get passive() {
            isSupported = true;
          } });
      } catch (e) {}

      supportsPassive_$1 = isSupported;
    }

    return supportsPassive_$1 ? { passive: true } : false;
  }

  function getMatchesProperty$1(HTMLElementPrototype) {
    return ['webkitMatchesSelector', 'msMatchesSelector', 'matches'].filter(function (p) {
      return p in HTMLElementPrototype;
    }).pop();
  }

  var MATCHES = getMatchesProperty$1(HTMLElement.prototype);

  var MDCWCRipple = function (_MDCWebComponentMixin) {
    inherits(MDCWCRipple, _MDCWebComponentMixin);

    function MDCWCRipple() {
      classCallCheck(this, MDCWCRipple);
      return possibleConstructorReturn(this, (MDCWCRipple.__proto__ || Object.getPrototypeOf(MDCWCRipple)).apply(this, arguments));
    }

    return MDCWCRipple;
  }(MDCWebComponentMixin(MDCRipple));

  var MDCWCRippleContainer = function (_MDCWCRipple) {
    inherits(MDCWCRippleContainer, _MDCWCRipple);

    function MDCWCRippleContainer() {
      classCallCheck(this, MDCWCRippleContainer);
      return possibleConstructorReturn(this, (MDCWCRippleContainer.__proto__ || Object.getPrototypeOf(MDCWCRippleContainer)).apply(this, arguments));
    }

    createClass(MDCWCRippleContainer, [{
      key: 'createAdapter',
      value: function createAdapter() {
        var container = this.host.parentNode || this.host;
        return {
          isSurfaceActive: function isSurfaceActive() {
            return container[MATCHES](':active');
          },
          isSurfaceDisabled: function isSurfaceDisabled() {
            return container.disabled;
          },
          containsEventTarget: function containsEventTarget(target) {
            return container.contains(target);
          },
          registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
            return container.addEventListener(evtType, handler, applyPassive$1());
          },
          deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
            return container.removeEventListener(evtType, handler, applyPassive$1());
          },
          computeBoundingRect: function computeBoundingRect() {
            return container.getBoundingClientRect();
          }
        };
      }
    }]);
    return MDCWCRippleContainer;
  }(MDCWCRipple);

  var Ripple = function (_LitElement) {
    inherits(Ripple, _LitElement);
    createClass(Ripple, null, [{
      key: 'properties',
      get: function get$$1() {
        return {
          primary: Boolean,
          accent: Boolean,
          unbounded: Boolean
        };
      }
    }]);

    function Ripple() {
      classCallCheck(this, Ripple);

      var _this3 = possibleConstructorReturn(this, (Ripple.__proto__ || Object.getPrototypeOf(Ripple)).call(this));

      _this3.primary = false;
      _this3.accent = false;
      _this3.unbounded = false;
      return _this3;
    }

    createClass(Ripple, [{
      key: '_renderStyle',
      value: function _renderStyle() {
        return style;
      }

      // TODO(sorvell) #css: sizing.

    }, {
      key: '_render',
      value: function _render(_ref) {
        var primary = _ref.primary,
            accent = _ref.accent,
            unbounded = _ref.unbounded;

        var classes = classString({
          'mdc-ripple-surface--primary': primary,
          'mdc-ripple-surface--accent': accent
        });
        return html$1(_templateObject$1, this._renderStyle(), classes, unbounded);
      }
    }, {
      key: 'ready',
      value: async function ready() {
        get(Ripple.prototype.__proto__ || Object.getPrototypeOf(Ripple.prototype), 'ready', this).call(this);
        await afterNextRender();
        var surface = this._root.querySelector('.mdc-ripple-surface');
        var container = this.parentNode || this;
        // TODO(sorvell) #css: this might be bad since the container might be positioned.
        container.style.position = 'relative';
        this._ripple = new MDCWCRippleContainer(surface);
      }
    }]);
    return Ripple;
  }(LitElement);

  customElements.define('mwc-ripple', Ripple);

  var _templateObject$2 = taggedTemplateLiteral(['<style>:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:\'liga\';-webkit-font-smoothing:antialiased}\n</style>'], ['<style>:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:\'liga\';-webkit-font-smoothing:antialiased}\n</style>']);

  var style$1 = html$1(_templateObject$2);

  /**
  @license
  Copyright 2018 Google Inc. All Rights Reserved.

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
  */

  // load material icons font
  var fontEl = document.createElement('link');
  fontEl.rel = 'stylesheet';
  fontEl.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';
  document.head.appendChild(fontEl);

  var _templateObject$3 = taggedTemplateLiteral(['', '<slot></slot>'], ['', '<slot></slot>']);

  var Icon = function (_LitElement) {
    inherits(Icon, _LitElement);

    function Icon() {
      classCallCheck(this, Icon);
      return possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
    }

    createClass(Icon, [{
      key: '_renderStyle',
      value: function _renderStyle() {
        return style$1;
      }
    }, {
      key: '_render',
      value: function _render() {
        return html$1(_templateObject$3, this._renderStyle());
      }
    }]);
    return Icon;
  }(LitElement);

  customElements.define('mwc-icon', Icon);

  var _templateObject$4 = taggedTemplateLiteral(['<style>.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:\'liga\';-webkit-font-smoothing:antialiased}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var: 1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug::before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-button{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:2.25rem;font-weight:500;letter-spacing:.08929em;text-decoration:none;text-transform:uppercase;--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:transparent;will-change:transform, opacity;padding:0 8px 0 8px;display:inline-flex;position:relative;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;height:36px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:hidden;vertical-align:middle;border-radius:2px}.mdc-button::before,.mdc-button::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-button::before{transition:opacity 15ms linear;z-index:1}.mdc-button.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-button.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-button.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-button.mdc-ripple-upgraded--foreground-activation::after{animation:225ms mdc-ripple-fg-radius-in forwards,75ms mdc-ripple-fg-opacity-in forwards}.mdc-button.mdc-ripple-upgraded--foreground-deactivation::after{animation:150ms mdc-ripple-fg-opacity-out;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-button::before,.mdc-button::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-button.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{background-color:transparent;color:rgba(0,0,0,0.37);cursor:default;pointer-events:none}.mdc-button:not(:disabled){background-color:transparent}.mdc-button:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button::before,.mdc-button::after{background-color:#6200ee}@supports not (-ms-ime-align: auto){.mdc-button::before,.mdc-button::after{background-color:var(--mdc-theme-primary, #6200ee)}}.mdc-button:hover::before{opacity:.04}.mdc-button:not(.mdc-ripple-upgraded):focus::before,.mdc-button.mdc-ripple-upgraded--background-focused::before{transition-duration:75ms;opacity:.12}.mdc-button:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-button:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.16}.mdc-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: .16}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;width:18px;height:18px;font-size:18px;vertical-align:top}[dir="rtl"] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir="rtl"]{margin-left:8px;margin-right:0}.mdc-button svg.mdc-button__icon{fill:currentColor}.mdc-button--raised .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon,.mdc-button--outlined .mdc-button__icon{margin-left:-4px;margin-right:8px}[dir="rtl"] .mdc-button--raised .mdc-button__icon,.mdc-button--raised .mdc-button__icon[dir="rtl"],[dir="rtl"] .mdc-button--unelevated .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon[dir="rtl"],[dir="rtl"] .mdc-button--outlined .mdc-button__icon,.mdc-button--outlined .mdc-button__icon[dir="rtl"]{margin-left:8px;margin-right:-4px}.mdc-button--raised,.mdc-button--unelevated{padding:0 16px 0 16px}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:rgba(0,0,0,0.12);color:rgba(0,0,0,0.37)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:#6200ee}@supports not (-ms-ime-align: auto){.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:var(--mdc-theme-primary, #6200ee)}}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-button--raised::before,.mdc-button--raised::after,.mdc-button--unelevated::before,.mdc-button--unelevated::after{background-color:#fff}@supports not (-ms-ime-align: auto){.mdc-button--raised::before,.mdc-button--raised::after,.mdc-button--unelevated::before,.mdc-button--unelevated::after{background-color:var(--mdc-theme-on-primary, #fff)}}.mdc-button--raised:hover::before,.mdc-button--unelevated:hover::before{opacity:.08}.mdc-button--raised:not(.mdc-ripple-upgraded):focus::before,.mdc-button--raised.mdc-ripple-upgraded--background-focused::before,.mdc-button--unelevated:not(.mdc-ripple-upgraded):focus::before,.mdc-button--unelevated.mdc-ripple-upgraded--background-focused::before{transition-duration:75ms;opacity:.24}.mdc-button--raised:not(.mdc-ripple-upgraded)::after,.mdc-button--unelevated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-button--raised:not(.mdc-ripple-upgraded):active::after,.mdc-button--unelevated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.32}.mdc-button--raised.mdc-ripple-upgraded,.mdc-button--unelevated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: .32}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12);transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--raised:hover,.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0,0,0,0.2),0px 0px 0px 0px rgba(0,0,0,0.14),0px 0px 0px 0px rgba(0,0,0,0.12)}.mdc-button--outlined{border-style:solid;padding:0 14px 0 14px;border-width:2px;line-height:32px}.mdc-button--outlined:disabled{border-color:rgba(0,0,0,0.37)}.mdc-button--outlined.mdc-button--dense{line-height:27px}.mdc-button--outlined:not(:disabled){border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-button--dense{height:32px;font-size:.8125rem;line-height:32px}:host{display:inline-flex;outline:none}.mdc-button{flex:1}\n</style>'], ['<style>.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:\'liga\';-webkit-font-smoothing:antialiased}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var: 1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug::before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-button{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:2.25rem;font-weight:500;letter-spacing:.08929em;text-decoration:none;text-transform:uppercase;--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:transparent;will-change:transform, opacity;padding:0 8px 0 8px;display:inline-flex;position:relative;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;height:36px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:hidden;vertical-align:middle;border-radius:2px}.mdc-button::before,.mdc-button::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-button::before{transition:opacity 15ms linear;z-index:1}.mdc-button.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-button.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-button.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-button.mdc-ripple-upgraded--foreground-activation::after{animation:225ms mdc-ripple-fg-radius-in forwards,75ms mdc-ripple-fg-opacity-in forwards}.mdc-button.mdc-ripple-upgraded--foreground-deactivation::after{animation:150ms mdc-ripple-fg-opacity-out;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-button::before,.mdc-button::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-button.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{background-color:transparent;color:rgba(0,0,0,0.37);cursor:default;pointer-events:none}.mdc-button:not(:disabled){background-color:transparent}.mdc-button:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button::before,.mdc-button::after{background-color:#6200ee}@supports not (-ms-ime-align: auto){.mdc-button::before,.mdc-button::after{background-color:var(--mdc-theme-primary, #6200ee)}}.mdc-button:hover::before{opacity:.04}.mdc-button:not(.mdc-ripple-upgraded):focus::before,.mdc-button.mdc-ripple-upgraded--background-focused::before{transition-duration:75ms;opacity:.12}.mdc-button:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-button:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.16}.mdc-button.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: .16}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;width:18px;height:18px;font-size:18px;vertical-align:top}[dir="rtl"] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir="rtl"]{margin-left:8px;margin-right:0}.mdc-button svg.mdc-button__icon{fill:currentColor}.mdc-button--raised .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon,.mdc-button--outlined .mdc-button__icon{margin-left:-4px;margin-right:8px}[dir="rtl"] .mdc-button--raised .mdc-button__icon,.mdc-button--raised .mdc-button__icon[dir="rtl"],[dir="rtl"] .mdc-button--unelevated .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon[dir="rtl"],[dir="rtl"] .mdc-button--outlined .mdc-button__icon,.mdc-button--outlined .mdc-button__icon[dir="rtl"]{margin-left:8px;margin-right:-4px}.mdc-button--raised,.mdc-button--unelevated{padding:0 16px 0 16px}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:rgba(0,0,0,0.12);color:rgba(0,0,0,0.37)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:#6200ee}@supports not (-ms-ime-align: auto){.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:var(--mdc-theme-primary, #6200ee)}}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-button--raised::before,.mdc-button--raised::after,.mdc-button--unelevated::before,.mdc-button--unelevated::after{background-color:#fff}@supports not (-ms-ime-align: auto){.mdc-button--raised::before,.mdc-button--raised::after,.mdc-button--unelevated::before,.mdc-button--unelevated::after{background-color:var(--mdc-theme-on-primary, #fff)}}.mdc-button--raised:hover::before,.mdc-button--unelevated:hover::before{opacity:.08}.mdc-button--raised:not(.mdc-ripple-upgraded):focus::before,.mdc-button--raised.mdc-ripple-upgraded--background-focused::before,.mdc-button--unelevated:not(.mdc-ripple-upgraded):focus::before,.mdc-button--unelevated.mdc-ripple-upgraded--background-focused::before{transition-duration:75ms;opacity:.24}.mdc-button--raised:not(.mdc-ripple-upgraded)::after,.mdc-button--unelevated:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-button--raised:not(.mdc-ripple-upgraded):active::after,.mdc-button--unelevated:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.32}.mdc-button--raised.mdc-ripple-upgraded,.mdc-button--unelevated.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: .32}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12);transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--raised:hover,.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0,0,0,0.2),0px 0px 0px 0px rgba(0,0,0,0.14),0px 0px 0px 0px rgba(0,0,0,0.12)}.mdc-button--outlined{border-style:solid;padding:0 14px 0 14px;border-width:2px;line-height:32px}.mdc-button--outlined:disabled{border-color:rgba(0,0,0,0.37)}.mdc-button--outlined.mdc-button--dense{line-height:27px}.mdc-button--outlined:not(:disabled){border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-button--dense{height:32px;font-size:.8125rem;line-height:32px}:host{display:inline-flex;outline:none}.mdc-button{flex:1}\n</style>']);

  var style$2 = html$1(_templateObject$4);

  var _templateObject$5 = taggedTemplateLiteral(['\n      ', '\n      <button class$="mdc-button ', '" disabled?="', '">\n        ', '\n        ', '\n        <slot></slot>\n      </button>'], ['\n      ', '\n      <button class$="mdc-button ', '" disabled?="', '">\n        ', '\n        ', '\n        <slot></slot>\n      </button>']),
      _templateObject2 = taggedTemplateLiteral(['<span class="material-icons mdc-button__icon">', '</span>'], ['<span class="material-icons mdc-button__icon">', '</span>']);

  var Button = function (_LitElement) {
    inherits(Button, _LitElement);
    createClass(Button, null, [{
      key: 'properties',
      get: function get$$1() {
        return {
          raised: Boolean,
          unelevated: Boolean,
          outlined: Boolean,
          dense: Boolean,
          disabled: Boolean,
          icon: String,
          label: String
        };
      }
    }]);

    function Button() {
      classCallCheck(this, Button);

      var _this = possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this));

      _this.raised = false;
      _this.unelevated = false;
      _this.outlined = false;
      _this.dense = false;
      _this.disabled = false;
      _this.icon = '';
      _this.label = '';
      return _this;
    }

    createClass(Button, [{
      key: '_createRoot',
      value: function _createRoot() {
        return this.attachShadow({ mode: 'open', delegatesFocus: true });
      }
    }, {
      key: 'ready',
      value: async function ready() {
        get(Button.prototype.__proto__ || Object.getPrototypeOf(Button.prototype), 'ready', this).call(this);
        await afterNextRender();
        this._ripple = new MDCWCRipple(this._root.querySelector('.mdc-button'));
      }
    }, {
      key: '_renderStyle',
      value: function _renderStyle() {
        return style$2;
      }
    }, {
      key: '_render',
      value: function _render(_ref) {
        var raised = _ref.raised,
            unelevated = _ref.unelevated,
            outlined = _ref.outlined,
            dense = _ref.dense,
            disabled = _ref.disabled,
            icon = _ref.icon,
            label = _ref.label;

        var hostClasses = classString({
          'mdc-button--raised': raised,
          'mdc-button--unelevated': unelevated,
          'mdc-button--outlined': outlined,
          'mdc-button--dense': dense
        });
        return html$1(_templateObject$5, this._renderStyle(), hostClasses, disabled, icon ? html$1(_templateObject2, icon) : '', label || '');
      }
    }]);
    return Button;
  }(LitElement);

  customElements.define('mwc-button', Button);

  var _templateObject$6 = taggedTemplateLiteral(['<style>.mdc-card{background-color:#fff;background-color:var(--mdc-theme-surface, #fff);border-radius:2px;box-shadow:0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12);display:flex;flex-direction:column;box-sizing:border-box}.mdc-card--outlined{box-shadow:0px 0px 0px 0px rgba(0,0,0,0.2),0px 0px 0px 0px rgba(0,0,0,0.14),0px 0px 0px 0px rgba(0,0,0,0.12);border:1px solid #e0e0e0}.mdc-card__media{position:relative;box-sizing:border-box;background-repeat:no-repeat;background-position:center;background-size:cover}.mdc-card__media::before{display:block;content:""}.mdc-card__media:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__media:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mdc-card__media--square::before{margin-top:100%}.mdc-card__media--16-9::before{margin-top:56.25%}.mdc-card__media-content{position:absolute;top:0;right:0;bottom:0;left:0;box-sizing:border-box}.mdc-card__primary-action{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:transparent;will-change:transform, opacity;display:flex;flex-direction:column;box-sizing:border-box;position:relative;outline:none;color:inherit;text-decoration:none;cursor:pointer;overflow:hidden}.mdc-card__primary-action::before,.mdc-card__primary-action::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-card__primary-action::before{transition:opacity 15ms linear;z-index:1}.mdc-card__primary-action.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-card__primary-action.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-card__primary-action.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-card__primary-action.mdc-ripple-upgraded--foreground-activation::after{animation:225ms mdc-ripple-fg-radius-in forwards,75ms mdc-ripple-fg-opacity-in forwards}.mdc-card__primary-action.mdc-ripple-upgraded--foreground-deactivation::after{animation:150ms mdc-ripple-fg-opacity-out;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-card__primary-action::before,.mdc-card__primary-action::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-card__primary-action.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-card__primary-action::before,.mdc-card__primary-action::after{background-color:#000}.mdc-card__primary-action:hover::before{opacity:.04}.mdc-card__primary-action:not(.mdc-ripple-upgraded):focus::before,.mdc-card__primary-action.mdc-ripple-upgraded--background-focused::before{transition-duration:75ms;opacity:.12}.mdc-card__primary-action:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-card__primary-action:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.16}.mdc-card__primary-action.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: .16}.mdc-card__primary-action:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__primary-action:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mdc-card__actions{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;min-height:52px;padding:8px}.mdc-card__actions--full-bleed{padding:0}.mdc-card__action-buttons,.mdc-card__action-icons{display:flex;flex-direction:row;align-items:center;box-sizing:border-box}.mdc-card__action-icons{color:rgba(0,0,0,0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0,0,0,0.38));flex-grow:1;justify-content:flex-end}.mdc-card__action-buttons+.mdc-card__action-icons{margin-left:16px;margin-right:0}[dir="rtl"] .mdc-card__action-buttons+.mdc-card__action-icons,.mdc-card__action-buttons+.mdc-card__action-icons[dir="rtl"]{margin-left:0;margin-right:16px}.mdc-card__action{display:inline-flex;flex-direction:row;align-items:center;box-sizing:border-box;justify-content:center;cursor:pointer;user-select:none}.mdc-card__action:focus{outline:none}.mdc-card__action--button{margin-left:0;margin-right:8px;padding:0 8px}[dir="rtl"] .mdc-card__action--button,.mdc-card__action--button[dir="rtl"]{margin-left:8px;margin-right:0}.mdc-card__action--button:last-child{margin-left:0;margin-right:0}[dir="rtl"] .mdc-card__action--button:last-child,.mdc-card__action--button:last-child[dir="rtl"]{margin-left:0;margin-right:0}.mdc-card__actions--full-bleed .mdc-card__action--button{justify-content:space-between;width:100%;height:auto;max-height:none;margin:0;padding:8px 16px;text-align:left}[dir="rtl"] .mdc-card__actions--full-bleed .mdc-card__action--button,.mdc-card__actions--full-bleed .mdc-card__action--button[dir="rtl"]{text-align:right}.mdc-card__action--icon{margin:-6px 0;padding:12px}.mdc-card__action--icon:not(:disabled){color:rgba(0,0,0,0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0,0,0,0.38))}:host{display:inline-flex}.mdc-card{border-top-left-radius:inherit;border-top-right-radius:inherit;border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;flex:1}\n</style>'], ['<style>.mdc-card{background-color:#fff;background-color:var(--mdc-theme-surface, #fff);border-radius:2px;box-shadow:0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12);display:flex;flex-direction:column;box-sizing:border-box}.mdc-card--outlined{box-shadow:0px 0px 0px 0px rgba(0,0,0,0.2),0px 0px 0px 0px rgba(0,0,0,0.14),0px 0px 0px 0px rgba(0,0,0,0.12);border:1px solid #e0e0e0}.mdc-card__media{position:relative;box-sizing:border-box;background-repeat:no-repeat;background-position:center;background-size:cover}.mdc-card__media::before{display:block;content:""}.mdc-card__media:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__media:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mdc-card__media--square::before{margin-top:100%}.mdc-card__media--16-9::before{margin-top:56.25%}.mdc-card__media-content{position:absolute;top:0;right:0;bottom:0;left:0;box-sizing:border-box}.mdc-card__primary-action{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:transparent;will-change:transform, opacity;display:flex;flex-direction:column;box-sizing:border-box;position:relative;outline:none;color:inherit;text-decoration:none;cursor:pointer;overflow:hidden}.mdc-card__primary-action::before,.mdc-card__primary-action::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-card__primary-action::before{transition:opacity 15ms linear;z-index:1}.mdc-card__primary-action.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-card__primary-action.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-card__primary-action.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-card__primary-action.mdc-ripple-upgraded--foreground-activation::after{animation:225ms mdc-ripple-fg-radius-in forwards,75ms mdc-ripple-fg-opacity-in forwards}.mdc-card__primary-action.mdc-ripple-upgraded--foreground-deactivation::after{animation:150ms mdc-ripple-fg-opacity-out;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-card__primary-action::before,.mdc-card__primary-action::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-card__primary-action.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-card__primary-action::before,.mdc-card__primary-action::after{background-color:#000}.mdc-card__primary-action:hover::before{opacity:.04}.mdc-card__primary-action:not(.mdc-ripple-upgraded):focus::before,.mdc-card__primary-action.mdc-ripple-upgraded--background-focused::before{transition-duration:75ms;opacity:.12}.mdc-card__primary-action:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-card__primary-action:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.16}.mdc-card__primary-action.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: .16}.mdc-card__primary-action:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__primary-action:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mdc-card__actions{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;min-height:52px;padding:8px}.mdc-card__actions--full-bleed{padding:0}.mdc-card__action-buttons,.mdc-card__action-icons{display:flex;flex-direction:row;align-items:center;box-sizing:border-box}.mdc-card__action-icons{color:rgba(0,0,0,0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0,0,0,0.38));flex-grow:1;justify-content:flex-end}.mdc-card__action-buttons+.mdc-card__action-icons{margin-left:16px;margin-right:0}[dir="rtl"] .mdc-card__action-buttons+.mdc-card__action-icons,.mdc-card__action-buttons+.mdc-card__action-icons[dir="rtl"]{margin-left:0;margin-right:16px}.mdc-card__action{display:inline-flex;flex-direction:row;align-items:center;box-sizing:border-box;justify-content:center;cursor:pointer;user-select:none}.mdc-card__action:focus{outline:none}.mdc-card__action--button{margin-left:0;margin-right:8px;padding:0 8px}[dir="rtl"] .mdc-card__action--button,.mdc-card__action--button[dir="rtl"]{margin-left:8px;margin-right:0}.mdc-card__action--button:last-child{margin-left:0;margin-right:0}[dir="rtl"] .mdc-card__action--button:last-child,.mdc-card__action--button:last-child[dir="rtl"]{margin-left:0;margin-right:0}.mdc-card__actions--full-bleed .mdc-card__action--button{justify-content:space-between;width:100%;height:auto;max-height:none;margin:0;padding:8px 16px;text-align:left}[dir="rtl"] .mdc-card__actions--full-bleed .mdc-card__action--button,.mdc-card__actions--full-bleed .mdc-card__action--button[dir="rtl"]{text-align:right}.mdc-card__action--icon{margin:-6px 0;padding:12px}.mdc-card__action--icon:not(:disabled){color:rgba(0,0,0,0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0,0,0,0.38))}:host{display:inline-flex}.mdc-card{border-top-left-radius:inherit;border-top-right-radius:inherit;border-bottom-left-radius:inherit;border-bottom-right-radius:inherit;flex:1}\n</style>']);

  var style$3 = html$1(_templateObject$6);

  var _templateObject$7 = taggedTemplateLiteral(['\n      ', '\n      <div class$="mdc-card ', '">\n        <slot></slot>\n      </div>'], ['\n      ', '\n      <div class$="mdc-card ', '">\n        <slot></slot>\n      </div>']);

  var Card = function (_LitElement) {
    inherits(Card, _LitElement);
    createClass(Card, null, [{
      key: 'properties',
      get: function get$$1() {
        return {
          stroke: Boolean
        };
      }
    }]);

    function Card() {
      classCallCheck(this, Card);

      var _this = possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).call(this));

      _this.stroke = false;
      return _this;
    }

    createClass(Card, [{
      key: '_renderStyle',
      value: function _renderStyle() {
        return style$3;
      }
    }, {
      key: '_render',
      value: function _render(_ref) {
        var stroke = _ref.stroke;

        return html$1(_templateObject$7, this._renderStyle(), stroke ? 'mdc-card--stroked' : '');
      }
    }]);
    return Card;
  }(LitElement);

  customElements.define('mwc-card', Card);

  /**
  @license
  Copyright 2018 Google Inc. All Rights Reserved.

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
  */

  var ComponentElement = function (_LitElement) {
    inherits(ComponentElement, _LitElement);
    createClass(ComponentElement, null, [{
      key: 'ComponentClass',
      get: function get$$1() {
        throw new Error('Must provide component class');
      }
    }, {
      key: 'componentSelector',
      get: function get$$1() {
        throw new Error('Must provide component selector');
      }
    }]);

    function ComponentElement() {
      classCallCheck(this, ComponentElement);

      var _this = possibleConstructorReturn(this, (ComponentElement.__proto__ || Object.getPrototypeOf(ComponentElement)).call(this));

      _this._asyncComponent = false;
      return _this;
    }

    createClass(ComponentElement, [{
      key: 'ready',
      value: async function ready() {
        get(ComponentElement.prototype.__proto__ || Object.getPrototypeOf(ComponentElement.prototype), 'ready', this).call(this);
        if (this._asyncComponent) {
          await afterNextRender();
        }
        this._makeComponent();
      }
    }, {
      key: '_makeComponent',
      value: function _makeComponent() {
        this._componentRoot = this._root.querySelector(this.constructor.componentSelector);
        this._component = new this.constructor.ComponentClass(this._componentRoot);
        if (this._resolveComponentPromise) {
          this._resolveComponentPromise(this._component);
        }
      }
    }, {
      key: 'componentReady',
      value: function componentReady() {
        var _this2 = this;

        if (!this._componentPromise) {
          this._componentPromise = new Promise(function (resolve) {
            _this2._resolveComponentPromise = resolve;
          });
          if (this._component) {
            this._resolveComponentPromise(this._component);
          }
        }
        return this._componentPromise;
      }
    }]);
    return ComponentElement;
  }(LitElement);

  /**
  @license
  Copyright 2018 Google Inc. All Rights Reserved.

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
  */

  var FormableComponentElement = function (_ComponentElement) {
    inherits(FormableComponentElement, _ComponentElement);
    createClass(FormableComponentElement, null, [{
      key: 'formElementSelector',
      get: function get$$1() {
        return 'input';
      }
    }]);

    function FormableComponentElement() {
      classCallCheck(this, FormableComponentElement);

      var _this = possibleConstructorReturn(this, (FormableComponentElement.__proto__ || Object.getPrototypeOf(FormableComponentElement)).call(this));

      _this._asyncComponent = true;
      return _this;
    }

    createClass(FormableComponentElement, [{
      key: 'ready',
      value: function ready() {
        get(FormableComponentElement.prototype.__proto__ || Object.getPrototypeOf(FormableComponentElement.prototype), 'ready', this).call(this);
        this._formElement = this._root.querySelector(this.constructor.formElementSelector);
      }
    }, {
      key: 'click',
      value: function click() {
        if (this._formElement) {
          this._formElement.click();
        }
      }

      // TODO(srovell): use delegates focus?

    }, {
      key: 'focus',
      value: function focus() {
        if (this._formElement) {
          this._formElement.focus();
        }
      }
    }, {
      key: 'setAriaLabel',
      value: function setAriaLabel(value) {
        if (this._formElement) {
          this._formElement.setAttribute('aria-label', value);
        }
      }
    }]);
    return FormableComponentElement;
  }(ComponentElement);

  var _templateObject$8 = taggedTemplateLiteral(['<style>@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var: 1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug::before{border:var(--mdc-ripple-surface-test-edge-var)}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.78334}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.78334}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;padding:11px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom;--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:transparent;will-change:transform, opacity}.mdc-checkbox::before,.mdc-checkbox::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-checkbox::before{transition:opacity 15ms linear;z-index:1}.mdc-checkbox.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-checkbox.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-checkbox.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-checkbox.mdc-ripple-upgraded--foreground-activation::after{animation:225ms mdc-ripple-fg-radius-in forwards,75ms mdc-ripple-fg-opacity-in forwards}.mdc-checkbox.mdc-ripple-upgraded--foreground-deactivation::after{animation:150ms mdc-ripple-fg-opacity-out;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-checkbox::before,.mdc-checkbox::after{background-color:#018786}@supports not (-ms-ime-align: auto){.mdc-checkbox::before,.mdc-checkbox::after{background-color:var(--mdc-theme-secondary, #018786)}}.mdc-checkbox:hover::before{opacity:.04}.mdc-checkbox:not(.mdc-ripple-upgraded):focus::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused::before{transition-duration:75ms;opacity:.12}.mdc-checkbox:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.16}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: .16}.mdc-checkbox::before,.mdc-checkbox::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-checkbox.mdc-ripple-upgraded::before,.mdc-checkbox.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-checkbox.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-checkbox__checkmark-path{stroke:#fff !important}.mdc-checkbox__mixedmark{background-color:#fff}.mdc-checkbox__background::before{background-color:#018786}@supports not (-ms-ime-align: auto){.mdc-checkbox__background::before{background-color:var(--mdc-theme-secondary, #018786)}}.mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate) ~ .mdc-checkbox__background{border-color:rgba(0,0,0,0.54);background-color:transparent}.mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,.mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786);background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}@keyframes mdc-checkbox-fade-in-background-0{0%{border-color:rgba(0,0,0,0.54);background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786);background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}}@keyframes mdc-checkbox-fade-out-background-0{0%,80%{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786);background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}100%{border-color:rgba(0,0,0,0.54);background-color:transparent}}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-0}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-0}.mdc-checkbox__native-control:disabled:not(:checked):not(:indeterminate) ~ .mdc-checkbox__background{border-color:rgba(0,0,0,0.26)}.mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,.mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background{border-color:transparent;background-color:rgba(0,0,0,0.26)}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{left:11px;right:initial;display:inline-flex;position:absolute;top:11px;bottom:0;align-items:center;justify-content:center;box-sizing:border-box;width:45%;height:45%;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);border:2px solid currentColor;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color, border-color}.mdc-checkbox[dir="rtl"] .mdc-checkbox__background,[dir="rtl"] .mdc-checkbox .mdc-checkbox__background{left:initial;right:11px}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);opacity:0}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke-width:3.12px;stroke-dashoffset:29.78334;stroke-dasharray:29.78334}.mdc-checkbox__mixedmark{width:100%;height:2px;transform:scaleX(0) rotate(0deg);transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);opacity:0}.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none !important}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:180ms linear 0s mdc-checkbox-unchecked-checked-checkmark-path;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:90ms linear 0s mdc-checkbox-unchecked-indeterminate-mixedmark;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:90ms linear 0s mdc-checkbox-checked-unchecked-checkmark-path;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:90ms linear 0s mdc-checkbox-checked-indeterminate-checkmark;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:90ms linear 0s mdc-checkbox-checked-indeterminate-mixedmark;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:500ms linear 0s mdc-checkbox-indeterminate-checked-checkmark;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:500ms linear 0s mdc-checkbox-indeterminate-checked-mixedmark;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:300ms linear 0s mdc-checkbox-indeterminate-unchecked-mixedmark;transition:none}.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__background::before{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;transform:scale(0, 0);transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);border-radius:50%;opacity:0;pointer-events:none;content:"";will-change:opacity, transform}.mdc-ripple-upgraded--unbounded .mdc-checkbox__background::before{content:none}.mdc-checkbox__native-control:focus ~ .mdc-checkbox__background::before{transform:scale(2.75, 2.75);transition:opacity 80ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 80ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:.26}.mdc-checkbox__native-control{position:absolute;top:0;left:0;width:100%;height:100%;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);opacity:0}.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}:host{outline:none}\n</style>'], ['<style>@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var: 1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug::before{border:var(--mdc-ripple-surface-test-edge-var)}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.78334}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.78334}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;padding:11px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom;--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:transparent;will-change:transform, opacity}.mdc-checkbox::before,.mdc-checkbox::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-checkbox::before{transition:opacity 15ms linear;z-index:1}.mdc-checkbox.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-checkbox.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-checkbox.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-checkbox.mdc-ripple-upgraded--foreground-activation::after{animation:225ms mdc-ripple-fg-radius-in forwards,75ms mdc-ripple-fg-opacity-in forwards}.mdc-checkbox.mdc-ripple-upgraded--foreground-deactivation::after{animation:150ms mdc-ripple-fg-opacity-out;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-checkbox::before,.mdc-checkbox::after{background-color:#018786}@supports not (-ms-ime-align: auto){.mdc-checkbox::before,.mdc-checkbox::after{background-color:var(--mdc-theme-secondary, #018786)}}.mdc-checkbox:hover::before{opacity:.04}.mdc-checkbox:not(.mdc-ripple-upgraded):focus::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused::before{transition-duration:75ms;opacity:.12}.mdc-checkbox:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.16}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: .16}.mdc-checkbox::before,.mdc-checkbox::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-checkbox.mdc-ripple-upgraded::before,.mdc-checkbox.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-checkbox.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-checkbox__checkmark-path{stroke:#fff !important}.mdc-checkbox__mixedmark{background-color:#fff}.mdc-checkbox__background::before{background-color:#018786}@supports not (-ms-ime-align: auto){.mdc-checkbox__background::before{background-color:var(--mdc-theme-secondary, #018786)}}.mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate) ~ .mdc-checkbox__background{border-color:rgba(0,0,0,0.54);background-color:transparent}.mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,.mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786);background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}@keyframes mdc-checkbox-fade-in-background-0{0%{border-color:rgba(0,0,0,0.54);background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786);background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}}@keyframes mdc-checkbox-fade-out-background-0{0%,80%{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786);background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}100%{border-color:rgba(0,0,0,0.54);background-color:transparent}}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-0}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled ~ .mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-0}.mdc-checkbox__native-control:disabled:not(:checked):not(:indeterminate) ~ .mdc-checkbox__background{border-color:rgba(0,0,0,0.26)}.mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,.mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background{border-color:transparent;background-color:rgba(0,0,0,0.26)}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{left:11px;right:initial;display:inline-flex;position:absolute;top:11px;bottom:0;align-items:center;justify-content:center;box-sizing:border-box;width:45%;height:45%;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);border:2px solid currentColor;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color, border-color}.mdc-checkbox[dir="rtl"] .mdc-checkbox__background,[dir="rtl"] .mdc-checkbox .mdc-checkbox__background{left:initial;right:11px}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);opacity:0}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke-width:3.12px;stroke-dashoffset:29.78334;stroke-dasharray:29.78334}.mdc-checkbox__mixedmark{width:100%;height:2px;transform:scaleX(0) rotate(0deg);transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);opacity:0}.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none !important}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:180ms linear 0s mdc-checkbox-unchecked-checked-checkmark-path;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:90ms linear 0s mdc-checkbox-unchecked-indeterminate-mixedmark;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:90ms linear 0s mdc-checkbox-checked-unchecked-checkmark-path;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:90ms linear 0s mdc-checkbox-checked-indeterminate-checkmark;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:90ms linear 0s mdc-checkbox-checked-indeterminate-mixedmark;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:500ms linear 0s mdc-checkbox-indeterminate-checked-checkmark;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:500ms linear 0s mdc-checkbox-indeterminate-checked-mixedmark;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:300ms linear 0s mdc-checkbox-indeterminate-unchecked-mixedmark;transition:none}.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__background::before{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;transform:scale(0, 0);transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);border-radius:50%;opacity:0;pointer-events:none;content:"";will-change:opacity, transform}.mdc-ripple-upgraded--unbounded .mdc-checkbox__background::before{content:none}.mdc-checkbox__native-control:focus ~ .mdc-checkbox__background::before{transform:scale(2.75, 2.75);transition:opacity 80ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 80ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:.26}.mdc-checkbox__native-control{position:absolute;top:0;left:0;width:100%;height:100%;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1);opacity:0}.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}:host{outline:none}\n</style>']);

  var style$4 = html$1(_templateObject$8);

  /**
   * @license
   * Copyright 2016 Google Inc. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /** @const {Object<string, !VendorPropertyMapType>} */
  var eventTypeMap = {
    'animationstart': {
      noPrefix: 'animationstart',
      webkitPrefix: 'webkitAnimationStart',
      styleProperty: 'animation'
    },
    'animationend': {
      noPrefix: 'animationend',
      webkitPrefix: 'webkitAnimationEnd',
      styleProperty: 'animation'
    },
    'animationiteration': {
      noPrefix: 'animationiteration',
      webkitPrefix: 'webkitAnimationIteration',
      styleProperty: 'animation'
    },
    'transitionend': {
      noPrefix: 'transitionend',
      webkitPrefix: 'webkitTransitionEnd',
      styleProperty: 'transition'
    }
  };

  /** @const {Object<string, !VendorPropertyMapType>} */
  var cssPropertyMap = {
    'animation': {
      noPrefix: 'animation',
      webkitPrefix: '-webkit-animation'
    },
    'transform': {
      noPrefix: 'transform',
      webkitPrefix: '-webkit-transform'
    },
    'transition': {
      noPrefix: 'transition',
      webkitPrefix: '-webkit-transition'
    }
  };

  /**
   * @param {!Object} windowObj
   * @return {boolean}
   */
  function hasProperShape(windowObj) {
    return windowObj['document'] !== undefined && typeof windowObj['document']['createElement'] === 'function';
  }

  /**
   * @param {string} eventType
   * @return {boolean}
   */
  function eventFoundInMaps(eventType) {
    return eventType in eventTypeMap || eventType in cssPropertyMap;
  }

  /**
   * @param {string} eventType
   * @param {!Object<string, !VendorPropertyMapType>} map
   * @param {!Element} el
   * @return {string}
   */
  function getJavaScriptEventName(eventType, map, el) {
    return map[eventType].styleProperty in el.style ? map[eventType].noPrefix : map[eventType].webkitPrefix;
  }

  /**
   * Helper function to determine browser prefix for CSS3 animation events
   * and property names.
   * @param {!Object} windowObj
   * @param {string} eventType
   * @return {string}
   */
  function getAnimationName(windowObj, eventType) {
    if (!hasProperShape(windowObj) || !eventFoundInMaps(eventType)) {
      return eventType;
    }

    var map = /** @type {!Object<string, !VendorPropertyMapType>} */eventType in eventTypeMap ? eventTypeMap : cssPropertyMap;
    var el = windowObj['document']['createElement']('div');
    var eventName = '';

    if (map === eventTypeMap) {
      eventName = getJavaScriptEventName(eventType, map, el);
    } else {
      eventName = map[eventType].noPrefix in el.style ? map[eventType].noPrefix : map[eventType].webkitPrefix;
    }

    return eventName;
  }

  // Public functions to access getAnimationName() for JavaScript events or CSS
  // property names.

  var transformStyleProperties = ['transform', 'WebkitTransform', 'MozTransform', 'OTransform', 'MSTransform'];

  /**
   * @param {!Object} windowObj
   * @param {string} eventType
   * @return {string}
   */
  function getCorrectEventName(windowObj, eventType) {
    return getAnimationName(windowObj, eventType);
  }

  /**
   * @license
   * Copyright 2017 Google Inc. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
   * @record
   */

  var MDCSelectionControl = function () {
    function MDCSelectionControl() {
      classCallCheck(this, MDCSelectionControl);
    }

    createClass(MDCSelectionControl, [{
      key: 'ripple',

      /** @return {?MDCRipple} */
      get: function get$$1() {}
    }]);
    return MDCSelectionControl;
  }();

  /**
   * @license
   * Copyright 2016 Google Inc. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /* eslint no-unused-vars: [2, {"args": "none"}] */

  /**
   * Adapter for MDC Checkbox. Provides an interface for managing
   * - classes
   * - dom
   * - event handlers
   *
   * Additionally, provides type information for the adapter to the Closure
   * compiler.
   *
   * Implement this adapter for your framework of choice to delegate updates to
   * the component in your framework of choice. See architecture documentation
   * for more details.
   * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
   *
   * @record
   */

  var MDCCheckboxAdapter = function () {
    function MDCCheckboxAdapter() {
      classCallCheck(this, MDCCheckboxAdapter);
    }

    createClass(MDCCheckboxAdapter, [{
      key: 'addClass',

      /** @param {string} className */
      value: function addClass(className) {}

      /** @param {string} className */

    }, {
      key: 'removeClass',
      value: function removeClass(className) {}

      /**
       * Sets an attribute with a given value on the input element.
       * @param {string} attr
       * @param {string} value
       */

    }, {
      key: 'setNativeControlAttr',
      value: function setNativeControlAttr(attr, value) {}

      /**
       * Removes an attribute from the input element.
       * @param {string} attr
       */

    }, {
      key: 'removeNativeControlAttr',
      value: function removeNativeControlAttr(attr) {}

      /** @param {!EventListener} handler */

    }, {
      key: 'registerAnimationEndHandler',
      value: function registerAnimationEndHandler(handler) {}

      /** @param {!EventListener} handler */

    }, {
      key: 'deregisterAnimationEndHandler',
      value: function deregisterAnimationEndHandler(handler) {}

      /** @param {!EventListener} handler */

    }, {
      key: 'registerChangeHandler',
      value: function registerChangeHandler(handler) {}

      /** @param {!EventListener} handler */

    }, {
      key: 'deregisterChangeHandler',
      value: function deregisterChangeHandler(handler) {}

      /** @return {!MDCSelectionControlState} */

    }, {
      key: 'getNativeControl',
      value: function getNativeControl() {}
    }, {
      key: 'forceLayout',
      value: function forceLayout() {}

      /** @return {boolean} */

    }, {
      key: 'isAttachedToDOM',
      value: function isAttachedToDOM() {}
    }]);
    return MDCCheckboxAdapter;
  }();

  /**
   * @license
   * Copyright 2016 Google Inc. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /** @const {string} */
  var ROOT = 'mdc-checkbox';

  /** @enum {string} */
  var cssClasses$1 = {
    UPGRADED: 'mdc-checkbox--upgraded',
    CHECKED: 'mdc-checkbox--checked',
    INDETERMINATE: 'mdc-checkbox--indeterminate',
    DISABLED: 'mdc-checkbox--disabled',
    ANIM_UNCHECKED_CHECKED: 'mdc-checkbox--anim-unchecked-checked',
    ANIM_UNCHECKED_INDETERMINATE: 'mdc-checkbox--anim-unchecked-indeterminate',
    ANIM_CHECKED_UNCHECKED: 'mdc-checkbox--anim-checked-unchecked',
    ANIM_CHECKED_INDETERMINATE: 'mdc-checkbox--anim-checked-indeterminate',
    ANIM_INDETERMINATE_CHECKED: 'mdc-checkbox--anim-indeterminate-checked',
    ANIM_INDETERMINATE_UNCHECKED: 'mdc-checkbox--anim-indeterminate-unchecked'
  };

  /** @enum {string} */
  var strings$1 = {
    NATIVE_CONTROL_SELECTOR: '.' + ROOT + '__native-control',
    TRANSITION_STATE_INIT: 'init',
    TRANSITION_STATE_CHECKED: 'checked',
    TRANSITION_STATE_UNCHECKED: 'unchecked',
    TRANSITION_STATE_INDETERMINATE: 'indeterminate',
    ARIA_CHECKED_ATTR: 'aria-checked',
    ARIA_CHECKED_INDETERMINATE_VALUE: 'mixed'
  };

  /** @enum {number} */
  var numbers$1 = {
    ANIM_END_LATCH_MS: 250
  };

  /**
   * @license
   * Copyright 2016 Google Inc. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /** @const {!Array<string>} */
  var CB_PROTO_PROPS = ['checked', 'indeterminate'];

  /**
   * @extends {MDCFoundation<!MDCCheckboxAdapter>}
   */

  var MDCCheckboxFoundation = function (_MDCFoundation) {
    inherits(MDCCheckboxFoundation, _MDCFoundation);
    createClass(MDCCheckboxFoundation, null, [{
      key: 'cssClasses',

      /** @return enum {cssClasses} */
      get: function get$$1() {
        return cssClasses$1;
      }

      /** @return enum {strings} */

    }, {
      key: 'strings',
      get: function get$$1() {
        return strings$1;
      }

      /** @return enum {numbers} */

    }, {
      key: 'numbers',
      get: function get$$1() {
        return numbers$1;
      }

      /** @return {!MDCCheckboxAdapter} */

    }, {
      key: 'defaultAdapter',
      get: function get$$1() {
        return (/** @type {!MDCCheckboxAdapter} */{
            addClass: function addClass() /* className: string */{},
            removeClass: function removeClass() /* className: string */{},
            setNativeControlAttr: function setNativeControlAttr() /* attr: string, value: string */{},
            removeNativeControlAttr: function removeNativeControlAttr() /* attr: string */{},
            registerAnimationEndHandler: function registerAnimationEndHandler() /* handler: EventListener */{},
            deregisterAnimationEndHandler: function deregisterAnimationEndHandler() /* handler: EventListener */{},
            registerChangeHandler: function registerChangeHandler() /* handler: EventListener */{},
            deregisterChangeHandler: function deregisterChangeHandler() /* handler: EventListener */{},
            getNativeControl: function getNativeControl() /* !MDCSelectionControlState */{},
            forceLayout: function forceLayout() {},
            isAttachedToDOM: function isAttachedToDOM() /* boolean */{}
          }
        );
      }
    }]);

    function MDCCheckboxFoundation(adapter) {
      classCallCheck(this, MDCCheckboxFoundation);

      /** @private {string} */
      var _this = possibleConstructorReturn(this, (MDCCheckboxFoundation.__proto__ || Object.getPrototypeOf(MDCCheckboxFoundation)).call(this, _extends(MDCCheckboxFoundation.defaultAdapter, adapter)));

      _this.currentCheckState_ = strings$1.TRANSITION_STATE_INIT;

      /** @private {string} */
      _this.currentAnimationClass_ = '';

      /** @private {number} */
      _this.animEndLatchTimer_ = 0;

      _this.animEndHandler_ = /** @private {!EventListener} */function () {
        return _this.handleAnimationEnd();
      };

      _this.changeHandler_ = /** @private {!EventListener} */function () {
        return _this.handleChange();
      };
      return _this;
    }

    createClass(MDCCheckboxFoundation, [{
      key: 'init',
      value: function init() {
        this.currentCheckState_ = this.determineCheckState_(this.getNativeControl_());
        this.updateAriaChecked_();
        this.adapter_.addClass(cssClasses$1.UPGRADED);
        this.adapter_.registerChangeHandler(this.changeHandler_);
        this.installPropertyChangeHooks_();
      }
    }, {
      key: 'destroy',
      value: function destroy() {
        this.adapter_.deregisterChangeHandler(this.changeHandler_);
        this.uninstallPropertyChangeHooks_();
      }

      /** @return {boolean} */

    }, {
      key: 'isChecked',
      value: function isChecked() {
        return this.getNativeControl_().checked;
      }

      /** @param {boolean} checked */

    }, {
      key: 'setChecked',
      value: function setChecked(checked) {
        this.getNativeControl_().checked = checked;
      }

      /** @return {boolean} */

    }, {
      key: 'isIndeterminate',
      value: function isIndeterminate() {
        return this.getNativeControl_().indeterminate;
      }

      /** @param {boolean} indeterminate */

    }, {
      key: 'setIndeterminate',
      value: function setIndeterminate(indeterminate) {
        this.getNativeControl_().indeterminate = indeterminate;
      }

      /** @return {boolean} */

    }, {
      key: 'isDisabled',
      value: function isDisabled() {
        return this.getNativeControl_().disabled;
      }

      /** @param {boolean} disabled */

    }, {
      key: 'setDisabled',
      value: function setDisabled(disabled) {
        this.getNativeControl_().disabled = disabled;
        if (disabled) {
          this.adapter_.addClass(cssClasses$1.DISABLED);
        } else {
          this.adapter_.removeClass(cssClasses$1.DISABLED);
        }
      }

      /** @return {?string} */

    }, {
      key: 'getValue',
      value: function getValue() {
        return this.getNativeControl_().value;
      }

      /** @param {?string} value */

    }, {
      key: 'setValue',
      value: function setValue(value) {
        this.getNativeControl_().value = value;
      }

      /**
       * Handles the animationend event for the checkbox
       */

    }, {
      key: 'handleAnimationEnd',
      value: function handleAnimationEnd() {
        var _this2 = this;

        clearTimeout(this.animEndLatchTimer_);
        this.animEndLatchTimer_ = setTimeout(function () {
          _this2.adapter_.removeClass(_this2.currentAnimationClass_);
          _this2.adapter_.deregisterAnimationEndHandler(_this2.animEndHandler_);
        }, numbers$1.ANIM_END_LATCH_MS);
      }

      /**
       * Handles the change event for the checkbox
       */

    }, {
      key: 'handleChange',
      value: function handleChange() {
        this.transitionCheckState_();
      }

      /** @private */

    }, {
      key: 'installPropertyChangeHooks_',
      value: function installPropertyChangeHooks_() {
        var _this3 = this;

        var nativeCb = this.getNativeControl_();
        var cbProto = Object.getPrototypeOf(nativeCb);

        CB_PROTO_PROPS.forEach(function (controlState) {
          var desc = Object.getOwnPropertyDescriptor(cbProto, controlState);
          // We have to check for this descriptor, since some browsers (Safari) don't support its return.
          // See: https://bugs.webkit.org/show_bug.cgi?id=49739
          if (validDescriptor(desc)) {
            var nativeCbDesc = /** @type {!ObjectPropertyDescriptor} */{
              get: desc.get,
              set: function set$$1(state) {
                desc.set.call(nativeCb, state);
                _this3.transitionCheckState_();
              },
              configurable: desc.configurable,
              enumerable: desc.enumerable
            };
            Object.defineProperty(nativeCb, controlState, nativeCbDesc);
          }
        });
      }

      /** @private */

    }, {
      key: 'uninstallPropertyChangeHooks_',
      value: function uninstallPropertyChangeHooks_() {
        var nativeCb = this.getNativeControl_();
        var cbProto = Object.getPrototypeOf(nativeCb);

        CB_PROTO_PROPS.forEach(function (controlState) {
          var desc = /** @type {!ObjectPropertyDescriptor} */Object.getOwnPropertyDescriptor(cbProto, controlState);
          if (validDescriptor(desc)) {
            Object.defineProperty(nativeCb, controlState, desc);
          }
        });
      }

      /** @private */

    }, {
      key: 'transitionCheckState_',
      value: function transitionCheckState_() {
        var nativeCb = this.adapter_.getNativeControl();
        if (!nativeCb) {
          return;
        }
        var oldState = this.currentCheckState_;
        var newState = this.determineCheckState_(nativeCb);
        if (oldState === newState) {
          return;
        }

        this.updateAriaChecked_();

        // Check to ensure that there isn't a previously existing animation class, in case for example
        // the user interacted with the checkbox before the animation was finished.
        if (this.currentAnimationClass_.length > 0) {
          clearTimeout(this.animEndLatchTimer_);
          this.adapter_.forceLayout();
          this.adapter_.removeClass(this.currentAnimationClass_);
        }

        this.currentAnimationClass_ = this.getTransitionAnimationClass_(oldState, newState);
        this.currentCheckState_ = newState;

        // Check for parentNode so that animations are only run when the element is attached
        // to the DOM.
        if (this.adapter_.isAttachedToDOM() && this.currentAnimationClass_.length > 0) {
          this.adapter_.addClass(this.currentAnimationClass_);
          this.adapter_.registerAnimationEndHandler(this.animEndHandler_);
        }
      }

      /**
       * @param {!MDCSelectionControlState} nativeCb
       * @return {string}
       * @private
       */

    }, {
      key: 'determineCheckState_',
      value: function determineCheckState_(nativeCb) {
        var TRANSITION_STATE_INDETERMINATE = strings$1.TRANSITION_STATE_INDETERMINATE,
            TRANSITION_STATE_CHECKED = strings$1.TRANSITION_STATE_CHECKED,
            TRANSITION_STATE_UNCHECKED = strings$1.TRANSITION_STATE_UNCHECKED;


        if (nativeCb.indeterminate) {
          return TRANSITION_STATE_INDETERMINATE;
        }
        return nativeCb.checked ? TRANSITION_STATE_CHECKED : TRANSITION_STATE_UNCHECKED;
      }

      /**
       * @param {string} oldState
       * @param {string} newState
       * @return {string}
       */

    }, {
      key: 'getTransitionAnimationClass_',
      value: function getTransitionAnimationClass_(oldState, newState) {
        var TRANSITION_STATE_INIT = strings$1.TRANSITION_STATE_INIT,
            TRANSITION_STATE_CHECKED = strings$1.TRANSITION_STATE_CHECKED,
            TRANSITION_STATE_UNCHECKED = strings$1.TRANSITION_STATE_UNCHECKED;
        var _MDCCheckboxFoundatio = MDCCheckboxFoundation.cssClasses,
            ANIM_UNCHECKED_CHECKED = _MDCCheckboxFoundatio.ANIM_UNCHECKED_CHECKED,
            ANIM_UNCHECKED_INDETERMINATE = _MDCCheckboxFoundatio.ANIM_UNCHECKED_INDETERMINATE,
            ANIM_CHECKED_UNCHECKED = _MDCCheckboxFoundatio.ANIM_CHECKED_UNCHECKED,
            ANIM_CHECKED_INDETERMINATE = _MDCCheckboxFoundatio.ANIM_CHECKED_INDETERMINATE,
            ANIM_INDETERMINATE_CHECKED = _MDCCheckboxFoundatio.ANIM_INDETERMINATE_CHECKED,
            ANIM_INDETERMINATE_UNCHECKED = _MDCCheckboxFoundatio.ANIM_INDETERMINATE_UNCHECKED;


        switch (oldState) {
          case TRANSITION_STATE_INIT:
            if (newState === TRANSITION_STATE_UNCHECKED) {
              return '';
            }
          // fallthrough
          case TRANSITION_STATE_UNCHECKED:
            return newState === TRANSITION_STATE_CHECKED ? ANIM_UNCHECKED_CHECKED : ANIM_UNCHECKED_INDETERMINATE;
          case TRANSITION_STATE_CHECKED:
            return newState === TRANSITION_STATE_UNCHECKED ? ANIM_CHECKED_UNCHECKED : ANIM_CHECKED_INDETERMINATE;
          // TRANSITION_STATE_INDETERMINATE
          default:
            return newState === TRANSITION_STATE_CHECKED ? ANIM_INDETERMINATE_CHECKED : ANIM_INDETERMINATE_UNCHECKED;
        }
      }
    }, {
      key: 'updateAriaChecked_',
      value: function updateAriaChecked_() {
        // Ensure aria-checked is set to mixed if checkbox is in indeterminate state.
        if (this.isIndeterminate()) {
          this.adapter_.setNativeControlAttr(strings$1.ARIA_CHECKED_ATTR, strings$1.ARIA_CHECKED_INDETERMINATE_VALUE);
        } else {
          this.adapter_.removeNativeControlAttr(strings$1.ARIA_CHECKED_ATTR);
        }
      }

      /**
       * @return {!MDCSelectionControlState}
       * @private
       */

    }, {
      key: 'getNativeControl_',
      value: function getNativeControl_() {
        return this.adapter_.getNativeControl() || {
          checked: false,
          indeterminate: false,
          disabled: false,
          value: null
        };
      }
    }]);
    return MDCCheckboxFoundation;
  }(MDCFoundation);

  /**
   * @param {ObjectPropertyDescriptor|undefined} inputPropDesc
   * @return {boolean}
   */


  function validDescriptor(inputPropDesc) {
    return !!inputPropDesc && typeof inputPropDesc.set === 'function';
  }

  /**
   * @license
   * Copyright 2016 Google Inc. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
   * @extends MDCComponent<!MDCCheckboxFoundation>
   * @implements {MDCSelectionControl}
   */

  var MDCCheckbox = function (_MDCComponent) {
    inherits(MDCCheckbox, _MDCComponent);
    createClass(MDCCheckbox, [{
      key: 'nativeCb_',


      /**
       * Returns the state of the native control element, or null if the native control element is not present.
       * @return {?MDCSelectionControlState}
       * @private
       */
      get: function get$$1() {
        var NATIVE_CONTROL_SELECTOR = MDCCheckboxFoundation.strings.NATIVE_CONTROL_SELECTOR;

        var cbEl = /** @type {?MDCSelectionControlState} */this.root_.querySelector(NATIVE_CONTROL_SELECTOR);
        return cbEl;
      }
    }], [{
      key: 'attachTo',
      value: function attachTo(root) {
        return new MDCCheckbox(root);
      }
    }]);

    function MDCCheckbox() {
      var _ref;

      classCallCheck(this, MDCCheckbox);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      /** @private {!MDCRipple} */
      var _this = possibleConstructorReturn(this, (_ref = MDCCheckbox.__proto__ || Object.getPrototypeOf(MDCCheckbox)).call.apply(_ref, [this].concat(args)));

      _this.ripple_ = _this.initRipple_();
      return _this;
    }

    /**
     * @return {!MDCRipple}
     * @private
     */


    createClass(MDCCheckbox, [{
      key: 'initRipple_',
      value: function initRipple_() {
        var _this2 = this;

        var MATCHES = getMatchesProperty(HTMLElement.prototype);
        var adapter = _extends(MDCRipple.createAdapter(this), {
          isUnbounded: function isUnbounded() {
            return true;
          },
          isSurfaceActive: function isSurfaceActive() {
            return _this2.nativeCb_[MATCHES](':active');
          },
          registerInteractionHandler: function registerInteractionHandler(type, handler) {
            return _this2.nativeCb_.addEventListener(type, handler);
          },
          deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
            return _this2.nativeCb_.removeEventListener(type, handler);
          }
        });
        var foundation = new MDCRippleFoundation(adapter);
        return new MDCRipple(this.root_, foundation);
      }

      /** @return {!MDCCheckboxFoundation} */

    }, {
      key: 'getDefaultFoundation',
      value: function getDefaultFoundation() {
        var _this3 = this;

        return new MDCCheckboxFoundation({
          addClass: function addClass(className) {
            return _this3.root_.classList.add(className);
          },
          removeClass: function removeClass(className) {
            return _this3.root_.classList.remove(className);
          },
          setNativeControlAttr: function setNativeControlAttr(attr, value) {
            return _this3.nativeCb_.setAttribute(attr, value);
          },
          removeNativeControlAttr: function removeNativeControlAttr(attr) {
            return _this3.nativeCb_.removeAttribute(attr);
          },
          registerAnimationEndHandler: function registerAnimationEndHandler(handler) {
            return _this3.root_.addEventListener(getCorrectEventName(window, 'animationend'), handler);
          },
          deregisterAnimationEndHandler: function deregisterAnimationEndHandler(handler) {
            return _this3.root_.removeEventListener(getCorrectEventName(window, 'animationend'), handler);
          },
          registerChangeHandler: function registerChangeHandler(handler) {
            return _this3.nativeCb_.addEventListener('change', handler);
          },
          deregisterChangeHandler: function deregisterChangeHandler(handler) {
            return _this3.nativeCb_.removeEventListener('change', handler);
          },
          getNativeControl: function getNativeControl() {
            return _this3.nativeCb_;
          },
          forceLayout: function forceLayout() {
            return _this3.root_.offsetWidth;
          },
          isAttachedToDOM: function isAttachedToDOM() {
            return Boolean(_this3.root_.parentNode);
          }
        });
      }

      /** @return {!MDCRipple} */

    }, {
      key: 'destroy',
      value: function destroy() {
        this.ripple_.destroy();
        get(MDCCheckbox.prototype.__proto__ || Object.getPrototypeOf(MDCCheckbox.prototype), 'destroy', this).call(this);
      }
    }, {
      key: 'ripple',
      get: function get$$1() {
        return this.ripple_;
      }

      /** @return {boolean} */

    }, {
      key: 'checked',
      get: function get$$1() {
        return this.foundation_.isChecked();
      }

      /** @param {boolean} checked */
      ,
      set: function set$$1(checked) {
        this.foundation_.setChecked(checked);
      }

      /** @return {boolean} */

    }, {
      key: 'indeterminate',
      get: function get$$1() {
        return this.foundation_.isIndeterminate();
      }

      /** @param {boolean} indeterminate */
      ,
      set: function set$$1(indeterminate) {
        this.foundation_.setIndeterminate(indeterminate);
      }

      /** @return {boolean} */

    }, {
      key: 'disabled',
      get: function get$$1() {
        return this.foundation_.isDisabled();
      }

      /** @param {boolean} disabled */
      ,
      set: function set$$1(disabled) {
        this.foundation_.setDisabled(disabled);
      }

      /** @return {?string} */

    }, {
      key: 'value',
      get: function get$$1() {
        return this.foundation_.getValue();
      }

      /** @param {?string} value */
      ,
      set: function set$$1(value) {
        this.foundation_.setValue(value);
      }
    }]);
    return MDCCheckbox;
  }(MDCComponent);

  var _templateObject$9 = taggedTemplateLiteral(['\n      ', '\n      <div class="mdc-checkbox">\n        <input type="checkbox"\n          class="mdc-checkbox__native-control"\n          checked="', '" value="', '"\n          on-change="', '">\n        <div class="mdc-checkbox__background">\n          <svg class="mdc-checkbox__checkmark"\n              viewBox="0 0 24 24">\n            <path class="mdc-checkbox__checkmark-path"\n              fill="none"\n              stroke="white"\n              d="M1.73,12.91 8.1,19.28 22.79,4.59"/>\n          </svg>\n          <div class="mdc-checkbox__mixedmark"></div>\n        </div>\n      </div>'], ['\n      ', '\n      <div class="mdc-checkbox">\n        <input type="checkbox"\n          class="mdc-checkbox__native-control"\n          checked="', '" value="', '"\n          on-change="', '">\n        <div class="mdc-checkbox__background">\n          <svg class="mdc-checkbox__checkmark"\n              viewBox="0 0 24 24">\n            <path class="mdc-checkbox__checkmark-path"\n              fill="none"\n              stroke="white"\n              d="M1.73,12.91 8.1,19.28 22.79,4.59"/>\n          </svg>\n          <div class="mdc-checkbox__mixedmark"></div>\n        </div>\n      </div>']);

  var MDCWCCheckbox = function (_MDCWebComponentMixin) {
    inherits(MDCWCCheckbox, _MDCWebComponentMixin);

    function MDCWCCheckbox() {
      classCallCheck(this, MDCWCCheckbox);
      return possibleConstructorReturn(this, (MDCWCCheckbox.__proto__ || Object.getPrototypeOf(MDCWCCheckbox)).apply(this, arguments));
    }

    return MDCWCCheckbox;
  }(MDCWebComponentMixin(MDCCheckbox));

  var Checkbox = function (_FormableComponentEle) {
    inherits(Checkbox, _FormableComponentEle);
    createClass(Checkbox, [{
      key: '_createRoot',


      // TODO(sorvell): need to add delegatesFocus to ShadyDOM. Using it here,
      // allows tabIndex order to be changed (note, > 0 is dubious but -1 seems useful)
      value: function _createRoot() {
        return this.attachShadow({ mode: 'open', delegatesFocus: true });
      }
    }], [{
      key: 'ComponentClass',
      get: function get$$1() {
        return MDCWCCheckbox;
      }
    }, {
      key: 'componentSelector',
      get: function get$$1() {
        return '.mdc-checkbox';
      }
    }, {
      key: 'properties',
      get: function get$$1() {
        return {
          checked: Boolean,
          indeterminate: Boolean,
          disabled: Boolean,
          value: String
        };
      }
    }]);

    function Checkbox() {
      classCallCheck(this, Checkbox);

      var _this2 = possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call(this));

      _this2._asyncComponent = true;
      _this2.checked = false;
      _this2.indeterminate = false;
      _this2.disabled = false;
      _this2.value = '';
      _this2._boundInputChangeHandler = _this2._inputChangeHandler.bind(_this2);
      return _this2;
    }

    // TODO(sorvell) #css: add outline none to avoid focus decoration


    createClass(Checkbox, [{
      key: '_renderStyle',
      value: function _renderStyle() {
        return style$4;
      }
    }, {
      key: '_render',
      value: function _render(_ref) {
        var checked = _ref.checked,
            value = _ref.value;

        return html$1(_templateObject$9, this._renderStyle(), checked, value, this._boundInputChangeHandler);
      }
    }, {
      key: '_inputChangeHandler',
      value: function _inputChangeHandler(e) {
        this.checked = e.target.checked;
      }
    }, {
      key: 'indeterminate',
      get: function get$$1() {
        return this._component && this._component.indeterminate;
      },
      set: function set$$1(value) {
        this.componentReady().then(function (component) {
          return component.indeterminate = value;
        });
      }
    }, {
      key: 'disabled',
      get: function get$$1() {
        return this._component && this._component.disabled;
      },
      set: function set$$1(value) {
        this.componentReady().then(function (component) {
          return component.disabled = value;
        });
      }
    }]);
    return Checkbox;
  }(FormableComponentElement);

  customElements.define('mwc-checkbox', Checkbox);

  var _templateObject$a = taggedTemplateLiteral(['<style>.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:\'liga\';-webkit-font-smoothing:antialiased}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var: 1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug::before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-fab{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:transparent;will-change:transform, opacity;box-shadow:0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12);display:inline-flex;position:relative;justify-content:center;box-sizing:border-box;width:56px;height:56px;padding:0;transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1),opacity 15ms linear 30ms,transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1);border:none;border-radius:50%;fill:currentColor;cursor:pointer;user-select:none;-moz-appearance:none;-webkit-appearance:none;overflow:hidden;background-color:#018786;color:#fff;color:var(--mdc-theme-on-secondary, #fff)}.mdc-fab::before,.mdc-fab::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-fab::before{transition:opacity 15ms linear;z-index:1}.mdc-fab.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-fab.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-fab.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-fab.mdc-ripple-upgraded--foreground-activation::after{animation:225ms mdc-ripple-fg-radius-in forwards,75ms mdc-ripple-fg-opacity-in forwards}.mdc-fab.mdc-ripple-upgraded--foreground-deactivation::after{animation:150ms mdc-ripple-fg-opacity-out;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-fab::before,.mdc-fab::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-fab.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-fab::-moz-focus-inner{padding:0;border:0}.mdc-fab:hover,.mdc-fab:focus{box-shadow:0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)}.mdc-fab:active{box-shadow:0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)}.mdc-fab:active,.mdc-fab:focus{outline:none}.mdc-fab:hover{cursor:pointer}.mdc-fab>svg{width:100%}@supports not (-ms-ime-align: auto){.mdc-fab{background-color:var(--mdc-theme-secondary, #018786)}}.mdc-fab .mdc-fab__icon{width:24px;height:24px;font-size:24px}.mdc-fab::before,.mdc-fab::after{background-color:#fff}@supports not (-ms-ime-align: auto){.mdc-fab::before,.mdc-fab::after{background-color:var(--mdc-theme-on-secondary, #fff)}}.mdc-fab:hover::before{opacity:.08}.mdc-fab:not(.mdc-ripple-upgraded):focus::before,.mdc-fab.mdc-ripple-upgraded--background-focused::before{transition-duration:75ms;opacity:.24}.mdc-fab:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-fab:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.32}.mdc-fab.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: .32}.mdc-fab--mini{width:40px;height:40px}.mdc-fab__icon{margin:auto;transition:transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);fill:currentColor;will-change:transform}.mdc-fab--exited{transform:scale(0);transition:opacity 15ms linear 150ms,transform 180ms 0ms cubic-bezier(0.4, 0, 1, 1);opacity:0}.mdc-fab--exited .mdc-fab__icon{transform:scale(0);transition:transform 135ms 0ms cubic-bezier(0.4, 0, 1, 1)}:host{outline:none}\n</style>'], ['<style>.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:\'liga\';-webkit-font-smoothing:antialiased}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var: 1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug::before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-fab{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:transparent;will-change:transform, opacity;box-shadow:0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12);display:inline-flex;position:relative;justify-content:center;box-sizing:border-box;width:56px;height:56px;padding:0;transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1),opacity 15ms linear 30ms,transform 270ms 0ms cubic-bezier(0, 0, 0.2, 1);border:none;border-radius:50%;fill:currentColor;cursor:pointer;user-select:none;-moz-appearance:none;-webkit-appearance:none;overflow:hidden;background-color:#018786;color:#fff;color:var(--mdc-theme-on-secondary, #fff)}.mdc-fab::before,.mdc-fab::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-fab::before{transition:opacity 15ms linear;z-index:1}.mdc-fab.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-fab.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-fab.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-fab.mdc-ripple-upgraded--foreground-activation::after{animation:225ms mdc-ripple-fg-radius-in forwards,75ms mdc-ripple-fg-opacity-in forwards}.mdc-fab.mdc-ripple-upgraded--foreground-deactivation::after{animation:150ms mdc-ripple-fg-opacity-out;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-fab::before,.mdc-fab::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-fab.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-fab::-moz-focus-inner{padding:0;border:0}.mdc-fab:hover,.mdc-fab:focus{box-shadow:0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)}.mdc-fab:active{box-shadow:0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)}.mdc-fab:active,.mdc-fab:focus{outline:none}.mdc-fab:hover{cursor:pointer}.mdc-fab>svg{width:100%}@supports not (-ms-ime-align: auto){.mdc-fab{background-color:var(--mdc-theme-secondary, #018786)}}.mdc-fab .mdc-fab__icon{width:24px;height:24px;font-size:24px}.mdc-fab::before,.mdc-fab::after{background-color:#fff}@supports not (-ms-ime-align: auto){.mdc-fab::before,.mdc-fab::after{background-color:var(--mdc-theme-on-secondary, #fff)}}.mdc-fab:hover::before{opacity:.08}.mdc-fab:not(.mdc-ripple-upgraded):focus::before,.mdc-fab.mdc-ripple-upgraded--background-focused::before{transition-duration:75ms;opacity:.24}.mdc-fab:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-fab:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.32}.mdc-fab.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: .32}.mdc-fab--mini{width:40px;height:40px}.mdc-fab__icon{margin:auto;transition:transform 180ms 90ms cubic-bezier(0, 0, 0.2, 1);fill:currentColor;will-change:transform}.mdc-fab--exited{transform:scale(0);transition:opacity 15ms linear 150ms,transform 180ms 0ms cubic-bezier(0.4, 0, 1, 1);opacity:0}.mdc-fab--exited .mdc-fab__icon{transform:scale(0);transition:transform 135ms 0ms cubic-bezier(0.4, 0, 1, 1)}:host{outline:none}\n</style>']);

  var style$5 = html$1(_templateObject$a);

  var _templateObject$b = taggedTemplateLiteral(['\n      ', '\n      <button class$="mdc-fab ', '" disabled?="', '" aria-label$="', '">\n        ', '\n      </button>'], ['\n      ', '\n      <button class$="mdc-fab ', '" disabled?="', '" aria-label$="', '">\n        ', '\n      </button>']),
      _templateObject2$1 = taggedTemplateLiteral(['<span class="material-icons mdc-fab__icon">', '</span>'], ['<span class="material-icons mdc-fab__icon">', '</span>']);

  var Fab = function (_LitElement) {
    inherits(Fab, _LitElement);
    createClass(Fab, null, [{
      key: 'properties',
      get: function get$$1() {
        return {
          mini: Boolean,
          exited: Boolean,
          disabled: Boolean,
          icon: String,
          label: String
        };
      }
    }]);

    function Fab() {
      classCallCheck(this, Fab);

      var _this = possibleConstructorReturn(this, (Fab.__proto__ || Object.getPrototypeOf(Fab)).call(this));

      _this.icon = '';
      _this.mini = false;
      _this.exited = false;
      _this.label = '';
      return _this;
    }

    createClass(Fab, [{
      key: '_createRoot',
      value: function _createRoot() {
        return this.attachShadow({ mode: 'open', delegatesFocus: true });
      }
    }, {
      key: 'ready',
      value: async function ready() {
        get(Fab.prototype.__proto__ || Object.getPrototypeOf(Fab.prototype), 'ready', this).call(this);
        await afterNextRender();
        this._ripple = new MDCWCRipple(this._root.querySelector('.mdc-fab'));
      }
    }, {
      key: '_renderStyle',
      value: function _renderStyle() {
        return style$5;
      }
    }, {
      key: '_render',
      value: function _render(_ref) {
        var icon = _ref.icon,
            mini = _ref.mini,
            exited = _ref.exited,
            disabled = _ref.disabled,
            label = _ref.label;

        var hostClasses = classString({
          'mdc-fab--mini': mini,
          'mdc-fab--exited': exited
        });
        return html$1(_templateObject$b, this._renderStyle(), hostClasses, disabled, label || icon, icon ? html$1(_templateObject2$1, icon) : '');
      }
    }]);
    return Fab;
  }(LitElement);

  customElements.define('mwc-fab', Fab);

  var _templateObject$c = taggedTemplateLiteral(['<style>@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var: 1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug::before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-icon-toggle{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:transparent;will-change:transform, opacity;color:rgba(0,0,0,0.87);color:var(--mdc-theme-text-primary-on-light, rgba(0,0,0,0.87));display:flex;position:relative;align-items:center;justify-content:center;box-sizing:border-box;width:48px;height:48px;padding:12px;outline:none;font-size:1.5rem;cursor:pointer;user-select:none;will-change:initial}.mdc-icon-toggle::before,.mdc-icon-toggle::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-icon-toggle::before{transition:opacity 15ms linear;z-index:1}.mdc-icon-toggle.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-icon-toggle.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-icon-toggle.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-icon-toggle.mdc-ripple-upgraded--foreground-activation::after{animation:225ms mdc-ripple-fg-radius-in forwards,75ms mdc-ripple-fg-opacity-in forwards}.mdc-icon-toggle.mdc-ripple-upgraded--foreground-deactivation::after{animation:150ms mdc-ripple-fg-opacity-out;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-icon-toggle::before,.mdc-icon-toggle::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-icon-toggle.mdc-ripple-upgraded::before,.mdc-icon-toggle.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-icon-toggle.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-icon-toggle::before,.mdc-icon-toggle::after{background-color:#000}.mdc-icon-toggle:hover::before{opacity:.04}.mdc-icon-toggle:not(.mdc-ripple-upgraded):focus::before,.mdc-icon-toggle.mdc-ripple-upgraded--background-focused::before{transition-duration:75ms;opacity:.12}.mdc-icon-toggle:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-icon-toggle:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.16}.mdc-icon-toggle.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: .16}.mdc-icon-toggle::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-icon-toggle--disabled{color:rgba(0,0,0,0.38);color:var(--mdc-theme-text-disabled-on-light, rgba(0,0,0,0.38));pointer-events:none}.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:\'liga\';-webkit-font-smoothing:antialiased}:host{display:inline-block;outline:none}\n</style>'], ['<style>@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var: 1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug::before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-icon-toggle{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:transparent;will-change:transform, opacity;color:rgba(0,0,0,0.87);color:var(--mdc-theme-text-primary-on-light, rgba(0,0,0,0.87));display:flex;position:relative;align-items:center;justify-content:center;box-sizing:border-box;width:48px;height:48px;padding:12px;outline:none;font-size:1.5rem;cursor:pointer;user-select:none;will-change:initial}.mdc-icon-toggle::before,.mdc-icon-toggle::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-icon-toggle::before{transition:opacity 15ms linear;z-index:1}.mdc-icon-toggle.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-icon-toggle.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-icon-toggle.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-icon-toggle.mdc-ripple-upgraded--foreground-activation::after{animation:225ms mdc-ripple-fg-radius-in forwards,75ms mdc-ripple-fg-opacity-in forwards}.mdc-icon-toggle.mdc-ripple-upgraded--foreground-deactivation::after{animation:150ms mdc-ripple-fg-opacity-out;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-icon-toggle::before,.mdc-icon-toggle::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-icon-toggle.mdc-ripple-upgraded::before,.mdc-icon-toggle.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-icon-toggle.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-icon-toggle::before,.mdc-icon-toggle::after{background-color:#000}.mdc-icon-toggle:hover::before{opacity:.04}.mdc-icon-toggle:not(.mdc-ripple-upgraded):focus::before,.mdc-icon-toggle.mdc-ripple-upgraded--background-focused::before{transition-duration:75ms;opacity:.12}.mdc-icon-toggle:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-icon-toggle:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.16}.mdc-icon-toggle.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: .16}.mdc-icon-toggle::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-icon-toggle--disabled{color:rgba(0,0,0,0.38);color:var(--mdc-theme-text-disabled-on-light, rgba(0,0,0,0.38));pointer-events:none}.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:\'liga\';-webkit-font-smoothing:antialiased}:host{display:inline-block;outline:none}\n</style>']);

  var style$6 = html$1(_templateObject$c);

  /**
   * @license
   * Copyright 2017 Google Inc. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /* eslint no-unused-vars: [2, {"args": "none"}] */

  /**
   * Adapter for MDC Icon Toggle. Provides an interface for managing
   * - classes
   * - dom
   * - inner text
   * - event handlers
   * - event dispatch
   *
   * Additionally, provides type information for the adapter to the Closure
   * compiler.
   *
   * Implement this adapter for your framework of choice to delegate updates to
   * the component in your framework of choice. See architecture documentation
   * for more details.
   * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
   *
   * @record
   */

  var MDCIconToggleAdapter = function () {
    function MDCIconToggleAdapter() {
      classCallCheck(this, MDCIconToggleAdapter);
    }

    createClass(MDCIconToggleAdapter, [{
      key: "addClass",

      /** @param {string} className */
      value: function addClass(className) {}

      /** @param {string} className */

    }, {
      key: "removeClass",
      value: function removeClass(className) {}

      /**
       * @param {string} type
       * @param {!EventListener} handler
       */

    }, {
      key: "registerInteractionHandler",
      value: function registerInteractionHandler(type, handler) {}

      /**
       * @param {string} type
       * @param {!EventListener} handler
       */

    }, {
      key: "deregisterInteractionHandler",
      value: function deregisterInteractionHandler(type, handler) {}

      /** @param {string} text */

    }, {
      key: "setText",
      value: function setText(text) {}

      /** @return {number} */

    }, {
      key: "getTabIndex",
      value: function getTabIndex() {}

      /** @param {number} tabIndex */

    }, {
      key: "setTabIndex",
      value: function setTabIndex(tabIndex) {}

      /**
       * @param {string} name
       * @return {string}
       */

    }, {
      key: "getAttr",
      value: function getAttr(name) {}

      /**
       * @param {string} name
       * @param {string} value
       */

    }, {
      key: "setAttr",
      value: function setAttr(name, value) {}

      /** @param {string} name */

    }, {
      key: "rmAttr",
      value: function rmAttr(name) {}

      /** @param {!IconToggleEvent} evtData */

    }, {
      key: "notifyChange",
      value: function notifyChange(evtData) {}
    }]);
    return MDCIconToggleAdapter;
  }();

  /**
   * @license
   * Copyright 2016 Google Inc. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /** @enum {string} */
  var cssClasses$2 = {
    ROOT: 'mdc-icon-toggle',
    DISABLED: 'mdc-icon-toggle--disabled'
  };

  /** @enum {string} */
  var strings$2 = {
    DATA_TOGGLE_ON: 'data-toggle-on',
    DATA_TOGGLE_OFF: 'data-toggle-off',
    ARIA_PRESSED: 'aria-pressed',
    ARIA_DISABLED: 'aria-disabled',
    ARIA_LABEL: 'aria-label',
    CHANGE_EVENT: 'MDCIconToggle:change'
  };

  /**
   * @license
   * Copyright 2016 Google Inc. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
   * @extends {MDCFoundation<!MDCIconToggleAdapter>}
   */

  var MDCIconToggleFoundation = function (_MDCFoundation) {
    inherits(MDCIconToggleFoundation, _MDCFoundation);
    createClass(MDCIconToggleFoundation, null, [{
      key: 'cssClasses',
      get: function get$$1() {
        return cssClasses$2;
      }
    }, {
      key: 'strings',
      get: function get$$1() {
        return strings$2;
      }
    }, {
      key: 'defaultAdapter',
      get: function get$$1() {
        return {
          addClass: function addClass() /* className: string */{},
          removeClass: function removeClass() /* className: string */{},
          registerInteractionHandler: function registerInteractionHandler() /* type: string, handler: EventListener */{},
          deregisterInteractionHandler: function deregisterInteractionHandler() /* type: string, handler: EventListener */{},
          setText: function setText() /* text: string */{},
          getTabIndex: function getTabIndex() {
            return (/* number */0
            );
          },
          setTabIndex: function setTabIndex() /* tabIndex: number */{},
          getAttr: function getAttr() {
            return (/* name: string */ /* string */''
            );
          },
          setAttr: function setAttr() /* name: string, value: string */{},
          rmAttr: function rmAttr() /* name: string */{},
          notifyChange: function notifyChange() /* evtData: IconToggleEvent */{}
        };
      }
    }]);

    function MDCIconToggleFoundation(adapter) {
      classCallCheck(this, MDCIconToggleFoundation);

      /** @private {boolean} */
      var _this = possibleConstructorReturn(this, (MDCIconToggleFoundation.__proto__ || Object.getPrototypeOf(MDCIconToggleFoundation)).call(this, _extends(MDCIconToggleFoundation.defaultAdapter, adapter)));

      _this.on_ = false;

      /** @private {boolean} */
      _this.disabled_ = false;

      /** @private {number} */
      _this.savedTabIndex_ = -1;

      /** @private {?IconToggleState} */
      _this.toggleOnData_ = null;

      /** @private {?IconToggleState} */
      _this.toggleOffData_ = null;

      _this.clickHandler_ = /** @private {!EventListener} */function () {
        return _this.toggleFromEvt_();
      };

      /** @private {boolean} */
      _this.isHandlingKeydown_ = false;

      _this.keydownHandler_ = /** @private {!EventListener} */function ( /** @type {!KeyboardKey} */evt) {
        if (isSpace(evt)) {
          _this.isHandlingKeydown_ = true;
          return evt.preventDefault();
        }
      };

      _this.keyupHandler_ = /** @private {!EventListener} */function ( /** @type {!KeyboardKey} */evt) {
        if (isSpace(evt)) {
          _this.isHandlingKeydown_ = false;
          _this.toggleFromEvt_();
        }
      };
      return _this;
    }

    createClass(MDCIconToggleFoundation, [{
      key: 'init',
      value: function init() {
        this.refreshToggleData();
        this.savedTabIndex_ = this.adapter_.getTabIndex();
        this.adapter_.registerInteractionHandler('click', this.clickHandler_);
        this.adapter_.registerInteractionHandler('keydown', this.keydownHandler_);
        this.adapter_.registerInteractionHandler('keyup', this.keyupHandler_);
      }
    }, {
      key: 'refreshToggleData',
      value: function refreshToggleData() {
        var _MDCIconToggleFoundat = MDCIconToggleFoundation.strings,
            DATA_TOGGLE_ON = _MDCIconToggleFoundat.DATA_TOGGLE_ON,
            DATA_TOGGLE_OFF = _MDCIconToggleFoundat.DATA_TOGGLE_OFF;

        this.toggleOnData_ = this.parseJsonDataAttr_(DATA_TOGGLE_ON);
        this.toggleOffData_ = this.parseJsonDataAttr_(DATA_TOGGLE_OFF);
      }
    }, {
      key: 'destroy',
      value: function destroy() {
        this.adapter_.deregisterInteractionHandler('click', this.clickHandler_);
        this.adapter_.deregisterInteractionHandler('keydown', this.keydownHandler_);
        this.adapter_.deregisterInteractionHandler('keyup', this.keyupHandler_);
      }

      /** @private */

    }, {
      key: 'toggleFromEvt_',
      value: function toggleFromEvt_() {
        this.toggle();
        var isOn = this.on_;

        this.adapter_.notifyChange( /** @type {!IconToggleEvent} */{ isOn: isOn });
      }

      /** @return {boolean} */

    }, {
      key: 'isOn',
      value: function isOn() {
        return this.on_;
      }

      /** @param {boolean=} isOn */

    }, {
      key: 'toggle',
      value: function toggle() {
        var isOn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !this.on_;

        this.on_ = isOn;

        var _MDCIconToggleFoundat2 = MDCIconToggleFoundation.strings,
            ARIA_LABEL = _MDCIconToggleFoundat2.ARIA_LABEL,
            ARIA_PRESSED = _MDCIconToggleFoundat2.ARIA_PRESSED;


        if (this.on_) {
          this.adapter_.setAttr(ARIA_PRESSED, 'true');
        } else {
          this.adapter_.setAttr(ARIA_PRESSED, 'false');
        }

        var _ref = this.on_ ? this.toggleOffData_ : this.toggleOnData_,
            classToRemove = _ref.cssClass;

        if (classToRemove) {
          this.adapter_.removeClass(classToRemove);
        }

        var _ref2 = this.on_ ? this.toggleOnData_ : this.toggleOffData_,
            content = _ref2.content,
            label = _ref2.label,
            cssClass = _ref2.cssClass;

        if (cssClass) {
          this.adapter_.addClass(cssClass);
        }
        if (content) {
          this.adapter_.setText(content);
        }
        if (label) {
          this.adapter_.setAttr(ARIA_LABEL, label);
        }
      }

      /**
       * @param {string} dataAttr
       * @return {!IconToggleState}
       */

    }, {
      key: 'parseJsonDataAttr_',
      value: function parseJsonDataAttr_(dataAttr) {
        var val = this.adapter_.getAttr(dataAttr);
        if (!val) {
          return {};
        }
        return (/** @type {!IconToggleState} */JSON.parse(val)
        );
      }

      /** @return {boolean} */

    }, {
      key: 'isDisabled',
      value: function isDisabled() {
        return this.disabled_;
      }

      /** @param {boolean} isDisabled */

    }, {
      key: 'setDisabled',
      value: function setDisabled(isDisabled) {
        this.disabled_ = isDisabled;

        var DISABLED = MDCIconToggleFoundation.cssClasses.DISABLED;
        var ARIA_DISABLED = MDCIconToggleFoundation.strings.ARIA_DISABLED;


        if (this.disabled_) {
          this.savedTabIndex_ = this.adapter_.getTabIndex();
          this.adapter_.setTabIndex(-1);
          this.adapter_.setAttr(ARIA_DISABLED, 'true');
          this.adapter_.addClass(DISABLED);
        } else {
          this.adapter_.setTabIndex(this.savedTabIndex_);
          this.adapter_.rmAttr(ARIA_DISABLED);
          this.adapter_.removeClass(DISABLED);
        }
      }

      /** @return {boolean} */

    }, {
      key: 'isKeyboardActivated',
      value: function isKeyboardActivated() {
        return this.isHandlingKeydown_;
      }
    }]);
    return MDCIconToggleFoundation;
  }(MDCFoundation);

  /**
   * @param {!KeyboardKey} keyboardKey
   * @return {boolean}
   */
  function isSpace(keyboardKey) {
    return keyboardKey.key === 'Space' || keyboardKey.keyCode === 32;
  }

  /** @record */

  var IconToggleState = function IconToggleState() {
    classCallCheck(this, IconToggleState);
  };

  /**
   * The aria-label value of the icon toggle, or undefined if there is no aria-label.
   * @export {string|undefined}
   */


  IconToggleState.prototype.label;

  /**
   * The text for the icon toggle, or undefined if there is no text.
   * @export {string|undefined}
   */
  IconToggleState.prototype.content;

  /**
   * The CSS class to add to the icon toggle, or undefined if there is no CSS class.
   * @export {string|undefined}
   */
  IconToggleState.prototype.cssClass;

  /**
   * @license
   * Copyright 2016 Google Inc. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
   * @extends {MDCComponent<!MDCIconToggleFoundation>}
   */

  var MDCIconToggle = function (_MDCComponent) {
    inherits(MDCIconToggle, _MDCComponent);
    createClass(MDCIconToggle, null, [{
      key: 'attachTo',
      value: function attachTo(root) {
        return new MDCIconToggle(root);
      }
    }]);

    function MDCIconToggle() {
      var _ref;

      classCallCheck(this, MDCIconToggle);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      /** @private {!MDCRipple} */
      var _this = possibleConstructorReturn(this, (_ref = MDCIconToggle.__proto__ || Object.getPrototypeOf(MDCIconToggle)).call.apply(_ref, [this].concat(args)));

      _this.ripple_ = _this.initRipple_();
      return _this;
    }

    /** @return {!Element} */


    createClass(MDCIconToggle, [{
      key: 'initRipple_',


      /**
       * @return {!MDCRipple}
       * @private
       */
      value: function initRipple_() {
        var _this2 = this;

        var adapter = _extends(MDCRipple.createAdapter(this), {
          isUnbounded: function isUnbounded() {
            return true;
          },
          isSurfaceActive: function isSurfaceActive() {
            return _this2.foundation_.isKeyboardActivated();
          }
        });
        var foundation = new MDCRippleFoundation(adapter);
        return new MDCRipple(this.root_, foundation);
      }
    }, {
      key: 'destroy',
      value: function destroy() {
        this.ripple_.destroy();
        get(MDCIconToggle.prototype.__proto__ || Object.getPrototypeOf(MDCIconToggle.prototype), 'destroy', this).call(this);
      }

      /** @return {!MDCIconToggleFoundation} */

    }, {
      key: 'getDefaultFoundation',
      value: function getDefaultFoundation() {
        var _this3 = this;

        return new MDCIconToggleFoundation({
          addClass: function addClass(className) {
            return _this3.iconEl_.classList.add(className);
          },
          removeClass: function removeClass(className) {
            return _this3.iconEl_.classList.remove(className);
          },
          registerInteractionHandler: function registerInteractionHandler(type, handler) {
            return _this3.root_.addEventListener(type, handler);
          },
          deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
            return _this3.root_.removeEventListener(type, handler);
          },
          setText: function setText(text) {
            return _this3.iconEl_.textContent = text;
          },
          getTabIndex: function getTabIndex() {
            return (/* number */_this3.root_.tabIndex
            );
          },
          setTabIndex: function setTabIndex(tabIndex) {
            return _this3.root_.tabIndex = tabIndex;
          },
          getAttr: function getAttr(name, value) {
            return _this3.root_.getAttribute(name, value);
          },
          setAttr: function setAttr(name, value) {
            return _this3.root_.setAttribute(name, value);
          },
          rmAttr: function rmAttr(name) {
            return _this3.root_.removeAttribute(name);
          },
          notifyChange: function notifyChange(evtData) {
            return _this3.emit(MDCIconToggleFoundation.strings.CHANGE_EVENT, evtData);
          }
        });
      }
    }, {
      key: 'initialSyncWithDOM',
      value: function initialSyncWithDOM() {
        this.on = this.root_.getAttribute(MDCIconToggleFoundation.strings.ARIA_PRESSED) === 'true';
        this.disabled = this.root_.getAttribute(MDCIconToggleFoundation.strings.ARIA_DISABLED) === 'true';
      }

      /** @return {!MDCRipple} */

    }, {
      key: 'refreshToggleData',
      value: function refreshToggleData() {
        this.foundation_.refreshToggleData();
      }
    }, {
      key: 'iconEl_',
      get: function get$$1() {
        var sel = this.root_.dataset['iconInnerSelector'];

        return sel ?
        /** @type {!Element} */this.root_.querySelector(sel) : this.root_;
      }
    }, {
      key: 'ripple',
      get: function get$$1() {
        return this.ripple_;
      }

      /** @return {boolean} */

    }, {
      key: 'on',
      get: function get$$1() {
        return this.foundation_.isOn();
      }

      /** @param {boolean} isOn */
      ,
      set: function set$$1(isOn) {
        this.foundation_.toggle(isOn);
      }

      /** @return {boolean} */

    }, {
      key: 'disabled',
      get: function get$$1() {
        return this.foundation_.isDisabled();
      }

      /** @param {boolean} isDisabled */
      ,
      set: function set$$1(isDisabled) {
        this.foundation_.setDisabled(isDisabled);
      }
    }]);
    return MDCIconToggle;
  }(MDCComponent);

  var _templateObject$d = taggedTemplateLiteral(['\n      ', '\n      <span class$="mdc-icon-toggle material-icons ', '"\n            role="button"\n            aria-disabled$="', '"\n            tabindex="0"\n            data-toggle-on$=\'{"label": "', '", "content": "', '"}\'\n            data-toggle-off$=\'{"label": "', '", "content": "', '"}\'\n            on-MDCIconToggle:change="', '">\n      </span>'], ['\n      ', '\n      <span class$="mdc-icon-toggle material-icons ', '"\n            role="button"\n            aria-disabled$="', '"\n            tabindex="0"\n            data-toggle-on$=\'{"label": "', '", "content": "', '"}\'\n            data-toggle-off$=\'{"label": "', '", "content": "', '"}\'\n            on-MDCIconToggle:change="', '">\n      </span>']);

  var MDCWCIconToggle = function (_MDCWebComponentMixin) {
    inherits(MDCWCIconToggle, _MDCWebComponentMixin);

    function MDCWCIconToggle() {
      classCallCheck(this, MDCWCIconToggle);
      return possibleConstructorReturn(this, (MDCWCIconToggle.__proto__ || Object.getPrototypeOf(MDCWCIconToggle)).apply(this, arguments));
    }

    return MDCWCIconToggle;
  }(MDCWebComponentMixin(MDCIconToggle));

  var IconToggle = function (_ComponentElement) {
    inherits(IconToggle, _ComponentElement);
    createClass(IconToggle, null, [{
      key: 'ComponentClass',
      get: function get$$1() {
        return MDCWCIconToggle;
      }
    }, {
      key: 'componentSelector',
      get: function get$$1() {
        return '.mdc-icon-toggle';
      }
    }, {
      key: 'properties',
      get: function get$$1() {
        return {
          disabled: Boolean,
          on: Boolean,
          icon: String,
          offIcon: String,
          label: '',
          offLabel: ''
        };
      }
    }]);

    function IconToggle() {
      classCallCheck(this, IconToggle);

      var _this2 = possibleConstructorReturn(this, (IconToggle.__proto__ || Object.getPrototypeOf(IconToggle)).call(this));

      _this2._asyncComponent = true;
      _this2.icon = '';
      _this2.offIcon = '';
      _this2.label = '';
      _this2.offLabel = '';
      _this2.disabled = false;
      _this2.on = false;
      _this2._boundChangeHandler = _this2._changeHandler.bind(_this2);
      return _this2;
    }

    createClass(IconToggle, [{
      key: '_createRoot',
      value: function _createRoot() {
        return this.attachShadow({ mode: 'open', delegatesFocus: true });
      }
    }, {
      key: '_renderStyle',
      value: function _renderStyle() {
        return style$6;
      }

      // TODO(sorvell) #css: added display

    }, {
      key: '_render',
      value: function _render(_ref) {
        var on = _ref.on,
            disabled = _ref.disabled,
            icon = _ref.icon,
            offIcon = _ref.offIcon,
            label = _ref.label,
            offLabel = _ref.offLabel;

        console.log(this);
        console.log(on, disabled, icon, offIcon, label, offLabel);
        offIcon = offIcon || icon;
        return html$1(_templateObject$d, this._renderStyle(), disabled ? 'mdc-icon-toggle--disabled' : '', disabled, label, icon, offLabel, offIcon, this._boundChangeHandler);
      }
    }, {
      key: '_didRender',
      value: function _didRender(props, changed) {
        if ('icon' in changed || 'label' in changed || 'offIcon' in changed || 'offLabel' in changed) {
          this.componentReady().then(function (component) {
            return component.refreshToggleData();
          });
        }
        if ('on' in changed) {
          this.componentReady().then(function (component) {
            return component.on = props.on;
          });
        }
      }
    }, {
      key: '_changeHandler',
      value: function _changeHandler(e) {
        this.on = e.detail.isOn;
      }
    }], [{
      key: 'formElementSelector',
      get: function get$$1() {
        return '.mdc-icon-toggle';
      }
    }]);
    return IconToggle;
  }(ComponentElement);

  customElements.define('mwc-icon-toggle', IconToggle);

  var _templateObject$e = taggedTemplateLiteral(['<style>@keyframes primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.70173, 0.49582);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.30244, 0.38135, 0.55, 0.95635);transform:translateX(83.67142%)}100%{transform:translateX(200.61106%)}}@keyframes primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.33473, 0.12482, 0.78584, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.66148)}100%{transform:scaleX(0.08)}}@keyframes secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.51506, 0.40969);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.28406, 0.8, 0.73371);transform:translateX(37.65191%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.62704, 0.6, 0.90203);transform:translateX(84.38617%)}100%{transform:translateX(160.27778%)}}@keyframes secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.20503, 0.05705, 0.57661, 0.45397);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.15231, 0.19643, 0.64837, 1.00432);transform:scaleX(0.4571)}44.15%{animation-timing-function:cubic-bezier(0.25776, -0.00316, 0.21176, 1.38179);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes buffering{to{transform:translateX(-10px)}}@keyframes primary-indeterminate-translate-reverse{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.70173, 0.49582);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.30244, 0.38135, 0.55, 0.95635);transform:translateX(-83.67142%)}100%{transform:translateX(-200.61106%)}}@keyframes secondary-indeterminate-translate-reverse{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.51506, 0.40969);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.28406, 0.8, 0.73371);transform:translateX(-37.65191%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.62704, 0.6, 0.90203);transform:translateX(-84.38617%)}100%{transform:translateX(-160.27778%)}}@keyframes buffering-reverse{to{transform:translateX(10px)}}.mdc-linear-progress{position:relative;width:100%;height:4px;transform:translateZ(0);transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);overflow:hidden}.mdc-linear-progress__bar{position:absolute;width:100%;height:100%;animation:none;transform-origin:top left;transition:transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__bar-inner{display:inline-block;position:absolute;width:100%;height:100%;animation:none}.mdc-linear-progress__buffering-dots{position:absolute;width:100%;height:100%;animation:buffering 250ms infinite linear;background-repeat:repeat-x;background-size:10px 4px}.mdc-linear-progress__buffer{position:absolute;width:100%;height:100%;transform-origin:top left;transition:transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__primary-bar{transform:scaleX(0)}.mdc-linear-progress__secondary-bar{visibility:hidden}.mdc-linear-progress--indeterminate .mdc-linear-progress__bar{transition:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{left:-145.166611%;animation:primary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar>.mdc-linear-progress__bar-inner{animation:primary-indeterminate-scale 2s infinite linear}.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{left:-54.888891%;animation:secondary-indeterminate-translate 2s infinite linear;visibility:visible}.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar>.mdc-linear-progress__bar-inner{animation:secondary-indeterminate-scale 2s infinite linear}.mdc-linear-progress--reversed .mdc-linear-progress__bar,.mdc-linear-progress--reversed .mdc-linear-progress__buffer{right:0;transform-origin:center right}.mdc-linear-progress--reversed .mdc-linear-progress__primary-bar{animation-name:primary-indeterminate-translate-reverse}.mdc-linear-progress--reversed .mdc-linear-progress__secondary-bar{animation-name:secondary-indeterminate-translate-reverse}.mdc-linear-progress--reversed .mdc-linear-progress__buffering-dots{animation:buffering-reverse 250ms infinite linear}.mdc-linear-progress--closed{opacity:0}.mdc-linear-progress__bar-inner{background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee)}.mdc-linear-progress__buffering-dots{background-image:url("data:image/svg+xml,%3Csvg version=\'1.1\' xmlns=\'http://www.w3.org/2000/svg\' xmlns:xlink=\'http://www.w3.org/1999/xlink\' x=\'0px\' y=\'0px\' enable-background=\'new 0 0 5 2\' xml:space=\'preserve\' viewBox=\'0 0 5 2\' preserveAspectRatio=\'none slice\'%3E%3Ccircle cx=\'1\' cy=\'1\' r=\'1\' fill=\'%23e6e6e6\'/%3E%3C/svg%3E")}.mdc-linear-progress__buffer{background-color:#e6e6e6}.mdc-linear-progress--indeterminate.mdc-linear-progress--reversed .mdc-linear-progress__primary-bar{right:-145.166611%;left:auto}.mdc-linear-progress--indeterminate.mdc-linear-progress--reversed .mdc-linear-progress__secondary-bar{right:-54.888891%;left:auto}:host{display:block}.mdc-linear-progress__buffer{background-color:var(--mdc-theme-secondary, #e6e6e6)}.mdc-linear-progress__buffering-dots{background-image:var(--mdc-linear-progress-buffering-dots-image, url("data:image/svg+xml,%3Csvg version=\'1.1\' xmlns=\'http://www.w3.org/2000/svg\' xmlns:xlink=\'http://www.w3.org/1999/xlink\' x=\'0px\' y=\'0px\' enable-background=\'new 0 0 5 2\' xml:space=\'preserve\' viewBox=\'0 0 5 2\' preserveAspectRatio=\'none slice\'%3E%3Ccircle cx=\'1\' cy=\'1\' r=\'1\' fill=\'%23e6e6e6\'/%3E%3C/svg%3E"))}\n</style>'], ['<style>@keyframes primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.70173, 0.49582);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.30244, 0.38135, 0.55, 0.95635);transform:translateX(83.67142%)}100%{transform:translateX(200.61106%)}}@keyframes primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.33473, 0.12482, 0.78584, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.66148)}100%{transform:scaleX(0.08)}}@keyframes secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.51506, 0.40969);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.28406, 0.8, 0.73371);transform:translateX(37.65191%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.62704, 0.6, 0.90203);transform:translateX(84.38617%)}100%{transform:translateX(160.27778%)}}@keyframes secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.20503, 0.05705, 0.57661, 0.45397);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.15231, 0.19643, 0.64837, 1.00432);transform:scaleX(0.4571)}44.15%{animation-timing-function:cubic-bezier(0.25776, -0.00316, 0.21176, 1.38179);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes buffering{to{transform:translateX(-10px)}}@keyframes primary-indeterminate-translate-reverse{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.70173, 0.49582);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.30244, 0.38135, 0.55, 0.95635);transform:translateX(-83.67142%)}100%{transform:translateX(-200.61106%)}}@keyframes secondary-indeterminate-translate-reverse{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.51506, 0.40969);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.28406, 0.8, 0.73371);transform:translateX(-37.65191%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.62704, 0.6, 0.90203);transform:translateX(-84.38617%)}100%{transform:translateX(-160.27778%)}}@keyframes buffering-reverse{to{transform:translateX(10px)}}.mdc-linear-progress{position:relative;width:100%;height:4px;transform:translateZ(0);transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);overflow:hidden}.mdc-linear-progress__bar{position:absolute;width:100%;height:100%;animation:none;transform-origin:top left;transition:transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__bar-inner{display:inline-block;position:absolute;width:100%;height:100%;animation:none}.mdc-linear-progress__buffering-dots{position:absolute;width:100%;height:100%;animation:buffering 250ms infinite linear;background-repeat:repeat-x;background-size:10px 4px}.mdc-linear-progress__buffer{position:absolute;width:100%;height:100%;transform-origin:top left;transition:transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-linear-progress__primary-bar{transform:scaleX(0)}.mdc-linear-progress__secondary-bar{visibility:hidden}.mdc-linear-progress--indeterminate .mdc-linear-progress__bar{transition:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{left:-145.166611%;animation:primary-indeterminate-translate 2s infinite linear}.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar>.mdc-linear-progress__bar-inner{animation:primary-indeterminate-scale 2s infinite linear}.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{left:-54.888891%;animation:secondary-indeterminate-translate 2s infinite linear;visibility:visible}.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar>.mdc-linear-progress__bar-inner{animation:secondary-indeterminate-scale 2s infinite linear}.mdc-linear-progress--reversed .mdc-linear-progress__bar,.mdc-linear-progress--reversed .mdc-linear-progress__buffer{right:0;transform-origin:center right}.mdc-linear-progress--reversed .mdc-linear-progress__primary-bar{animation-name:primary-indeterminate-translate-reverse}.mdc-linear-progress--reversed .mdc-linear-progress__secondary-bar{animation-name:secondary-indeterminate-translate-reverse}.mdc-linear-progress--reversed .mdc-linear-progress__buffering-dots{animation:buffering-reverse 250ms infinite linear}.mdc-linear-progress--closed{opacity:0}.mdc-linear-progress__bar-inner{background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee)}.mdc-linear-progress__buffering-dots{background-image:url("data:image/svg+xml,%3Csvg version=\'1.1\' xmlns=\'http://www.w3.org/2000/svg\' xmlns:xlink=\'http://www.w3.org/1999/xlink\' x=\'0px\' y=\'0px\' enable-background=\'new 0 0 5 2\' xml:space=\'preserve\' viewBox=\'0 0 5 2\' preserveAspectRatio=\'none slice\'%3E%3Ccircle cx=\'1\' cy=\'1\' r=\'1\' fill=\'%23e6e6e6\'/%3E%3C/svg%3E")}.mdc-linear-progress__buffer{background-color:#e6e6e6}.mdc-linear-progress--indeterminate.mdc-linear-progress--reversed .mdc-linear-progress__primary-bar{right:-145.166611%;left:auto}.mdc-linear-progress--indeterminate.mdc-linear-progress--reversed .mdc-linear-progress__secondary-bar{right:-54.888891%;left:auto}:host{display:block}.mdc-linear-progress__buffer{background-color:var(--mdc-theme-secondary, #e6e6e6)}.mdc-linear-progress__buffering-dots{background-image:var(--mdc-linear-progress-buffering-dots-image, url("data:image/svg+xml,%3Csvg version=\'1.1\' xmlns=\'http://www.w3.org/2000/svg\' xmlns:xlink=\'http://www.w3.org/1999/xlink\' x=\'0px\' y=\'0px\' enable-background=\'new 0 0 5 2\' xml:space=\'preserve\' viewBox=\'0 0 5 2\' preserveAspectRatio=\'none slice\'%3E%3Ccircle cx=\'1\' cy=\'1\' r=\'1\' fill=\'%23e6e6e6\'/%3E%3C/svg%3E"))}\n</style>']);

  var style$7 = html$1(_templateObject$e);

  /**
   * @license
   * Copyright 2016 Google Inc.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *   http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
   * Copyright 2017 Google Inc. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  var cssClasses$3 = {
    CLOSED_CLASS: 'mdc-linear-progress--closed',
    INDETERMINATE_CLASS: 'mdc-linear-progress--indeterminate',
    REVERSED_CLASS: 'mdc-linear-progress--reversed'
  };

  var strings$3 = {
    PRIMARY_BAR_SELECTOR: '.mdc-linear-progress__primary-bar',
    BUFFER_SELECTOR: '.mdc-linear-progress__buffer'
  };

  /**
   * Copyright 2017 Google Inc. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  var MDCLinearProgressFoundation = function (_MDCFoundation) {
    inherits(MDCLinearProgressFoundation, _MDCFoundation);
    createClass(MDCLinearProgressFoundation, null, [{
      key: 'cssClasses',
      get: function get$$1() {
        return cssClasses$3;
      }
    }, {
      key: 'strings',
      get: function get$$1() {
        return strings$3;
      }
    }, {
      key: 'defaultAdapter',
      get: function get$$1() {
        return {
          addClass: function addClass() /* className: string */{},
          getPrimaryBar: function getPrimaryBar() /* el: Element */{},
          getBuffer: function getBuffer() /* el: Element */{},
          hasClass: function hasClass() {
            return (/* className: string */false
            );
          },
          removeClass: function removeClass() /* className: string */{},
          setStyle: function setStyle() /* el: Element, styleProperty: string, value: string */{}
        };
      }
    }]);

    function MDCLinearProgressFoundation(adapter) {
      classCallCheck(this, MDCLinearProgressFoundation);
      return possibleConstructorReturn(this, (MDCLinearProgressFoundation.__proto__ || Object.getPrototypeOf(MDCLinearProgressFoundation)).call(this, _extends(MDCLinearProgressFoundation.defaultAdapter, adapter)));
    }

    createClass(MDCLinearProgressFoundation, [{
      key: 'init',
      value: function init() {
        this.determinate_ = !this.adapter_.hasClass(cssClasses$3.INDETERMINATE_CLASS);
        this.reverse_ = this.adapter_.hasClass(cssClasses$3.REVERSED_CLASS);
        this.progress_ = 0;
      }
    }, {
      key: 'setDeterminate',
      value: function setDeterminate(isDeterminate) {
        this.determinate_ = isDeterminate;
        if (this.determinate_) {
          this.adapter_.removeClass(cssClasses$3.INDETERMINATE_CLASS);
          this.setScale_(this.adapter_.getPrimaryBar(), this.progress_);
        } else {
          this.adapter_.addClass(cssClasses$3.INDETERMINATE_CLASS);
          this.setScale_(this.adapter_.getPrimaryBar(), 1);
          this.setScale_(this.adapter_.getBuffer(), 1);
        }
      }
    }, {
      key: 'setProgress',
      value: function setProgress(value) {
        this.progress_ = value;
        if (this.determinate_) {
          this.setScale_(this.adapter_.getPrimaryBar(), value);
        }
      }
    }, {
      key: 'setBuffer',
      value: function setBuffer(value) {
        if (this.determinate_) {
          this.setScale_(this.adapter_.getBuffer(), value);
        }
      }
    }, {
      key: 'setReverse',
      value: function setReverse(isReversed) {
        this.reverse_ = isReversed;
        if (this.reverse_) {
          this.adapter_.addClass(cssClasses$3.REVERSED_CLASS);
        } else {
          this.adapter_.removeClass(cssClasses$3.REVERSED_CLASS);
        }
      }
    }, {
      key: 'open',
      value: function open() {
        this.adapter_.removeClass(cssClasses$3.CLOSED_CLASS);
      }
    }, {
      key: 'close',
      value: function close() {
        this.adapter_.addClass(cssClasses$3.CLOSED_CLASS);
      }
    }, {
      key: 'setScale_',
      value: function setScale_(el, scaleValue) {
        var _this2 = this;

        var value = 'scaleX(' + scaleValue + ')';
        transformStyleProperties.forEach(function (transformStyleProperty) {
          _this2.adapter_.setStyle(el, transformStyleProperty, value);
        });
      }
    }]);
    return MDCLinearProgressFoundation;
  }(MDCFoundation);

  /**
   * Copyright 2017 Google Inc. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  var MDCLinearProgress = function (_MDCComponent) {
    inherits(MDCLinearProgress, _MDCComponent);

    function MDCLinearProgress() {
      classCallCheck(this, MDCLinearProgress);
      return possibleConstructorReturn(this, (MDCLinearProgress.__proto__ || Object.getPrototypeOf(MDCLinearProgress)).apply(this, arguments));
    }

    createClass(MDCLinearProgress, [{
      key: 'open',
      value: function open() {
        this.foundation_.open();
      }
    }, {
      key: 'close',
      value: function close() {
        this.foundation_.close();
      }
    }, {
      key: 'getDefaultFoundation',
      value: function getDefaultFoundation() {
        var _this2 = this;

        return new MDCLinearProgressFoundation({
          addClass: function addClass(className) {
            return _this2.root_.classList.add(className);
          },
          getPrimaryBar: function getPrimaryBar() {
            return _this2.root_.querySelector(MDCLinearProgressFoundation.strings.PRIMARY_BAR_SELECTOR);
          },
          getBuffer: function getBuffer() {
            return _this2.root_.querySelector(MDCLinearProgressFoundation.strings.BUFFER_SELECTOR);
          },
          hasClass: function hasClass(className) {
            return _this2.root_.classList.contains(className);
          },
          removeClass: function removeClass(className) {
            return _this2.root_.classList.remove(className);
          },
          setStyle: function setStyle(el, styleProperty, value) {
            return el.style[styleProperty] = value;
          }
        });
      }
    }, {
      key: 'determinate',
      set: function set$$1(value) {
        this.foundation_.setDeterminate(value);
      }
    }, {
      key: 'progress',
      set: function set$$1(value) {
        this.foundation_.setProgress(value);
      }
    }, {
      key: 'buffer',
      set: function set$$1(value) {
        this.foundation_.setBuffer(value);
      }
    }, {
      key: 'reverse',
      set: function set$$1(value) {
        this.foundation_.setReverse(value);
      }
    }], [{
      key: 'attachTo',
      value: function attachTo(root) {
        return new MDCLinearProgress(root);
      }
    }]);
    return MDCLinearProgress;
  }(MDCComponent);

  var _templateObject$f = taggedTemplateLiteral(['\n      ', '\n      <div role="progressbar" class="mdc-linear-progress">\n        <div class="mdc-linear-progress__buffering-dots"></div>\n        <div class="mdc-linear-progress__buffer"></div>\n        <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar">\n          <span class="mdc-linear-progress__bar-inner"></span>\n        </div>\n        <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">\n          <span class="mdc-linear-progress__bar-inner"></span>\n        </div>\n      </div>'], ['\n      ', '\n      <div role="progressbar" class="mdc-linear-progress">\n        <div class="mdc-linear-progress__buffering-dots"></div>\n        <div class="mdc-linear-progress__buffer"></div>\n        <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar">\n          <span class="mdc-linear-progress__bar-inner"></span>\n        </div>\n        <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">\n          <span class="mdc-linear-progress__bar-inner"></span>\n        </div>\n      </div>']);

  var MDCWCLinearProgress = function (_MDCWebComponentMixin) {
    inherits(MDCWCLinearProgress, _MDCWebComponentMixin);

    function MDCWCLinearProgress() {
      classCallCheck(this, MDCWCLinearProgress);
      return possibleConstructorReturn(this, (MDCWCLinearProgress.__proto__ || Object.getPrototypeOf(MDCWCLinearProgress)).apply(this, arguments));
    }

    return MDCWCLinearProgress;
  }(MDCWebComponentMixin(MDCLinearProgress));

  var LinearProgress = function (_ComponentElement) {
    inherits(LinearProgress, _ComponentElement);
    createClass(LinearProgress, null, [{
      key: 'ComponentClass',
      get: function get$$1() {
        return MDCWCLinearProgress;
      }
    }, {
      key: 'componentSelector',
      get: function get$$1() {
        return '.mdc-linear-progress';
      }
    }, {
      key: 'properties',
      get: function get$$1() {
        return {
          determinate: Boolean,
          progress: Number,
          buffer: Number,
          reverse: Boolean,
          closed: Boolean
        };
      }
    }]);

    function LinearProgress() {
      classCallCheck(this, LinearProgress);

      var _this2 = possibleConstructorReturn(this, (LinearProgress.__proto__ || Object.getPrototypeOf(LinearProgress)).call(this));

      _this2._asyncComponent = true;
      _this2.determinate = false;
      _this2.progress = 0;
      _this2.buffer = 0;
      _this2.reverse = false;
      _this2.closed = false;
      return _this2;
    }

    createClass(LinearProgress, [{
      key: '_renderStyle',
      value: function _renderStyle() {
        return style$7;
      }
    }, {
      key: '_render',
      value: function _render() {
        return html$1(_templateObject$f, this._renderStyle());
      }
    }, {
      key: '_didRender',
      value: async function _didRender(props, changed, old) {
        if ('determinate' in changed) {
          await this.componentReady();
          this._component.determinate = props.determinate;
        }
        if ('progress' in changed) {
          await this.componentReady();
          this._component.progress = props.progress;
        }
        if ('buffer' in changed) {
          await this.componentReady();
          this._component.buffer = props.buffer;
        }
        if ('reverse' in changed) {
          await this.componentReady();
          this._component.reverse = props.reverse;
        }
        if ('closed' in changed) {
          if (props.closed) {
            this.close();
          } else {
            this.open();
          }
        }
      }
    }, {
      key: 'open',
      value: function open() {
        this.componentReady().then(function (component) {
          component.open();
        });
      }
    }, {
      key: 'close',
      value: function close() {
        this.componentReady().then(function (component) {
          component.close();
        });
      }
    }]);
    return LinearProgress;
  }(ComponentElement);

  customElements.define('mwc-linear-progress', LinearProgress);

  var _templateObject$g = taggedTemplateLiteral(['<style>@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var: 1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug::before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-radio{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:transparent;will-change:transform, opacity;display:inline-block;position:relative;flex:0 0 auto;box-sizing:border-box;width:40px;height:40px;padding:10px;cursor:pointer;will-change:opacity, transform, border-color, background-color, color}.mdc-radio .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0,0,0,0.54)}.mdc-radio .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786)}.mdc-radio .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-radio .mdc-radio__background::before{background-color:#018786}@supports not (-ms-ime-align: auto){.mdc-radio .mdc-radio__background::before{background-color:var(--mdc-theme-secondary, #018786)}}.mdc-radio::before,.mdc-radio::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-radio::before{transition:opacity 15ms linear;z-index:1}.mdc-radio.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-radio.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-radio.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-radio.mdc-ripple-upgraded--foreground-activation::after{animation:225ms mdc-ripple-fg-radius-in forwards,75ms mdc-ripple-fg-opacity-in forwards}.mdc-radio.mdc-ripple-upgraded--foreground-deactivation::after{animation:150ms mdc-ripple-fg-opacity-out;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-radio::before,.mdc-radio::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-radio.mdc-ripple-upgraded::before,.mdc-radio.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-radio.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-radio::before,.mdc-radio::after{background-color:#018786}@supports not (-ms-ime-align: auto){.mdc-radio::before,.mdc-radio::after{background-color:var(--mdc-theme-secondary, #018786)}}.mdc-radio:hover::before{opacity:.04}.mdc-radio:not(.mdc-ripple-upgraded):focus::before,.mdc-radio.mdc-ripple-upgraded--background-focused::before{transition-duration:75ms;opacity:.12}.mdc-radio:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-radio:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.16}.mdc-radio.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: .16}.mdc-radio__background{display:inline-block;position:absolute;left:10px;box-sizing:border-box;width:50%;height:50%}.mdc-radio__background::before{position:absolute;top:0;left:0;width:100%;height:100%;transform:scale(0, 0);transition:opacity 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1);border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-radio__outer-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;transition:border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1);border-width:2px;border-style:solid;border-radius:50%}.mdc-radio__inner-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;transform:scale(0, 0);transition:transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1),background-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1);border-radius:50%}.mdc-radio__native-control{position:absolute;top:0;left:0;width:100%;height:100%;margin:0;padding:0;opacity:0;cursor:inherit;z-index:1}.mdc-radio.mdc-ripple-upgraded .mdc-radio__background::before{content:none}.mdc-radio__native-control:checked+.mdc-radio__background,.mdc-radio__native-control:disabled+.mdc-radio__background{transition:opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle{transition:border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{transition:transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio--disabled{cursor:default;pointer-events:none}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle{transform:scale(0.5);transition:transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:disabled+.mdc-radio__background,[aria-disabled="true"] .mdc-radio__native-control+.mdc-radio__background{cursor:default}.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle,[aria-disabled="true"] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0,0,0,0.26)}.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle,[aria-disabled="true"] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle{background-color:rgba(0,0,0,0.26)}.mdc-radio__native-control:focus+.mdc-radio__background::before{transform:scale(2, 2);transition:opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:.26}:host{display:inline-block}\n</style>'], ['<style>@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var: 1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug::before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-radio{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:transparent;will-change:transform, opacity;display:inline-block;position:relative;flex:0 0 auto;box-sizing:border-box;width:40px;height:40px;padding:10px;cursor:pointer;will-change:opacity, transform, border-color, background-color, color}.mdc-radio .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0,0,0,0.54)}.mdc-radio .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786)}.mdc-radio .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-radio .mdc-radio__background::before{background-color:#018786}@supports not (-ms-ime-align: auto){.mdc-radio .mdc-radio__background::before{background-color:var(--mdc-theme-secondary, #018786)}}.mdc-radio::before,.mdc-radio::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-radio::before{transition:opacity 15ms linear;z-index:1}.mdc-radio.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-radio.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-radio.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-radio.mdc-ripple-upgraded--foreground-activation::after{animation:225ms mdc-ripple-fg-radius-in forwards,75ms mdc-ripple-fg-opacity-in forwards}.mdc-radio.mdc-ripple-upgraded--foreground-deactivation::after{animation:150ms mdc-ripple-fg-opacity-out;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-radio::before,.mdc-radio::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}.mdc-radio.mdc-ripple-upgraded::before,.mdc-radio.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-radio.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-radio::before,.mdc-radio::after{background-color:#018786}@supports not (-ms-ime-align: auto){.mdc-radio::before,.mdc-radio::after{background-color:var(--mdc-theme-secondary, #018786)}}.mdc-radio:hover::before{opacity:.04}.mdc-radio:not(.mdc-ripple-upgraded):focus::before,.mdc-radio.mdc-ripple-upgraded--background-focused::before{transition-duration:75ms;opacity:.12}.mdc-radio:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-radio:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.16}.mdc-radio.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: .16}.mdc-radio__background{display:inline-block;position:absolute;left:10px;box-sizing:border-box;width:50%;height:50%}.mdc-radio__background::before{position:absolute;top:0;left:0;width:100%;height:100%;transform:scale(0, 0);transition:opacity 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1);border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-radio__outer-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;transition:border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1);border-width:2px;border-style:solid;border-radius:50%}.mdc-radio__inner-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;transform:scale(0, 0);transition:transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1),background-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1);border-radius:50%}.mdc-radio__native-control{position:absolute;top:0;left:0;width:100%;height:100%;margin:0;padding:0;opacity:0;cursor:inherit;z-index:1}.mdc-radio.mdc-ripple-upgraded .mdc-radio__background::before{content:none}.mdc-radio__native-control:checked+.mdc-radio__background,.mdc-radio__native-control:disabled+.mdc-radio__background{transition:opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle{transition:border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{transition:transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio--disabled{cursor:default;pointer-events:none}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle{transform:scale(0.5);transition:transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:disabled+.mdc-radio__background,[aria-disabled="true"] .mdc-radio__native-control+.mdc-radio__background{cursor:default}.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle,[aria-disabled="true"] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0,0,0,0.26)}.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle,[aria-disabled="true"] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle{background-color:rgba(0,0,0,0.26)}.mdc-radio__native-control:focus+.mdc-radio__background::before{transform:scale(2, 2);transition:opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:.26}:host{display:inline-block}\n</style>']);

  var style$8 = html$1(_templateObject$g);

  /**
  @license
  Copyright 2018 Google Inc. All Rights Reserved.

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
  */
  var SelectionController = function () {
    createClass(SelectionController, null, [{
      key: 'getController',
      value: function getController(element) {
        var root = element.getRootNode();
        if (!root.__selectionController) {
          root.__selectionController = new SelectionController(root);
        }
        return root.__selectionController;
      }
    }]);

    function SelectionController(node) {
      var _this = this;

      classCallCheck(this, SelectionController);

      node.addEventListener('keydown', function (e) {
        return _this._keyDownHandler(e);
      });
      node.addEventListener('mousedown', function (e) {
        return _this._mousedownHandler(e);
      });
      node.addEventListener('mouseup', function (e) {
        return _this._mouseupHandler(e);
      });
      this._sets = {};
      this._property = 'checked';
    }

    createClass(SelectionController, [{
      key: '_keyDownHandler',
      value: function _keyDownHandler(e) {
        this._keyIsDown = true;
        var element = e.target;
        if (!this.has(element)) {
          return;
        }
        if (e.key == 'ArrowRight' || e.key == 'ArrowDown') {
          this.next(element);
        } else if (e.key == 'ArrowLeft' || e.key == 'ArrowUp') {
          this.previous(element);
        }
      }
    }, {
      key: '_mousedownHandler',
      value: function _mousedownHandler(e) {
        this._mouseIsDown = true;
      }
    }, {
      key: '_mouseupHandler',
      value: function _mouseupHandler(e) {
        this._mouseIsDown = false;
      }
    }, {
      key: 'has',
      value: function has(element) {
        var set$$1 = this.getSet(element.name);
        return set$$1.has(element);
      }
    }, {
      key: 'previous',
      value: function previous(element) {
        var order = this.getOrdered(element);
        var i = order.indexOf(element);
        this.select(order[i - 1] || order[order.length - 1]);
      }
    }, {
      key: 'next',
      value: function next(element) {
        var order = this.getOrdered(element);
        var i = order.indexOf(element);
        this.select(order[i + 1] || order[0]);
      }
    }, {
      key: 'select',
      value: function select(element) {
        element.focus();
        element.click();
      }

      /**
       * Helps to track the focused selection group and if it changes, focuses
       * the selected item in the group. This matches native radio button behavior.
       * @param {*} event
       * @param {*} element
       */

    }, {
      key: 'focus',
      value: function focus(event, element) {
        // Only manage focus state when using keyboard
        if (this._mouseIsDown) {
          return;
        }
        cancelAnimationFrame(this._blurRaf);
        var set$$1 = this.getSet(element.name);
        var currentFocusedSet = this._focusedSet;
        this._focusedSet = set$$1;
        if (currentFocusedSet != set$$1 && set$$1._selected && set$$1._selected != element) {
          // TODO(sorvell): needed because MDC Ripple delays focus/blur until RAF.
          requestAnimationFrame(function () {
            set$$1._selected.focus();
          });
        }
      }

      /**
       * Helps track the focused selection group by setting it to null asynchronously
       * on blur if no focus event is received.
       * @param {*} element
       */

    }, {
      key: 'blur',
      value: function blur(element) {
        var _this2 = this;

        // Only manage focus state when using keyboard
        if (this._mouseIsDown) {
          return;
        }
        this._blurRaf = requestAnimationFrame(function () {
          _this2._focusedSet = null;
        });
      }
    }, {
      key: 'getOrdered',
      value: function getOrdered(element) {
        var set$$1 = this.getSet(element.name);
        if (!set$$1._ordered) {
          set$$1._ordered = [];
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = set$$1[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var e = _step.value;

              set$$1._ordered.push(e);
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          set$$1._ordered.sort(function (a, b) {
            return a.compareDocumentPosition(b) == Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
          });
        }
        return set$$1._ordered;
      }
    }, {
      key: 'getSet',
      value: function getSet(name) {
        if (!this._sets[name]) {
          this._sets[name] = new Set();
        }
        return this._sets[name];
      }
    }, {
      key: 'register',
      value: function register(element) {
        var set$$1 = this.getSet(element.name);
        set$$1.add(element);
        set$$1._ordered = null;
      }
    }, {
      key: 'unregister',
      value: function unregister(element) {
        var set$$1 = this.getSet(element.name);
        set$$1.delete(element);
        set$$1._ordered = null;
        if (set$$1._selected == element) {
          set$$1._selected = null;
        }
      }
    }, {
      key: 'update',
      value: function update(element) {
        if (this._updating) {
          return;
        }
        this._updating = true;
        if (element[this._property]) {
          var set$$1 = this.getSet(element.name);
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = set$$1[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var e = _step2.value;

              e[this._property] = e == element;
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }

          set$$1._selected = element;
        }
        this._updating = false;
      }
    }]);
    return SelectionController;
  }();

  /**
   * @license
   * Copyright 2016 Google Inc. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /* eslint no-unused-vars: [2, {"args": "none"}] */

  /**
   * Adapter for MDC Radio. Provides an interface for managing
   * - classes
   * - dom
   *
   * Additionally, provides type information for the adapter to the Closure
   * compiler.
   *
   * Implement this adapter for your framework of choice to delegate updates to
   * the component in your framework of choice. See architecture documentation
   * for more details.
   * https://github.com/material-components/material-components-web/blob/master/docs/code/architecture.md
   *
   * @record
   */

  var MDCRadioAdapter = function () {
    function MDCRadioAdapter() {
      classCallCheck(this, MDCRadioAdapter);
    }

    createClass(MDCRadioAdapter, [{
      key: 'addClass',

      /** @param {string} className */
      value: function addClass(className) {}

      /** @param {string} className */

    }, {
      key: 'removeClass',
      value: function removeClass(className) {}

      /** @return {!MDCSelectionControlState} */

    }, {
      key: 'getNativeControl',
      value: function getNativeControl() {}
    }]);
    return MDCRadioAdapter;
  }();

  /**
   * @license
   * Copyright 2016 Google Inc. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /** @enum {string} */
  var strings$4 = {
    NATIVE_CONTROL_SELECTOR: '.mdc-radio__native-control'
  };

  /** @enum {string} */
  var cssClasses$4 = {
    ROOT: 'mdc-radio',
    DISABLED: 'mdc-radio--disabled'
  };

  /**
   * @license
   * Copyright 2016 Google Inc. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
   * @extends {MDCFoundation<!MDCRadioAdapter>}
   */

  var MDCRadioFoundation = function (_MDCFoundation) {
    inherits(MDCRadioFoundation, _MDCFoundation);

    function MDCRadioFoundation() {
      classCallCheck(this, MDCRadioFoundation);
      return possibleConstructorReturn(this, (MDCRadioFoundation.__proto__ || Object.getPrototypeOf(MDCRadioFoundation)).apply(this, arguments));
    }

    createClass(MDCRadioFoundation, [{
      key: 'isChecked',


      /** @return {boolean} */
      value: function isChecked() {
        return this.getNativeControl_().checked;
      }

      /** @param {boolean} checked */

    }, {
      key: 'setChecked',
      value: function setChecked(checked) {
        this.getNativeControl_().checked = checked;
      }

      /** @return {boolean} */

    }, {
      key: 'isDisabled',
      value: function isDisabled() {
        return this.getNativeControl_().disabled;
      }

      /** @param {boolean} disabled */

    }, {
      key: 'setDisabled',
      value: function setDisabled(disabled) {
        var DISABLED = MDCRadioFoundation.cssClasses.DISABLED;

        this.getNativeControl_().disabled = disabled;
        if (disabled) {
          this.adapter_.addClass(DISABLED);
        } else {
          this.adapter_.removeClass(DISABLED);
        }
      }

      /** @return {?string} */

    }, {
      key: 'getValue',
      value: function getValue() {
        return this.getNativeControl_().value;
      }

      /** @param {?string} value */

    }, {
      key: 'setValue',
      value: function setValue(value) {
        this.getNativeControl_().value = value;
      }

      /**
       * @return {!MDCSelectionControlState}
       * @private
       */

    }, {
      key: 'getNativeControl_',
      value: function getNativeControl_() {
        return this.adapter_.getNativeControl() || {
          checked: false,
          disabled: false,
          value: null
        };
      }
    }], [{
      key: 'cssClasses',

      /** @return enum {cssClasses} */
      get: function get$$1() {
        return cssClasses$4;
      }

      /** @return enum {strings} */

    }, {
      key: 'strings',
      get: function get$$1() {
        return strings$4;
      }

      /** @return {!MDCRadioAdapter} */

    }, {
      key: 'defaultAdapter',
      get: function get$$1() {
        return (/** @type {!MDCRadioAdapter} */{
            addClass: function addClass() /* className: string */{},
            removeClass: function removeClass() /* className: string */{},
            getNativeControl: function getNativeControl() /* !MDCSelectionControlState */{}
          }
        );
      }
    }]);
    return MDCRadioFoundation;
  }(MDCFoundation);

  /**
   * @license
   * Copyright 2016 Google Inc. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
   * @extends MDCComponent<!MDCRadioFoundation>
   * @implements {MDCSelectionControl}
   */

  var MDCRadio = function (_MDCComponent) {
    inherits(MDCRadio, _MDCComponent);
    createClass(MDCRadio, [{
      key: 'checked',


      /** @return {boolean} */
      get: function get$$1() {
        return this.foundation_.isChecked();
      }

      /** @param {boolean} checked */
      ,
      set: function set$$1(checked) {
        this.foundation_.setChecked(checked);
      }

      /** @return {boolean} */

    }, {
      key: 'disabled',
      get: function get$$1() {
        return this.foundation_.isDisabled();
      }

      /** @param {boolean} disabled */
      ,
      set: function set$$1(disabled) {
        this.foundation_.setDisabled(disabled);
      }

      /** @return {?string} */

    }, {
      key: 'value',
      get: function get$$1() {
        return this.foundation_.getValue();
      }

      /** @param {?string} value */
      ,
      set: function set$$1(value) {
        this.foundation_.setValue(value);
      }

      /** @return {!MDCRipple} */

    }, {
      key: 'ripple',
      get: function get$$1() {
        return this.ripple_;
      }
    }], [{
      key: 'attachTo',
      value: function attachTo(root) {
        return new MDCRadio(root);
      }
    }]);

    function MDCRadio() {
      var _ref;

      classCallCheck(this, MDCRadio);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      /** @private {!MDCRipple} */
      var _this = possibleConstructorReturn(this, (_ref = MDCRadio.__proto__ || Object.getPrototypeOf(MDCRadio)).call.apply(_ref, [this].concat(args)));

      _this.ripple_ = _this.initRipple_();
      return _this;
    }

    /**
     * @return {!MDCRipple}
     * @private
     */


    createClass(MDCRadio, [{
      key: 'initRipple_',
      value: function initRipple_() {
        var _this2 = this;

        var adapter = _extends(MDCRipple.createAdapter(this), {
          isUnbounded: function isUnbounded() {
            return true;
          },
          // Radio buttons technically go "active" whenever there is *any* keyboard interaction. This is not the
          // UI we desire.
          isSurfaceActive: function isSurfaceActive() {
            return false;
          },
          registerInteractionHandler: function registerInteractionHandler(type, handler) {
            return _this2.nativeControl_.addEventListener(type, handler);
          },
          deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
            return _this2.nativeControl_.removeEventListener(type, handler);
          }
        });
        var foundation = new MDCRippleFoundation(adapter);
        return new MDCRipple(this.root_, foundation);
      }

      /**
       * Returns the state of the native control element, or null if the native control element is not present.
       * @return {?MDCSelectionControlState}
       * @private
       */

    }, {
      key: 'destroy',
      value: function destroy() {
        this.ripple_.destroy();
        get(MDCRadio.prototype.__proto__ || Object.getPrototypeOf(MDCRadio.prototype), 'destroy', this).call(this);
      }

      /** @return {!MDCRadioFoundation} */

    }, {
      key: 'getDefaultFoundation',
      value: function getDefaultFoundation() {
        var _this3 = this;

        return new MDCRadioFoundation({
          addClass: function addClass(className) {
            return _this3.root_.classList.add(className);
          },
          removeClass: function removeClass(className) {
            return _this3.root_.classList.remove(className);
          },
          getNativeControl: function getNativeControl() {
            return _this3.root_.querySelector(MDCRadioFoundation.strings.NATIVE_CONTROL_SELECTOR);
          }
        });
      }
    }, {
      key: 'nativeControl_',
      get: function get$$1() {
        var NATIVE_CONTROL_SELECTOR = MDCRadioFoundation.strings.NATIVE_CONTROL_SELECTOR;

        var el = /** @type {?MDCSelectionControlState} */this.root_.querySelector(NATIVE_CONTROL_SELECTOR);
        return el;
      }
    }]);
    return MDCRadio;
  }(MDCComponent);

  var _templateObject$h = taggedTemplateLiteral(['\n      ', '\n      <div class="mdc-radio">\n        <input class="mdc-radio__native-control" type="radio"\n          checked="', '" name="', '" value="', '"\n          on-change="', '"\n          on-focus="', '"\n          on-blur="', '">\n        <div class="mdc-radio__background">\n          <div class="mdc-radio__outer-circle"></div>\n          <div class="mdc-radio__inner-circle"></div>\n        </div>\n      </div>'], ['\n      ', '\n      <div class="mdc-radio">\n        <input class="mdc-radio__native-control" type="radio"\n          checked="', '" name="', '" value="', '"\n          on-change="', '"\n          on-focus="', '"\n          on-blur="', '">\n        <div class="mdc-radio__background">\n          <div class="mdc-radio__outer-circle"></div>\n          <div class="mdc-radio__inner-circle"></div>\n        </div>\n      </div>']);

  var MDCWCRadio = function (_MDCWebComponentMixin) {
    inherits(MDCWCRadio, _MDCWebComponentMixin);

    function MDCWCRadio() {
      classCallCheck(this, MDCWCRadio);
      return possibleConstructorReturn(this, (MDCWCRadio.__proto__ || Object.getPrototypeOf(MDCWCRadio)).apply(this, arguments));
    }

    return MDCWCRadio;
  }(MDCWebComponentMixin(MDCRadio));

  var Radio = function (_FormableComponentEle) {
    inherits(Radio, _FormableComponentEle);
    createClass(Radio, null, [{
      key: 'ComponentClass',
      get: function get$$1() {
        return MDCWCRadio;
      }
    }, {
      key: 'componentSelector',
      get: function get$$1() {
        return '.mdc-radio';
      }
    }, {
      key: 'properties',
      get: function get$$1() {
        return {
          checked: Boolean,
          disabled: Boolean,
          value: String,
          name: String
        };
      }
    }]);

    function Radio() {
      classCallCheck(this, Radio);

      var _this2 = possibleConstructorReturn(this, (Radio.__proto__ || Object.getPrototypeOf(Radio)).call(this));

      _this2._asyncComponent = true;
      _this2.checked = false;
      _this2.disabled = false;
      _this2.name = '';
      _this2.value = '';
      _this2._boundInputChangeHandler = _this2._inputChangeHandler.bind(_this2);
      _this2._boundInputFocusHandler = _this2._inputFocusHandler.bind(_this2);
      _this2._boundInputBlurHandler = _this2._inputBlurHandler.bind(_this2);
      return _this2;
    }

    createClass(Radio, [{
      key: 'connectedCallback',
      value: function connectedCallback() {
        get(Radio.prototype.__proto__ || Object.getPrototypeOf(Radio.prototype), 'connectedCallback', this).call(this);
        this._selectionController = SelectionController.getController(this);
        this._selectionController.register(this);
        this._selectionController.update(this);
      }
    }, {
      key: 'disconnectedCallback',
      value: function disconnectedCallback() {
        this._selectionController.unregister(this);
      }
    }, {
      key: '_renderStyle',
      value: function _renderStyle() {
        return style$8;
      }
    }, {
      key: '_render',
      value: function _render(_ref) {
        var checked = _ref.checked,
            value = _ref.value,
            name = _ref.name;

        return html$1(_templateObject$h, this._renderStyle(), checked, name, value, this._boundInputChangeHandler, this._boundInputFocusHandler, this._boundInputBlurHandler);
      }
    }, {
      key: '_inputChangeHandler',
      value: function _inputChangeHandler(e) {
        this.checked = e.target.checked;
      }
    }, {
      key: '_inputFocusHandler',
      value: function _inputFocusHandler(e) {
        this._selectionController.focus(e, this);
      }
    }, {
      key: '_inputBlurHandler',
      value: function _inputBlurHandler(e) {
        this._selectionController.blur(this);
      }
    }, {
      key: 'disabled',
      get: function get$$1() {
        return this._component && this._component.disabled;
      },
      set: function set$$1(value) {
        this.componentReady().then(function (component) {
          return component.disabled = value;
        });
      }
    }, {
      key: 'checked',
      get: function get$$1() {
        return this._getProperty('checked');
      },
      set: function set$$1(value) {
        this._setProperty('checked', value);
        if (this._selectionController) {
          this._selectionController.update(this);
        }
      }
    }, {
      key: 'name',
      get: function get$$1() {
        return this._getProperty('name');
      },
      set: function set$$1(value) {
        if (this._selectionController) {
          this._selectionController.unregister(this);
        }
        this._setProperty('name', value);
        if (this._selectionController) {
          this._selectionController.register(this);
          this._selectionController.update(this);
        }
      }
    }]);
    return Radio;
  }(FormableComponentElement);

  customElements.define('mwc-radio', Radio);

  var _templateObject$i = taggedTemplateLiteral(['<style>.mdc-switch{display:inline-block;position:relative}.mdc-switch__native-control{position:absolute;top:-14px;left:-14px;width:48px;height:48px;display:inline-block;margin-top:-3px;transition:transform 90ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0;cursor:pointer;z-index:2}.mdc-switch__native-control:checked{transform:translateX(14px)}.mdc-switch__native-control:enabled:not(:checked) ~ .mdc-switch__background::before{background-color:#000}.mdc-switch__native-control:enabled:not(:checked) ~ .mdc-switch__background .mdc-switch__knob{background-color:#fafafa}.mdc-switch__native-control:enabled:not(:checked) ~ .mdc-switch__background .mdc-switch__knob::before{background-color:#9e9e9e}.mdc-switch__native-control:enabled:checked ~ .mdc-switch__background::before{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-switch__native-control:enabled:checked ~ .mdc-switch__background .mdc-switch__knob{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-switch__native-control:enabled:checked ~ .mdc-switch__background .mdc-switch__knob::before{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-switch__background{display:block;position:relative;width:34px;height:14px;border-radius:50%;outline:none;user-select:none}.mdc-switch__background::before{display:block;position:absolute;top:0;right:0;bottom:0;left:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.2, 1),background-color 90ms cubic-bezier(0.4, 0, 0.2, 1);border-radius:7px;opacity:.38;content:""}.mdc-switch__knob{box-shadow:0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12);display:block;position:absolute;top:-3px;left:0;width:20px;height:20px;transform:translateX(0);transition:transform 90ms cubic-bezier(0.4, 0, 0.2, 1),background-color 90ms cubic-bezier(0.4, 0, 0.2, 1);border-radius:50%;z-index:1}.mdc-switch__knob::before{position:absolute;top:-14px;left:-14px;width:48px;height:48px;transform:scale(0);transition:transform 90ms cubic-bezier(0.4, 0, 0.2, 1),background-color 90ms cubic-bezier(0.4, 0, 0.2, 1);border-radius:50%;opacity:.2;content:""}.mdc-switch__native-control:focus ~ .mdc-switch__background .mdc-switch__knob::before{transform:scale(1)}.mdc-switch__native-control:checked ~ .mdc-switch__background::before{opacity:.5}.mdc-switch__native-control:checked ~ .mdc-switch__background .mdc-switch__knob{transform:translateX(14px)}.mdc-switch__native-control:checked ~ .mdc-switch__background .mdc-switch__knob::before{opacity:.15}.mdc-switch__native-control:disabled{cursor:initial}.mdc-switch__native-control:disabled ~ .mdc-switch__background::before{background-color:#000;opacity:.12}.mdc-switch__native-control:disabled ~ .mdc-switch__background .mdc-switch__knob{background-color:#bdbdbd}\n</style>'], ['<style>.mdc-switch{display:inline-block;position:relative}.mdc-switch__native-control{position:absolute;top:-14px;left:-14px;width:48px;height:48px;display:inline-block;margin-top:-3px;transition:transform 90ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0;cursor:pointer;z-index:2}.mdc-switch__native-control:checked{transform:translateX(14px)}.mdc-switch__native-control:enabled:not(:checked) ~ .mdc-switch__background::before{background-color:#000}.mdc-switch__native-control:enabled:not(:checked) ~ .mdc-switch__background .mdc-switch__knob{background-color:#fafafa}.mdc-switch__native-control:enabled:not(:checked) ~ .mdc-switch__background .mdc-switch__knob::before{background-color:#9e9e9e}.mdc-switch__native-control:enabled:checked ~ .mdc-switch__background::before{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-switch__native-control:enabled:checked ~ .mdc-switch__background .mdc-switch__knob{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-switch__native-control:enabled:checked ~ .mdc-switch__background .mdc-switch__knob::before{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-switch__background{display:block;position:relative;width:34px;height:14px;border-radius:50%;outline:none;user-select:none}.mdc-switch__background::before{display:block;position:absolute;top:0;right:0;bottom:0;left:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.2, 1),background-color 90ms cubic-bezier(0.4, 0, 0.2, 1);border-radius:7px;opacity:.38;content:""}.mdc-switch__knob{box-shadow:0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12);display:block;position:absolute;top:-3px;left:0;width:20px;height:20px;transform:translateX(0);transition:transform 90ms cubic-bezier(0.4, 0, 0.2, 1),background-color 90ms cubic-bezier(0.4, 0, 0.2, 1);border-radius:50%;z-index:1}.mdc-switch__knob::before{position:absolute;top:-14px;left:-14px;width:48px;height:48px;transform:scale(0);transition:transform 90ms cubic-bezier(0.4, 0, 0.2, 1),background-color 90ms cubic-bezier(0.4, 0, 0.2, 1);border-radius:50%;opacity:.2;content:""}.mdc-switch__native-control:focus ~ .mdc-switch__background .mdc-switch__knob::before{transform:scale(1)}.mdc-switch__native-control:checked ~ .mdc-switch__background::before{opacity:.5}.mdc-switch__native-control:checked ~ .mdc-switch__background .mdc-switch__knob{transform:translateX(14px)}.mdc-switch__native-control:checked ~ .mdc-switch__background .mdc-switch__knob::before{opacity:.15}.mdc-switch__native-control:disabled{cursor:initial}.mdc-switch__native-control:disabled ~ .mdc-switch__background::before{background-color:#000;opacity:.12}.mdc-switch__native-control:disabled ~ .mdc-switch__background .mdc-switch__knob{background-color:#bdbdbd}\n</style>']);

  var style$9 = html$1(_templateObject$i);

  var _templateObject$j = taggedTemplateLiteral(['\n      ', '\n      <div class="mdc-switch">\n      <input type="checkbox" id="basic-switch" checked="', '" disabled?="', '" class="mdc-switch__native-control" />\n      <div class="mdc-switch__background">\n        <div class="mdc-switch__knob"></div>\n      </div>\n    </div>'], ['\n      ', '\n      <div class="mdc-switch">\n      <input type="checkbox" id="basic-switch" checked="', '" disabled?="', '" class="mdc-switch__native-control" />\n      <div class="mdc-switch__background">\n        <div class="mdc-switch__knob"></div>\n      </div>\n    </div>']);

  var Switch = function (_LitElement) {
    inherits(Switch, _LitElement);
    createClass(Switch, null, [{
      key: 'properties',
      get: function get$$1() {
        return {
          checked: Boolean,
          disabled: Boolean
        };
      }
    }]);

    function Switch() {
      classCallCheck(this, Switch);

      var _this = possibleConstructorReturn(this, (Switch.__proto__ || Object.getPrototypeOf(Switch)).call(this));

      _this.checked = false;
      _this.disabled = false;
      return _this;
    }

    createClass(Switch, [{
      key: '_renderStyle',
      value: function _renderStyle() {
        return style$9;
      }
    }, {
      key: '_render',
      value: function _render(_ref) {
        var checked = _ref.checked,
            disabled = _ref.disabled;

        return html$1(_templateObject$j, this._renderStyle(), checked, disabled);
      }
    }, {
      key: 'ready',
      value: async function ready() {
        get(Switch.prototype.__proto__ || Object.getPrototypeOf(Switch.prototype), 'ready', this).call(this);
        await afterNextRender;
        this._input = this._root.querySelector('input');
      }
    }, {
      key: 'click',
      value: function click() {
        this._input.click();
      }
    }, {
      key: 'focus',
      value: function focus() {
        this._input.focus();
      }
    }, {
      key: 'setAriaLabel',
      value: function setAriaLabel(value) {
        this._input.setAttribute('aria-label', value);
      }
    }]);
    return Switch;
  }(LitElement);

  customElements.define('mwc-switch', Switch);

  var _templateObject$k = taggedTemplateLiteral(['<style>.mdc-snackbar{display:flex;position:fixed;bottom:0;left:50%;align-items:center;justify-content:flex-start;box-sizing:border-box;padding-right:24px;padding-left:24px;transform:translate(-50%, 100%);transition:transform .25s 0ms cubic-bezier(0.4, 0, 1, 1);background-color:#323232;pointer-events:none;will-change:transform}@media (max-width: 599px){.mdc-snackbar{left:0;width:100%;transform:translate(0, 100%)}}@media (min-width: 600px){.mdc-snackbar{min-width:288px;max-width:568px;border-radius:2px}}@media (min-width: 600px){.mdc-snackbar--align-start{left:24px;right:initial;bottom:24px;transform:translate(0, 200%)}[dir="rtl"] .mdc-snackbar--align-start,.mdc-snackbar--align-start[dir="rtl"]{left:initial;right:24px}}@media (max-width: 599px){.mdc-snackbar--align-start{bottom:0;left:0;width:100%;transform:translate(0, 100%)}}.mdc-snackbar--active{transform:translate(0);transition:transform .25s 0ms cubic-bezier(0, 0, 0.2, 1);pointer-events:auto}.mdc-snackbar--active:not(.mdc-snackbar--align-start){transform:translate(-50%, 0)}@media (max-width: 599px){.mdc-snackbar--active:not(.mdc-snackbar--align-start){bottom:0;left:0;width:100%;transform:translate(0)}}.mdc-snackbar__action-wrapper{padding-left:24px;padding-right:0}[dir="rtl"] .mdc-snackbar__action-wrapper,.mdc-snackbar__action-wrapper[dir="rtl"]{padding-left:0;padding-right:24px}.mdc-snackbar--action-on-bottom{flex-direction:column}.mdc-snackbar__text{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;line-height:1.5rem;font-weight:400;letter-spacing:.03125em;text-decoration:inherit;text-transform:inherit;margin-left:0;margin-right:auto;display:flex;align-items:center;height:48px;transition:opacity .3s 0ms cubic-bezier(0.4, 0, 1, 1);opacity:0;color:#fff}.mdc-snackbar[dir="rtl"] .mdc-snackbar__text,[dir="rtl"] .mdc-snackbar .mdc-snackbar__text{margin-left:auto;margin-right:0}@media (min-width: 600px){.mdc-snackbar__text{padding-left:0;padding-right:24px}[dir="rtl"] .mdc-snackbar__text,.mdc-snackbar__text[dir="rtl"]{padding-left:24px;padding-right:0}}.mdc-snackbar--action-on-bottom .mdc-snackbar__text{margin-right:inherit}.mdc-snackbar--action-on-bottom .mdc-snackbar__action-wrapper{margin-left:auto;margin-right:0;flex-direction:column;justify-content:flex-start;margin-top:-12px;margin-bottom:8px}[dir="rtl"] .mdc-snackbar--action-on-bottom .mdc-snackbar__action-wrapper,.mdc-snackbar--action-on-bottom .mdc-snackbar__action-wrapper[dir="rtl"]{margin-left:0;margin-right:auto}.mdc-snackbar--multiline .mdc-snackbar__text{height:80px}.mdc-snackbar__action-button{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:2.25rem;font-weight:500;letter-spacing:.08929em;text-decoration:none;text-transform:uppercase;color:#018786;color:var(--mdc-theme-secondary, #018786);padding:0;transition:opacity .3s 0ms cubic-bezier(0.4, 0, 1, 1);border:none;outline:none;background-color:transparent;opacity:0;user-select:none;-webkit-appearance:none;visibility:hidden}.mdc-snackbar__action-button::-moz-focus-inner{border:0}.mdc-snackbar__action-button:hover{cursor:pointer}.mdc-snackbar__action-button:not([aria-hidden]){visibility:inherit}.mdc-snackbar--active .mdc-snackbar__text,.mdc-snackbar--active .mdc-snackbar__action-button:not([aria-hidden]){transition:opacity .3s 0ms cubic-bezier(0.4, 0, 1, 1);opacity:1}.mdc-snackbar--multiline.mdc-snackbar--action-on-bottom .mdc-snackbar__text{margin:0}\n</style>'], ['<style>.mdc-snackbar{display:flex;position:fixed;bottom:0;left:50%;align-items:center;justify-content:flex-start;box-sizing:border-box;padding-right:24px;padding-left:24px;transform:translate(-50%, 100%);transition:transform .25s 0ms cubic-bezier(0.4, 0, 1, 1);background-color:#323232;pointer-events:none;will-change:transform}@media (max-width: 599px){.mdc-snackbar{left:0;width:100%;transform:translate(0, 100%)}}@media (min-width: 600px){.mdc-snackbar{min-width:288px;max-width:568px;border-radius:2px}}@media (min-width: 600px){.mdc-snackbar--align-start{left:24px;right:initial;bottom:24px;transform:translate(0, 200%)}[dir="rtl"] .mdc-snackbar--align-start,.mdc-snackbar--align-start[dir="rtl"]{left:initial;right:24px}}@media (max-width: 599px){.mdc-snackbar--align-start{bottom:0;left:0;width:100%;transform:translate(0, 100%)}}.mdc-snackbar--active{transform:translate(0);transition:transform .25s 0ms cubic-bezier(0, 0, 0.2, 1);pointer-events:auto}.mdc-snackbar--active:not(.mdc-snackbar--align-start){transform:translate(-50%, 0)}@media (max-width: 599px){.mdc-snackbar--active:not(.mdc-snackbar--align-start){bottom:0;left:0;width:100%;transform:translate(0)}}.mdc-snackbar__action-wrapper{padding-left:24px;padding-right:0}[dir="rtl"] .mdc-snackbar__action-wrapper,.mdc-snackbar__action-wrapper[dir="rtl"]{padding-left:0;padding-right:24px}.mdc-snackbar--action-on-bottom{flex-direction:column}.mdc-snackbar__text{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;line-height:1.5rem;font-weight:400;letter-spacing:.03125em;text-decoration:inherit;text-transform:inherit;margin-left:0;margin-right:auto;display:flex;align-items:center;height:48px;transition:opacity .3s 0ms cubic-bezier(0.4, 0, 1, 1);opacity:0;color:#fff}.mdc-snackbar[dir="rtl"] .mdc-snackbar__text,[dir="rtl"] .mdc-snackbar .mdc-snackbar__text{margin-left:auto;margin-right:0}@media (min-width: 600px){.mdc-snackbar__text{padding-left:0;padding-right:24px}[dir="rtl"] .mdc-snackbar__text,.mdc-snackbar__text[dir="rtl"]{padding-left:24px;padding-right:0}}.mdc-snackbar--action-on-bottom .mdc-snackbar__text{margin-right:inherit}.mdc-snackbar--action-on-bottom .mdc-snackbar__action-wrapper{margin-left:auto;margin-right:0;flex-direction:column;justify-content:flex-start;margin-top:-12px;margin-bottom:8px}[dir="rtl"] .mdc-snackbar--action-on-bottom .mdc-snackbar__action-wrapper,.mdc-snackbar--action-on-bottom .mdc-snackbar__action-wrapper[dir="rtl"]{margin-left:0;margin-right:auto}.mdc-snackbar--multiline .mdc-snackbar__text{height:80px}.mdc-snackbar__action-button{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:2.25rem;font-weight:500;letter-spacing:.08929em;text-decoration:none;text-transform:uppercase;color:#018786;color:var(--mdc-theme-secondary, #018786);padding:0;transition:opacity .3s 0ms cubic-bezier(0.4, 0, 1, 1);border:none;outline:none;background-color:transparent;opacity:0;user-select:none;-webkit-appearance:none;visibility:hidden}.mdc-snackbar__action-button::-moz-focus-inner{border:0}.mdc-snackbar__action-button:hover{cursor:pointer}.mdc-snackbar__action-button:not([aria-hidden]){visibility:inherit}.mdc-snackbar--active .mdc-snackbar__text,.mdc-snackbar--active .mdc-snackbar__action-button:not([aria-hidden]){transition:opacity .3s 0ms cubic-bezier(0.4, 0, 1, 1);opacity:1}.mdc-snackbar--multiline.mdc-snackbar--action-on-bottom .mdc-snackbar__text{margin:0}\n</style>']);

  var style$a = html$1(_templateObject$k);

  /**
   * Copyright 2016 Google Inc. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  var cssClasses$5 = {
    ROOT: 'mdc-snackbar',
    TEXT: 'mdc-snackbar__text',
    ACTION_WRAPPER: 'mdc-snackbar__action-wrapper',
    ACTION_BUTTON: 'mdc-snackbar__action-button',
    ACTIVE: 'mdc-snackbar--active',
    MULTILINE: 'mdc-snackbar--multiline',
    ACTION_ON_BOTTOM: 'mdc-snackbar--action-on-bottom'
  };

  var strings$5 = {
    TEXT_SELECTOR: '.mdc-snackbar__text',
    ACTION_WRAPPER_SELECTOR: '.mdc-snackbar__action-wrapper',
    ACTION_BUTTON_SELECTOR: '.mdc-snackbar__action-button',
    SHOW_EVENT: 'MDCSnackbar:show',
    HIDE_EVENT: 'MDCSnackbar:hide'
  };

  var numbers$2 = {
    MESSAGE_TIMEOUT: 2750
  };

  /**
   * Copyright 2016 Google Inc. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  var MDCSnackbarFoundation = function (_MDCFoundation) {
    inherits(MDCSnackbarFoundation, _MDCFoundation);
    createClass(MDCSnackbarFoundation, [{
      key: 'active',
      get: function get$$1() {
        return this.active_;
      }
    }], [{
      key: 'cssClasses',
      get: function get$$1() {
        return cssClasses$5;
      }
    }, {
      key: 'strings',
      get: function get$$1() {
        return strings$5;
      }
    }, {
      key: 'defaultAdapter',
      get: function get$$1() {
        return {
          addClass: function addClass() /* className: string */{},
          removeClass: function removeClass() /* className: string */{},
          setAriaHidden: function setAriaHidden() {},
          unsetAriaHidden: function unsetAriaHidden() {},
          setActionAriaHidden: function setActionAriaHidden() {},
          unsetActionAriaHidden: function unsetActionAriaHidden() {},
          setActionText: function setActionText() /* actionText: string */{},
          setMessageText: function setMessageText() /* message: string */{},
          setFocus: function setFocus() {},
          visibilityIsHidden: function visibilityIsHidden() {
            return (/* boolean */false
            );
          },
          registerCapturedBlurHandler: function registerCapturedBlurHandler() /* handler: EventListener */{},
          deregisterCapturedBlurHandler: function deregisterCapturedBlurHandler() /* handler: EventListener */{},
          registerVisibilityChangeHandler: function registerVisibilityChangeHandler() /* handler: EventListener */{},
          deregisterVisibilityChangeHandler: function deregisterVisibilityChangeHandler() /* handler: EventListener */{},
          registerCapturedInteractionHandler: function registerCapturedInteractionHandler() /* evtType: string, handler: EventListener */{},
          deregisterCapturedInteractionHandler: function deregisterCapturedInteractionHandler() /* evtType: string, handler: EventListener */{},
          registerActionClickHandler: function registerActionClickHandler() /* handler: EventListener */{},
          deregisterActionClickHandler: function deregisterActionClickHandler() /* handler: EventListener */{},
          registerTransitionEndHandler: function registerTransitionEndHandler() /* handler: EventListener */{},
          deregisterTransitionEndHandler: function deregisterTransitionEndHandler() /* handler: EventListener */{},
          notifyShow: function notifyShow() {},
          notifyHide: function notifyHide() {}
        };
      }
    }]);

    function MDCSnackbarFoundation(adapter) {
      classCallCheck(this, MDCSnackbarFoundation);

      var _this = possibleConstructorReturn(this, (MDCSnackbarFoundation.__proto__ || Object.getPrototypeOf(MDCSnackbarFoundation)).call(this, _extends(MDCSnackbarFoundation.defaultAdapter, adapter)));

      _this.active_ = false;
      _this.actionWasClicked_ = false;
      _this.dismissOnAction_ = true;
      _this.firstFocus_ = true;
      _this.pointerDownRecognized_ = false;
      _this.snackbarHasFocus_ = false;
      _this.snackbarData_ = null;
      _this.queue_ = [];
      _this.actionClickHandler_ = function () {
        _this.actionWasClicked_ = true;
        _this.invokeAction_();
      };
      _this.visibilitychangeHandler_ = function () {
        clearTimeout(_this.timeoutId_);
        _this.snackbarHasFocus_ = true;

        if (!_this.adapter_.visibilityIsHidden()) {
          setTimeout(_this.cleanup_.bind(_this), _this.snackbarData_.timeout || numbers$2.MESSAGE_TIMEOUT);
        }
      };
      _this.interactionHandler_ = function (evt) {
        if (evt.type == 'touchstart' || evt.type == 'mousedown') {
          _this.pointerDownRecognized_ = true;
        }
        _this.handlePossibleTabKeyboardFocus_(evt);

        if (evt.type == 'focus') {
          _this.pointerDownRecognized_ = false;
        }
      };
      _this.blurHandler_ = function () {
        clearTimeout(_this.timeoutId_);
        _this.snackbarHasFocus_ = false;
        _this.timeoutId_ = setTimeout(_this.cleanup_.bind(_this), _this.snackbarData_.timeout || numbers$2.MESSAGE_TIMEOUT);
      };
      return _this;
    }

    createClass(MDCSnackbarFoundation, [{
      key: 'init',
      value: function init() {
        this.adapter_.registerActionClickHandler(this.actionClickHandler_);
        this.adapter_.setAriaHidden();
        this.adapter_.setActionAriaHidden();
      }
    }, {
      key: 'destroy',
      value: function destroy() {
        var _this2 = this;

        this.adapter_.deregisterActionClickHandler(this.actionClickHandler_);
        this.adapter_.deregisterCapturedBlurHandler(this.blurHandler_);
        this.adapter_.deregisterVisibilityChangeHandler(this.visibilitychangeHandler_);
        ['touchstart', 'mousedown', 'focus'].forEach(function (evtType) {
          _this2.adapter_.deregisterCapturedInteractionHandler(evtType, _this2.interactionHandler_);
        });
      }
    }, {
      key: 'dismissesOnAction',
      value: function dismissesOnAction() {
        return this.dismissOnAction_;
      }
    }, {
      key: 'setDismissOnAction',
      value: function setDismissOnAction(dismissOnAction) {
        this.dismissOnAction_ = !!dismissOnAction;
      }
    }, {
      key: 'show',
      value: function show(data) {
        var _this3 = this;

        if (!data) {
          throw new Error('Please provide a data object with at least a message to display.');
        }
        if (!data.message) {
          throw new Error('Please provide a message to be displayed.');
        }
        if (data.actionHandler && !data.actionText) {
          throw new Error('Please provide action text with the handler.');
        }
        if (this.active) {
          this.queue_.push(data);
          return;
        }
        clearTimeout(this.timeoutId_);
        this.snackbarData_ = data;
        this.firstFocus_ = true;
        this.adapter_.registerVisibilityChangeHandler(this.visibilitychangeHandler_);
        this.adapter_.registerCapturedBlurHandler(this.blurHandler_);
        ['touchstart', 'mousedown', 'focus'].forEach(function (evtType) {
          _this3.adapter_.registerCapturedInteractionHandler(evtType, _this3.interactionHandler_);
        });

        var ACTIVE = cssClasses$5.ACTIVE,
            MULTILINE = cssClasses$5.MULTILINE,
            ACTION_ON_BOTTOM = cssClasses$5.ACTION_ON_BOTTOM;


        this.adapter_.setMessageText(this.snackbarData_.message);

        if (this.snackbarData_.multiline) {
          this.adapter_.addClass(MULTILINE);
          if (this.snackbarData_.actionOnBottom) {
            this.adapter_.addClass(ACTION_ON_BOTTOM);
          }
        }

        if (this.snackbarData_.actionHandler) {
          this.adapter_.setActionText(this.snackbarData_.actionText);
          this.actionHandler_ = this.snackbarData_.actionHandler;
          this.setActionHidden_(false);
        } else {
          this.setActionHidden_(true);
          this.actionHandler_ = null;
          this.adapter_.setActionText(null);
        }

        this.active_ = true;
        this.adapter_.addClass(ACTIVE);
        this.adapter_.unsetAriaHidden();
        this.adapter_.notifyShow();

        this.timeoutId_ = setTimeout(this.cleanup_.bind(this), this.snackbarData_.timeout || numbers$2.MESSAGE_TIMEOUT);
      }
    }, {
      key: 'handlePossibleTabKeyboardFocus_',
      value: function handlePossibleTabKeyboardFocus_() {
        var hijackFocus = this.firstFocus_ && !this.pointerDownRecognized_;

        if (hijackFocus) {
          this.setFocusOnAction_();
        }

        this.firstFocus_ = false;
      }
    }, {
      key: 'setFocusOnAction_',
      value: function setFocusOnAction_() {
        this.adapter_.setFocus();
        this.snackbarHasFocus_ = true;
        this.firstFocus_ = false;
      }
    }, {
      key: 'invokeAction_',
      value: function invokeAction_() {
        try {
          if (!this.actionHandler_) {
            return;
          }

          this.actionHandler_();
        } finally {
          if (this.dismissOnAction_) {
            this.cleanup_();
          }
        }
      }
    }, {
      key: 'cleanup_',
      value: function cleanup_() {
        var _this4 = this;

        var allowDismissal = !this.snackbarHasFocus_ || this.actionWasClicked_;

        if (allowDismissal) {
          var ACTIVE = cssClasses$5.ACTIVE,
              MULTILINE = cssClasses$5.MULTILINE,
              ACTION_ON_BOTTOM = cssClasses$5.ACTION_ON_BOTTOM;


          this.adapter_.removeClass(ACTIVE);

          var handler = function handler() {
            clearTimeout(_this4.timeoutId_);
            _this4.adapter_.deregisterTransitionEndHandler(handler);
            _this4.adapter_.removeClass(MULTILINE);
            _this4.adapter_.removeClass(ACTION_ON_BOTTOM);
            _this4.setActionHidden_(true);
            _this4.adapter_.setAriaHidden();
            _this4.active_ = false;
            _this4.snackbarHasFocus_ = false;
            _this4.adapter_.notifyHide();
            _this4.showNext_();
          };

          this.adapter_.registerTransitionEndHandler(handler);
        }
      }
    }, {
      key: 'showNext_',
      value: function showNext_() {
        if (!this.queue_.length) {
          return;
        }
        this.show(this.queue_.shift());
      }
    }, {
      key: 'setActionHidden_',
      value: function setActionHidden_(isHidden) {
        if (isHidden) {
          this.adapter_.setActionAriaHidden();
        } else {
          this.adapter_.unsetActionAriaHidden();
        }
      }
    }]);
    return MDCSnackbarFoundation;
  }(MDCFoundation);

  /**
   * Copyright 2016 Google Inc. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  var MDCSnackbar = function (_MDCComponent) {
    inherits(MDCSnackbar, _MDCComponent);

    function MDCSnackbar() {
      classCallCheck(this, MDCSnackbar);
      return possibleConstructorReturn(this, (MDCSnackbar.__proto__ || Object.getPrototypeOf(MDCSnackbar)).apply(this, arguments));
    }

    createClass(MDCSnackbar, [{
      key: 'show',
      value: function show(data) {
        this.foundation_.show(data);
      }
    }, {
      key: 'getDefaultFoundation',
      value: function getDefaultFoundation() {
        var _this2 = this;

        var _MDCSnackbarFoundatio = MDCSnackbarFoundation.strings,
            TEXT_SELECTOR = _MDCSnackbarFoundatio.TEXT_SELECTOR,
            ACTION_BUTTON_SELECTOR = _MDCSnackbarFoundatio.ACTION_BUTTON_SELECTOR;

        var getText = function getText() {
          return _this2.root_.querySelector(TEXT_SELECTOR);
        };
        var getActionButton = function getActionButton() {
          return _this2.root_.querySelector(ACTION_BUTTON_SELECTOR);
        };

        /* eslint brace-style: "off" */
        return new MDCSnackbarFoundation({
          addClass: function addClass(className) {
            return _this2.root_.classList.add(className);
          },
          removeClass: function removeClass(className) {
            return _this2.root_.classList.remove(className);
          },
          setAriaHidden: function setAriaHidden() {
            return _this2.root_.setAttribute('aria-hidden', 'true');
          },
          unsetAriaHidden: function unsetAriaHidden() {
            return _this2.root_.removeAttribute('aria-hidden');
          },
          setActionAriaHidden: function setActionAriaHidden() {
            return getActionButton().setAttribute('aria-hidden', 'true');
          },
          unsetActionAriaHidden: function unsetActionAriaHidden() {
            return getActionButton().removeAttribute('aria-hidden');
          },
          setActionText: function setActionText(text) {
            getActionButton().textContent = text;
          },
          setMessageText: function setMessageText(text) {
            getText().textContent = text;
          },
          setFocus: function setFocus() {
            return getActionButton().focus();
          },
          visibilityIsHidden: function visibilityIsHidden() {
            return document.hidden;
          },
          registerCapturedBlurHandler: function registerCapturedBlurHandler(handler) {
            return getActionButton().addEventListener('blur', handler, true);
          },
          deregisterCapturedBlurHandler: function deregisterCapturedBlurHandler(handler) {
            return getActionButton().removeEventListener('blur', handler, true);
          },
          registerVisibilityChangeHandler: function registerVisibilityChangeHandler(handler) {
            return document.addEventListener('visibilitychange', handler);
          },
          deregisterVisibilityChangeHandler: function deregisterVisibilityChangeHandler(handler) {
            return document.removeEventListener('visibilitychange', handler);
          },
          registerCapturedInteractionHandler: function registerCapturedInteractionHandler(evt, handler) {
            return document.body.addEventListener(evt, handler, true);
          },
          deregisterCapturedInteractionHandler: function deregisterCapturedInteractionHandler(evt, handler) {
            return document.body.removeEventListener(evt, handler, true);
          },
          registerActionClickHandler: function registerActionClickHandler(handler) {
            return getActionButton().addEventListener('click', handler);
          },
          deregisterActionClickHandler: function deregisterActionClickHandler(handler) {
            return getActionButton().removeEventListener('click', handler);
          },
          registerTransitionEndHandler: function registerTransitionEndHandler(handler) {
            return _this2.root_.addEventListener(getCorrectEventName(window, 'transitionend'), handler);
          },
          deregisterTransitionEndHandler: function deregisterTransitionEndHandler(handler) {
            return _this2.root_.removeEventListener(getCorrectEventName(window, 'transitionend'), handler);
          },
          notifyShow: function notifyShow() {
            return _this2.emit(MDCSnackbarFoundation.strings.SHOW_EVENT);
          },
          notifyHide: function notifyHide() {
            return _this2.emit(MDCSnackbarFoundation.strings.HIDE_EVENT);
          }
        });
      }
    }, {
      key: 'dismissesOnAction',
      get: function get$$1() {
        return this.foundation_.dismissesOnAction();
      },
      set: function set$$1(dismissesOnAction) {
        this.foundation_.setDismissOnAction(dismissesOnAction);
      }
    }], [{
      key: 'attachTo',
      value: function attachTo(root) {
        return new MDCSnackbar(root);
      }
    }]);
    return MDCSnackbar;
  }(MDCComponent);

  var _templateObject$l = taggedTemplateLiteral(['', '\n      <div class="mdc-snackbar"\n        aria-live="assertive"\n        aria-atomic="true"\n        aria-hidden="true">\n      <div class="mdc-snackbar__text"></div>\n      <div class="mdc-snackbar__action-wrapper">\n        <button type="button" class="mdc-snackbar__action-button"></button>\n      </div>\n    </div>'], ['', '\n      <div class="mdc-snackbar"\n        aria-live="assertive"\n        aria-atomic="true"\n        aria-hidden="true">\n      <div class="mdc-snackbar__text"></div>\n      <div class="mdc-snackbar__action-wrapper">\n        <button type="button" class="mdc-snackbar__action-button"></button>\n      </div>\n    </div>']);

  var MDCWCSnackbar = function (_MDCWebComponentMixin) {
    inherits(MDCWCSnackbar, _MDCWebComponentMixin);

    function MDCWCSnackbar() {
      classCallCheck(this, MDCWCSnackbar);
      return possibleConstructorReturn(this, (MDCWCSnackbar.__proto__ || Object.getPrototypeOf(MDCWCSnackbar)).apply(this, arguments));
    }

    return MDCWCSnackbar;
  }(MDCWebComponentMixin(MDCSnackbar));

  var Snackbar = function (_ComponentElement) {
    inherits(Snackbar, _ComponentElement);
    createClass(Snackbar, null, [{
      key: 'ComponentClass',
      get: function get$$1() {
        return MDCWCSnackbar;
      }
    }, {
      key: 'componentSelector',
      get: function get$$1() {
        return '.mdc-snackbar';
      }
    }, {
      key: 'properties',
      get: function get$$1() {
        return {
          message: String,
          timeout: Number,
          multiline: Boolean,
          actionText: String,
          actionOnBottom: Boolean,
          dismissesOnAction: Boolean
        };
      }
    }]);

    function Snackbar() {
      classCallCheck(this, Snackbar);

      var _this2 = possibleConstructorReturn(this, (Snackbar.__proto__ || Object.getPrototypeOf(Snackbar)).call(this));

      _this2._asyncComponent = true;
      _this2.message = '';
      _this2.actionText = '';
      _this2.timeout = -1;
      _this2.multiline = false;
      _this2.actionOnBottom = false;
      _this2.dismissesOnAction = true;
      _this2._boundActionHandler = _this2._actionHandler.bind(_this2);
      return _this2;
    }

    createClass(Snackbar, [{
      key: '_renderStyle',
      value: function _renderStyle() {
        return style$a;
      }
    }, {
      key: '_render',
      value: function _render(_ref) {
        var checked = _ref.checked,
            value = _ref.value;

        return html$1(_templateObject$l, this._renderStyle());
      }
    }, {
      key: 'show',
      value: function show(data) {
        var _this3 = this;

        this.componentReady().then(function (component) {
          var options = {
            message: _this3.message,
            actionText: _this3.actionText,
            multiline: _this3.multiLine,
            actionOnBottom: _this3.actionOnBottom,
            actionHandler: _this3._boundActionHandler
          };
          if (_this3.timeout >= 0) {
            options.timeout = _this3.timeout;
          }
          component.show(_extends(options, data));
        });
      }
    }, {
      key: '_actionHandler',
      value: function _actionHandler() {
        this.dispatchEvent(new CustomEvent('MDCSnackbar:action'));
      }
    }, {
      key: 'dismissesOnAction',
      get: function get$$1() {
        return this._component && this._component.dismissesOnAction;
      },
      set: function set$$1(value) {
        this.componentReady().then(function (component) {
          component.dismissesOnAction = value;
        });
      }
    }]);
    return Snackbar;
  }(ComponentElement);

  customElements.define('mwc-snackbar', Snackbar);

  /**
   * @license
   * Copyright 2016 Google Inc. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /** @enum {string} */
  var strings$6 = {
    ARIA_CONTROLS: 'aria-controls',
    INPUT_SELECTOR: '.mdc-text-field__input',
    LABEL_SELECTOR: '.mdc-floating-label',
    ICON_SELECTOR: '.mdc-text-field__icon',
    OUTLINE_SELECTOR: '.mdc-notched-outline',
    LINE_RIPPLE_SELECTOR: '.mdc-line-ripple'
  };

  /** @enum {string} */
  var cssClasses$6 = {
    ROOT: 'mdc-text-field',
    UPGRADED: 'mdc-text-field--upgraded',
    DISABLED: 'mdc-text-field--disabled',
    DENSE: 'mdc-text-field--dense',
    FOCUSED: 'mdc-text-field--focused',
    INVALID: 'mdc-text-field--invalid',
    BOX: 'mdc-text-field--box',
    OUTLINED: 'mdc-text-field--outlined'
  };

  /** @enum {number} */
  var numbers$3 = {
    LABEL_SCALE: 0.75,
    DENSE_LABEL_SCALE: 0.923
  };

  /**
   * @license
   * Copyright 2017 Google Inc. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /* eslint no-unused-vars: [2, {"args": "none"}] */

  /**
   * Adapter for MDC Text Field Helper Text.
   *
   * Defines the shape of the adapter expected by the foundation. Implement this
   * adapter to integrate the TextField helper text into your framework. See
   * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
   * for more information.
   *
   * @record
   */
  var MDCTextFieldHelperTextAdapter = function () {
    function MDCTextFieldHelperTextAdapter() {
      classCallCheck(this, MDCTextFieldHelperTextAdapter);
    }

    createClass(MDCTextFieldHelperTextAdapter, [{
      key: "addClass",

      /**
       * Adds a class to the helper text element.
       * @param {string} className
       */
      value: function addClass(className) {}

      /**
       * Removes a class from the helper text element.
       * @param {string} className
       */

    }, {
      key: "removeClass",
      value: function removeClass(className) {}

      /**
       * Returns whether or not the helper text element contains the given class.
       * @param {string} className
       * @return {boolean}
       */

    }, {
      key: "hasClass",
      value: function hasClass(className) {}

      /**
       * Sets an attribute with a given value on the helper text element.
       * @param {string} attr
       * @param {string} value
       */

    }, {
      key: "setAttr",
      value: function setAttr(attr, value) {}

      /**
       * Removes an attribute from the helper text element.
       * @param {string} attr
       */

    }, {
      key: "removeAttr",
      value: function removeAttr(attr) {}

      /**
       * Sets the text content for the helper text element.
       * @param {string} content
       */

    }, {
      key: "setContent",
      value: function setContent(content) {}
    }]);
    return MDCTextFieldHelperTextAdapter;
  }();

  /**
   * @license
   * Copyright 2016 Google Inc. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /** @enum {string} */
  var strings$7 = {
    ARIA_HIDDEN: 'aria-hidden',
    ROLE: 'role'
  };

  /** @enum {string} */
  var cssClasses$7 = {
    HELPER_TEXT_PERSISTENT: 'mdc-text-field-helper-text--persistent',
    HELPER_TEXT_VALIDATION_MSG: 'mdc-text-field-helper-text--validation-msg'
  };

  /**
   * @license
   * Copyright 2017 Google Inc. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
   * @extends {MDCFoundation<!MDCTextFieldHelperTextAdapter>}
   * @final
   */

  var MDCTextFieldHelperTextFoundation = function (_MDCFoundation) {
    inherits(MDCTextFieldHelperTextFoundation, _MDCFoundation);
    createClass(MDCTextFieldHelperTextFoundation, null, [{
      key: 'cssClasses',

      /** @return enum {string} */
      get: function get$$1() {
        return cssClasses$7;
      }

      /** @return enum {string} */

    }, {
      key: 'strings',
      get: function get$$1() {
        return strings$7;
      }

      /**
       * {@see MDCTextFieldHelperTextAdapter} for typing information on parameters and return
       * types.
       * @return {!MDCTextFieldHelperTextAdapter}
       */

    }, {
      key: 'defaultAdapter',
      get: function get$$1() {
        return (/** @type {!MDCTextFieldHelperTextAdapter} */{
            addClass: function addClass() {},
            removeClass: function removeClass() {},
            hasClass: function hasClass() {},
            setAttr: function setAttr() {},
            removeAttr: function removeAttr() {},
            setContent: function setContent() {}
          }
        );
      }

      /**
       * @param {!MDCTextFieldHelperTextAdapter} adapter
       */

    }]);

    function MDCTextFieldHelperTextFoundation(adapter) {
      classCallCheck(this, MDCTextFieldHelperTextFoundation);
      return possibleConstructorReturn(this, (MDCTextFieldHelperTextFoundation.__proto__ || Object.getPrototypeOf(MDCTextFieldHelperTextFoundation)).call(this, _extends(MDCTextFieldHelperTextFoundation.defaultAdapter, adapter)));
    }

    /**
     * Sets the content of the helper text field.
     * @param {string} content
     */


    createClass(MDCTextFieldHelperTextFoundation, [{
      key: 'setContent',
      value: function setContent(content) {
        this.adapter_.setContent(content);
      }

      /** @param {boolean} isPersistent Sets the persistency of the helper text. */

    }, {
      key: 'setPersistent',
      value: function setPersistent(isPersistent) {
        if (isPersistent) {
          this.adapter_.addClass(cssClasses$7.HELPER_TEXT_PERSISTENT);
        } else {
          this.adapter_.removeClass(cssClasses$7.HELPER_TEXT_PERSISTENT);
        }
      }

      /**
       * @param {boolean} isValidation True to make the helper text act as an
       *   error validation message.
       */

    }, {
      key: 'setValidation',
      value: function setValidation(isValidation) {
        if (isValidation) {
          this.adapter_.addClass(cssClasses$7.HELPER_TEXT_VALIDATION_MSG);
        } else {
          this.adapter_.removeClass(cssClasses$7.HELPER_TEXT_VALIDATION_MSG);
        }
      }

      /** Makes the helper text visible to the screen reader. */

    }, {
      key: 'showToScreenReader',
      value: function showToScreenReader() {
        this.adapter_.removeAttr(strings$7.ARIA_HIDDEN);
      }

      /**
       * Sets the validity of the helper text based on the input validity.
       * @param {boolean} inputIsValid
       */

    }, {
      key: 'setValidity',
      value: function setValidity(inputIsValid) {
        var helperTextIsPersistent = this.adapter_.hasClass(cssClasses$7.HELPER_TEXT_PERSISTENT);
        var helperTextIsValidationMsg = this.adapter_.hasClass(cssClasses$7.HELPER_TEXT_VALIDATION_MSG);
        var validationMsgNeedsDisplay = helperTextIsValidationMsg && !inputIsValid;

        if (validationMsgNeedsDisplay) {
          this.adapter_.setAttr(strings$7.ROLE, 'alert');
        } else {
          this.adapter_.removeAttr(strings$7.ROLE);
        }

        if (!helperTextIsPersistent && !validationMsgNeedsDisplay) {
          this.hide_();
        }
      }

      /**
       * Hides the help text from screen readers.
       * @private
       */

    }, {
      key: 'hide_',
      value: function hide_() {
        this.adapter_.setAttr(strings$7.ARIA_HIDDEN, 'true');
      }
    }]);
    return MDCTextFieldHelperTextFoundation;
  }(MDCFoundation);

  /**
   * @license
   * Copyright 2017 Google Inc. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /* eslint no-unused-vars: [2, {"args": "none"}] */

  /**
   * Adapter for MDC Text Field Icon.
   *
   * Defines the shape of the adapter expected by the foundation. Implement this
   * adapter to integrate the text field icon into your framework. See
   * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
   * for more information.
   *
   * @record
   */
  var MDCTextFieldIconAdapter = function () {
    function MDCTextFieldIconAdapter() {
      classCallCheck(this, MDCTextFieldIconAdapter);
    }

    createClass(MDCTextFieldIconAdapter, [{
      key: "getAttr",

      /**
       * Gets the value of an attribute on the icon element.
       * @param {string} attr
       * @return {string}
       */
      value: function getAttr(attr) {}

      /**
       * Sets an attribute on the icon element.
       * @param {string} attr
       * @param {string} value
       */

    }, {
      key: "setAttr",
      value: function setAttr(attr, value) {}

      /**
       * Removes an attribute from the icon element.
       * @param {string} attr
       */

    }, {
      key: "removeAttr",
      value: function removeAttr(attr) {}

      /**
       * Registers an event listener on the icon element for a given event.
       * @param {string} evtType
       * @param {function(!Event): undefined} handler
       */

    }, {
      key: "registerInteractionHandler",
      value: function registerInteractionHandler(evtType, handler) {}

      /**
       * Deregisters an event listener on the icon element for a given event.
       * @param {string} evtType
       * @param {function(!Event): undefined} handler
       */

    }, {
      key: "deregisterInteractionHandler",
      value: function deregisterInteractionHandler(evtType, handler) {}

      /**
       * Emits a custom event "MDCTextField:icon" denoting a user has clicked the icon.
       */

    }, {
      key: "notifyIconAction",
      value: function notifyIconAction() {}
    }]);
    return MDCTextFieldIconAdapter;
  }();

  /**
   * @license
   * Copyright 2016 Google Inc. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /** @enum {string} */
  var strings$8 = {
    ICON_EVENT: 'MDCTextField:icon',
    ICON_ROLE: 'button'
  };

  /**
   * @license
   * Copyright 2017 Google Inc. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
   * @extends {MDCFoundation<!MDCTextFieldIconAdapter>}
   * @final
   */

  var MDCTextFieldIconFoundation = function (_MDCFoundation) {
    inherits(MDCTextFieldIconFoundation, _MDCFoundation);
    createClass(MDCTextFieldIconFoundation, null, [{
      key: 'strings',

      /** @return enum {string} */
      get: function get$$1() {
        return strings$8;
      }

      /**
       * {@see MDCTextFieldIconAdapter} for typing information on parameters and return
       * types.
       * @return {!MDCTextFieldIconAdapter}
       */

    }, {
      key: 'defaultAdapter',
      get: function get$$1() {
        return (/** @type {!MDCTextFieldIconAdapter} */{
            getAttr: function getAttr() {},
            setAttr: function setAttr() {},
            removeAttr: function removeAttr() {},
            registerInteractionHandler: function registerInteractionHandler() {},
            deregisterInteractionHandler: function deregisterInteractionHandler() {},
            notifyIconAction: function notifyIconAction() {}
          }
        );
      }

      /**
       * @param {!MDCTextFieldIconAdapter} adapter
       */

    }]);

    function MDCTextFieldIconFoundation(adapter) {
      classCallCheck(this, MDCTextFieldIconFoundation);

      /** @private {string?} */
      var _this = possibleConstructorReturn(this, (MDCTextFieldIconFoundation.__proto__ || Object.getPrototypeOf(MDCTextFieldIconFoundation)).call(this, _extends(MDCTextFieldIconFoundation.defaultAdapter, adapter)));

      _this.savedTabIndex_ = null;

      /** @private {function(!Event): undefined} */
      _this.interactionHandler_ = function (evt) {
        return _this.handleInteraction(evt);
      };
      return _this;
    }

    createClass(MDCTextFieldIconFoundation, [{
      key: 'init',
      value: function init() {
        var _this2 = this;

        this.savedTabIndex_ = this.adapter_.getAttr('tabindex');

        ['click', 'keydown'].forEach(function (evtType) {
          _this2.adapter_.registerInteractionHandler(evtType, _this2.interactionHandler_);
        });
      }
    }, {
      key: 'destroy',
      value: function destroy() {
        var _this3 = this;

        ['click', 'keydown'].forEach(function (evtType) {
          _this3.adapter_.deregisterInteractionHandler(evtType, _this3.interactionHandler_);
        });
      }

      /**
       * Sets the content of the helper text field.
       * @param {boolean} disabled
       */

    }, {
      key: 'setDisabled',
      value: function setDisabled(disabled) {
        if (!this.savedTabIndex_) {
          return;
        }

        if (disabled) {
          this.adapter_.setAttr('tabindex', '-1');
          this.adapter_.removeAttr('role');
        } else {
          this.adapter_.setAttr('tabindex', this.savedTabIndex_);
          this.adapter_.setAttr('role', strings$8.ICON_ROLE);
        }
      }

      /**
       * Handles an interaction event
       * @param {!Event} evt
       */

    }, {
      key: 'handleInteraction',
      value: function handleInteraction(evt) {
        if (evt.type === 'click' || evt.key === 'Enter' || evt.keyCode === 13) {
          this.adapter_.notifyIconAction();
        }
      }
    }]);
    return MDCTextFieldIconFoundation;
  }(MDCFoundation);

  /**
   * @license
   * Copyright 2017 Google Inc. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
   * Adapter for MDC Text Field.
   *
   * Defines the shape of the adapter expected by the foundation. Implement this
   * adapter to integrate the Text Field into your framework. See
   * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
   * for more information.
   *
   * @record
   */

  var MDCTextFieldAdapter = function () {
    function MDCTextFieldAdapter() {
      classCallCheck(this, MDCTextFieldAdapter);
    }

    createClass(MDCTextFieldAdapter, [{
      key: 'addClass',

      /**
       * Adds a class to the root Element.
       * @param {string} className
       */
      value: function addClass(className) {}

      /**
       * Removes a class from the root Element.
       * @param {string} className
       */

    }, {
      key: 'removeClass',
      value: function removeClass(className) {}

      /**
       * Returns true if the root element contains the given class name.
       * @param {string} className
       * @return {boolean}
       */

    }, {
      key: 'hasClass',
      value: function hasClass(className) {}

      /**
       * Registers an event handler on the root element for a given event.
       * @param {string} type
       * @param {function(!Event): undefined} handler
       */

    }, {
      key: 'registerTextFieldInteractionHandler',
      value: function registerTextFieldInteractionHandler(type, handler) {}

      /**
       * Deregisters an event handler on the root element for a given event.
       * @param {string} type
       * @param {function(!Event): undefined} handler
       */

    }, {
      key: 'deregisterTextFieldInteractionHandler',
      value: function deregisterTextFieldInteractionHandler(type, handler) {}

      /**
       * Registers an event listener on the native input element for a given event.
       * @param {string} evtType
       * @param {function(!Event): undefined} handler
       */

    }, {
      key: 'registerInputInteractionHandler',
      value: function registerInputInteractionHandler(evtType, handler) {}

      /**
       * Deregisters an event listener on the native input element for a given event.
       * @param {string} evtType
       * @param {function(!Event): undefined} handler
       */

    }, {
      key: 'deregisterInputInteractionHandler',
      value: function deregisterInputInteractionHandler(evtType, handler) {}

      /**
       * Registers a validation attribute change listener on the input element.
       * @param {function(!Array): undefined} handler
       * @return {!MutationObserver}
       */

    }, {
      key: 'registerValidationAttributeChangeHandler',
      value: function registerValidationAttributeChangeHandler(handler) {}

      /**
       * Disconnects a validation attribute observer on the input element.
       * @param {!MutationObserver} observer
       */

    }, {
      key: 'deregisterValidationAttributeChangeHandler',
      value: function deregisterValidationAttributeChangeHandler(observer) {}

      /**
       * Returns an object representing the native text input element, with a
       * similar API shape. The object returned should include the value, disabled
       * and badInput properties, as well as the checkValidity() function. We never
       * alter the value within our code, however we do update the disabled
       * property, so if you choose to duck-type the return value for this method
       * in your implementation it's important to keep this in mind. Also note that
       * this method can return null, which the foundation will handle gracefully.
       * @return {?Element|?NativeInputType}
       */

    }, {
      key: 'getNativeInput',
      value: function getNativeInput() {}

      /**
       * Returns true if the textfield is focused.
       * We achieve this via `document.activeElement === this.root_`.
       * @return {boolean}
       */

    }, {
      key: 'isFocused',
      value: function isFocused() {}

      /**
       * Returns true if the direction of the root element is set to RTL.
       * @return {boolean}
       */

    }, {
      key: 'isRtl',
      value: function isRtl() {}

      /**
       * Activates the line ripple.
       */

    }, {
      key: 'activateLineRipple',
      value: function activateLineRipple() {}

      /**
       * Deactivates the line ripple.
       */

    }, {
      key: 'deactivateLineRipple',
      value: function deactivateLineRipple() {}

      /**
       * Sets the transform origin of the line ripple.
       * @param {number} normalizedX
       */

    }, {
      key: 'setLineRippleTransformOrigin',
      value: function setLineRippleTransformOrigin(normalizedX) {}

      /**
       * Only implement if label exists.
       * Shakes label if shouldShake is true.
       * @param {boolean} shouldShake
       */

    }, {
      key: 'shakeLabel',
      value: function shakeLabel(shouldShake) {}

      /**
       * Only implement if label exists.
       * Floats the label above the input element if shouldFloat is true.
       * @param {boolean} shouldFloat
       */

    }, {
      key: 'floatLabel',
      value: function floatLabel(shouldFloat) {}

      /**
       * Returns true if label element exists, false if it doesn't.
       * @return {boolean}
       */

    }, {
      key: 'hasLabel',
      value: function hasLabel() {}

      /**
       * Only implement if label exists.
       * Returns width of label in pixels.
       * @return {number}
       */

    }, {
      key: 'getLabelWidth',
      value: function getLabelWidth() {}

      /**
       * Returns true if outline element exists, false if it doesn't.
       * @return {boolean}
       */

    }, {
      key: 'hasOutline',
      value: function hasOutline() {}

      /**
       * Only implement if outline element exists.
       * Updates SVG Path and outline element based on the
       * label element width and RTL context.
       * @param {number} labelWidth
       * @param {boolean=} isRtl
       */

    }, {
      key: 'notchOutline',
      value: function notchOutline(labelWidth, isRtl) {}

      /**
       * Only implement if outline element exists.
       * Closes notch in outline element.
       */

    }, {
      key: 'closeOutline',
      value: function closeOutline() {}
    }]);
    return MDCTextFieldAdapter;
  }();

  /**
   * @license
   * Copyright 2016 Google Inc. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  // whitelist based off of https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5/Constraint_validation
  // under section: `Validation-related attributes`
  var VALIDATION_ATTR_WHITELIST = ['pattern', 'min', 'max', 'required', 'step', 'minlength', 'maxlength'];

  /**
   * @extends {MDCFoundation<!MDCTextFieldAdapter>}
   * @final
   */

  var MDCTextFieldFoundation = function (_MDCFoundation) {
    inherits(MDCTextFieldFoundation, _MDCFoundation);
    createClass(MDCTextFieldFoundation, [{
      key: 'shouldShake',


      /** @return {boolean} */
      get: function get$$1() {
        return !this.isValid() && !this.isFocused_;
      }

      /** @return {boolean} */

    }, {
      key: 'shouldFloat',
      get: function get$$1() {
        return !this.isBadInput_() && (!!this.getValue() || this.isFocused_);
      }

      /**
       * {@see MDCTextFieldAdapter} for typing information on parameters and return
       * types.
       * @return {!MDCTextFieldAdapter}
       */

    }], [{
      key: 'cssClasses',

      /** @return enum {string} */
      get: function get$$1() {
        return cssClasses$6;
      }

      /** @return enum {string} */

    }, {
      key: 'strings',
      get: function get$$1() {
        return strings$6;
      }

      /** @return enum {string} */

    }, {
      key: 'numbers',
      get: function get$$1() {
        return numbers$3;
      }
    }, {
      key: 'defaultAdapter',
      get: function get$$1() {
        return (/** @type {!MDCTextFieldAdapter} */{
            addClass: function addClass() {},
            removeClass: function removeClass() {},
            hasClass: function hasClass() {},
            registerTextFieldInteractionHandler: function registerTextFieldInteractionHandler() {},
            deregisterTextFieldInteractionHandler: function deregisterTextFieldInteractionHandler() {},
            registerInputInteractionHandler: function registerInputInteractionHandler() {},
            deregisterInputInteractionHandler: function deregisterInputInteractionHandler() {},
            registerValidationAttributeChangeHandler: function registerValidationAttributeChangeHandler() {},
            deregisterValidationAttributeChangeHandler: function deregisterValidationAttributeChangeHandler() {},
            getNativeInput: function getNativeInput() {},
            isFocused: function isFocused() {},
            isRtl: function isRtl() {},
            activateLineRipple: function activateLineRipple() {},
            deactivateLineRipple: function deactivateLineRipple() {},
            setLineRippleTransformOrigin: function setLineRippleTransformOrigin() {},
            shakeLabel: function shakeLabel() {},
            floatLabel: function floatLabel() {},
            hasLabel: function hasLabel() {},
            getLabelWidth: function getLabelWidth() {},
            hasOutline: function hasOutline() {},
            notchOutline: function notchOutline() {},
            closeOutline: function closeOutline() {}
          }
        );
      }

      /**
       * @param {!MDCTextFieldAdapter} adapter
       * @param {!FoundationMapType=} foundationMap Map from subcomponent names to their subfoundations.
       */

    }]);

    function MDCTextFieldFoundation(adapter) {
      var foundationMap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : /** @type {!FoundationMapType} */{};
      classCallCheck(this, MDCTextFieldFoundation);

      /** @type {!MDCTextFieldHelperTextFoundation|undefined} */
      var _this = possibleConstructorReturn(this, (MDCTextFieldFoundation.__proto__ || Object.getPrototypeOf(MDCTextFieldFoundation)).call(this, _extends(MDCTextFieldFoundation.defaultAdapter, adapter)));

      _this.helperText_ = foundationMap.helperText;
      /** @type {!MDCTextFieldIconFoundation|undefined} */
      _this.icon_ = foundationMap.icon;

      /** @private {boolean} */
      _this.isFocused_ = false;
      /** @private {boolean} */
      _this.receivedUserInput_ = false;
      /** @private {boolean} */
      _this.useCustomValidityChecking_ = false;
      /** @private {boolean} */
      _this.isValid_ = true;
      /** @private {function(): undefined} */
      _this.inputFocusHandler_ = function () {
        return _this.activateFocus();
      };
      /** @private {function(): undefined} */
      _this.inputBlurHandler_ = function () {
        return _this.deactivateFocus();
      };
      /** @private {function(): undefined} */
      _this.inputInputHandler_ = function () {
        return _this.autoCompleteFocus();
      };
      /** @private {function(!Event): undefined} */
      _this.setPointerXOffset_ = function (evt) {
        return _this.setTransformOrigin(evt);
      };
      /** @private {function(!Event): undefined} */
      _this.textFieldInteractionHandler_ = function () {
        return _this.handleTextFieldInteraction();
      };
      /** @private {function(!Array): undefined} */
      _this.validationAttributeChangeHandler_ = function (mutations) {
        return _this.handleValidationAttributeMutation(mutations);
      };
      /** @private {!MutationObserver} */
      _this.validationObserver_;
      return _this;
    }

    createClass(MDCTextFieldFoundation, [{
      key: 'init',
      value: function init() {
        var _this2 = this;

        this.adapter_.addClass(MDCTextFieldFoundation.cssClasses.UPGRADED);
        // Ensure label does not collide with any pre-filled value.
        if (this.adapter_.hasLabel() && this.getValue()) {
          this.adapter_.floatLabel(this.shouldFloat);
          this.notchOutline(this.shouldFloat);
        }

        if (this.adapter_.isFocused()) {
          this.inputFocusHandler_();
        }

        this.adapter_.registerInputInteractionHandler('focus', this.inputFocusHandler_);
        this.adapter_.registerInputInteractionHandler('blur', this.inputBlurHandler_);
        this.adapter_.registerInputInteractionHandler('input', this.inputInputHandler_);
        ['mousedown', 'touchstart'].forEach(function (evtType) {
          _this2.adapter_.registerInputInteractionHandler(evtType, _this2.setPointerXOffset_);
        });
        ['click', 'keydown'].forEach(function (evtType) {
          _this2.adapter_.registerTextFieldInteractionHandler(evtType, _this2.textFieldInteractionHandler_);
        });
        this.validationObserver_ = this.adapter_.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler_);
      }
    }, {
      key: 'destroy',
      value: function destroy() {
        var _this3 = this;

        this.adapter_.removeClass(MDCTextFieldFoundation.cssClasses.UPGRADED);
        this.adapter_.deregisterInputInteractionHandler('focus', this.inputFocusHandler_);
        this.adapter_.deregisterInputInteractionHandler('blur', this.inputBlurHandler_);
        this.adapter_.deregisterInputInteractionHandler('input', this.inputInputHandler_);
        ['mousedown', 'touchstart'].forEach(function (evtType) {
          _this3.adapter_.deregisterInputInteractionHandler(evtType, _this3.setPointerXOffset_);
        });
        ['click', 'keydown'].forEach(function (evtType) {
          _this3.adapter_.deregisterTextFieldInteractionHandler(evtType, _this3.textFieldInteractionHandler_);
        });
        this.adapter_.deregisterValidationAttributeChangeHandler(this.validationObserver_);
      }

      /**
       * Handles user interactions with the Text Field.
       */

    }, {
      key: 'handleTextFieldInteraction',
      value: function handleTextFieldInteraction() {
        if (this.adapter_.getNativeInput().disabled) {
          return;
        }
        this.receivedUserInput_ = true;
      }

      /**
       * Handles validation attribute changes
       * @param {!Array<MutationRecord>} mutationsList
       */

    }, {
      key: 'handleValidationAttributeMutation',
      value: function handleValidationAttributeMutation(mutationsList) {
        var _this4 = this;

        mutationsList.some(function (mutation) {
          if (VALIDATION_ATTR_WHITELIST.indexOf(mutation.attributeName) > -1) {
            _this4.styleValidity_(true);
            return true;
          }
        });
      }

      /**
       * Opens/closes the notched outline.
       * @param {boolean} openNotch
       */

    }, {
      key: 'notchOutline',
      value: function notchOutline(openNotch) {
        if (!this.adapter_.hasOutline() || !this.adapter_.hasLabel()) {
          return;
        }

        if (openNotch) {
          var isDense = this.adapter_.hasClass(cssClasses$6.DENSE);
          var labelScale = isDense ? numbers$3.DENSE_LABEL_SCALE : numbers$3.LABEL_SCALE;
          var labelWidth = this.adapter_.getLabelWidth() * labelScale;
          var isRtl = this.adapter_.isRtl();
          this.adapter_.notchOutline(labelWidth, isRtl);
        } else {
          this.adapter_.closeOutline();
        }
      }

      /**
       * Activates the text field focus state.
       */

    }, {
      key: 'activateFocus',
      value: function activateFocus() {
        this.isFocused_ = true;
        this.styleFocused_(this.isFocused_);
        this.adapter_.activateLineRipple();
        this.notchOutline(this.shouldFloat);
        if (this.adapter_.hasLabel()) {
          this.adapter_.shakeLabel(this.shouldShake);
          this.adapter_.floatLabel(this.shouldFloat);
        }
        if (this.helperText_) {
          this.helperText_.showToScreenReader();
        }
      }

      /**
       * Sets the line ripple's transform origin, so that the line ripple activate
       * animation will animate out from the user's click location.
       * @param {!Event} evt
       */

    }, {
      key: 'setTransformOrigin',
      value: function setTransformOrigin(evt) {
        var targetClientRect = evt.target.getBoundingClientRect();
        var evtCoords = { x: evt.clientX, y: evt.clientY };
        var normalizedX = evtCoords.x - targetClientRect.left;
        this.adapter_.setLineRippleTransformOrigin(normalizedX);
      }

      /**
       * Activates the Text Field's focus state in cases when the input value
       * changes without user input (e.g. programatically).
       */

    }, {
      key: 'autoCompleteFocus',
      value: function autoCompleteFocus() {
        if (!this.receivedUserInput_) {
          this.activateFocus();
        }
      }

      /**
       * Deactivates the Text Field's focus state.
       */

    }, {
      key: 'deactivateFocus',
      value: function deactivateFocus() {
        this.isFocused_ = false;
        this.adapter_.deactivateLineRipple();
        var input = this.getNativeInput_();
        var shouldRemoveLabelFloat = !input.value && !this.isBadInput_();
        var isValid = this.isValid();
        this.styleValidity_(isValid);
        this.styleFocused_(this.isFocused_);
        if (this.adapter_.hasLabel()) {
          this.adapter_.shakeLabel(this.shouldShake);
          this.adapter_.floatLabel(this.shouldFloat);
          this.notchOutline(this.shouldFloat);
        }
        if (shouldRemoveLabelFloat) {
          this.receivedUserInput_ = false;
        }
      }

      /**
       * @return {string} The value of the input Element.
       */

    }, {
      key: 'getValue',
      value: function getValue() {
        return this.getNativeInput_().value;
      }

      /**
       * @param {string} value The value to set on the input Element.
       */

    }, {
      key: 'setValue',
      value: function setValue(value) {
        this.getNativeInput_().value = value;
        var isValid = this.isValid();
        this.styleValidity_(isValid);
        if (this.adapter_.hasLabel()) {
          this.adapter_.shakeLabel(this.shouldShake);
          this.adapter_.floatLabel(this.shouldFloat);
          this.notchOutline(this.shouldFloat);
        }
      }

      /**
       * @return {boolean} If a custom validity is set, returns that value.
       *     Otherwise, returns the result of native validity checks.
       */

    }, {
      key: 'isValid',
      value: function isValid() {
        return this.useCustomValidityChecking_ ? this.isValid_ : this.isNativeInputValid_();
      }

      /**
       * @param {boolean} isValid Sets the validity state of the Text Field.
       */

    }, {
      key: 'setValid',
      value: function setValid(isValid) {
        this.useCustomValidityChecking_ = true;
        this.isValid_ = isValid;
        // Retrieve from the getter to ensure correct logic is applied.
        isValid = this.isValid();
        this.styleValidity_(isValid);
        if (this.adapter_.hasLabel()) {
          this.adapter_.shakeLabel(this.shouldShake);
        }
      }

      /**
       * @return {boolean} True if the Text Field is disabled.
       */

    }, {
      key: 'isDisabled',
      value: function isDisabled() {
        return this.getNativeInput_().disabled;
      }

      /**
       * @param {boolean} disabled Sets the text-field disabled or enabled.
       */

    }, {
      key: 'setDisabled',
      value: function setDisabled(disabled) {
        this.getNativeInput_().disabled = disabled;
        this.styleDisabled_(disabled);
      }

      /**
       * @param {string} content Sets the content of the helper text.
       */

    }, {
      key: 'setHelperTextContent',
      value: function setHelperTextContent(content) {
        if (this.helperText_) {
          this.helperText_.setContent(content);
        }
      }

      /**
       * @return {boolean} True if the Text Field input fails in converting the
       *     user-supplied value.
       * @private
       */

    }, {
      key: 'isBadInput_',
      value: function isBadInput_() {
        return this.getNativeInput_().validity.badInput;
      }

      /**
       * @return {boolean} The result of native validity checking
       *     (ValidityState.valid).
       */

    }, {
      key: 'isNativeInputValid_',
      value: function isNativeInputValid_() {
        return this.getNativeInput_().validity.valid;
      }

      /**
       * Styles the component based on the validity state.
       * @param {boolean} isValid
       * @private
       */

    }, {
      key: 'styleValidity_',
      value: function styleValidity_(isValid) {
        var INVALID = MDCTextFieldFoundation.cssClasses.INVALID;

        if (isValid) {
          this.adapter_.removeClass(INVALID);
        } else {
          this.adapter_.addClass(INVALID);
        }
        if (this.helperText_) {
          this.helperText_.setValidity(isValid);
        }
      }

      /**
       * Styles the component based on the focused state.
       * @param {boolean} isFocused
       * @private
       */

    }, {
      key: 'styleFocused_',
      value: function styleFocused_(isFocused) {
        var FOCUSED = MDCTextFieldFoundation.cssClasses.FOCUSED;

        if (isFocused) {
          this.adapter_.addClass(FOCUSED);
        } else {
          this.adapter_.removeClass(FOCUSED);
        }
      }

      /**
       * Styles the component based on the disabled state.
       * @param {boolean} isDisabled
       * @private
       */

    }, {
      key: 'styleDisabled_',
      value: function styleDisabled_(isDisabled) {
        var _MDCTextFieldFoundati = MDCTextFieldFoundation.cssClasses,
            DISABLED = _MDCTextFieldFoundati.DISABLED,
            INVALID = _MDCTextFieldFoundati.INVALID;

        if (isDisabled) {
          this.adapter_.addClass(DISABLED);
          this.adapter_.removeClass(INVALID);
        } else {
          this.adapter_.removeClass(DISABLED);
        }
        if (this.icon_) {
          this.icon_.setDisabled(isDisabled);
        }
      }

      /**
       * @return {!Element|!NativeInputType} The native text input from the
       * host environment, or a dummy if none exists.
       * @private
       */

    }, {
      key: 'getNativeInput_',
      value: function getNativeInput_() {
        return this.adapter_.getNativeInput() ||
        /** @type {!NativeInputType} */{
          value: '',
          disabled: false,
          validity: {
            badInput: false,
            valid: true
          }
        };
      }
    }]);
    return MDCTextFieldFoundation;
  }(MDCFoundation);

  /**
   * @license
   * Copyright 2018 Google Inc. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /* eslint no-unused-vars: [2, {"args": "none"}] */

  /**
   * Adapter for MDC TextField Line Ripple.
   *
   * Defines the shape of the adapter expected by the foundation. Implement this
   * adapter to integrate the line ripple into your framework. See
   * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
   * for more information.
   *
   * @record
   */
  var MDCLineRippleAdapter = function () {
    function MDCLineRippleAdapter() {
      classCallCheck(this, MDCLineRippleAdapter);
    }

    createClass(MDCLineRippleAdapter, [{
      key: "addClass",

      /**
       * Adds a class to the line ripple element.
       * @param {string} className
       */
      value: function addClass(className) {}

      /**
       * Removes a class from the line ripple element.
       * @param {string} className
       */

    }, {
      key: "removeClass",
      value: function removeClass(className) {}

      /**
       * @param {string} className
       * @return {boolean}
       */

    }, {
      key: "hasClass",
      value: function hasClass(className) {}

      /**
       * Sets the style property with propertyName to value on the root element.
       * @param {string} propertyName
       * @param {string} value
       */

    }, {
      key: "setStyle",
      value: function setStyle(propertyName, value) {}

      /**
       * Registers an event listener on the line ripple element for a given event.
       * @param {string} evtType
       * @param {function(!Event): undefined} handler
       */

    }, {
      key: "registerEventHandler",
      value: function registerEventHandler(evtType, handler) {}

      /**
       * Deregisters an event listener on the line ripple element for a given event.
       * @param {string} evtType
       * @param {function(!Event): undefined} handler
       */

    }, {
      key: "deregisterEventHandler",
      value: function deregisterEventHandler(evtType, handler) {}
    }]);
    return MDCLineRippleAdapter;
  }();

  /**
   * @license
   * Copyright 2018 Google Inc. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /** @enum {string} */
  var cssClasses$8 = {
    LINE_RIPPLE_ACTIVE: 'mdc-line-ripple--active',
    LINE_RIPPLE_DEACTIVATING: 'mdc-line-ripple--deactivating'
  };

  /**
   * @license
   * Copyright 2018 Google Inc. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
   * @extends {MDCFoundation<!MDCLineRippleAdapter>}
   * @final
   */

  var MDCLineRippleFoundation = function (_MDCFoundation) {
    inherits(MDCLineRippleFoundation, _MDCFoundation);
    createClass(MDCLineRippleFoundation, null, [{
      key: 'cssClasses',

      /** @return enum {string} */
      get: function get$$1() {
        return cssClasses$8;
      }

      /**
       * {@see MDCLineRippleAdapter} for typing information on parameters and return
       * types.
       * @return {!MDCLineRippleAdapter}
       */

    }, {
      key: 'defaultAdapter',
      get: function get$$1() {
        return (/** @type {!MDCLineRippleAdapter} */{
            addClass: function addClass() {},
            removeClass: function removeClass() {},
            hasClass: function hasClass() {},
            setStyle: function setStyle() {},
            registerEventHandler: function registerEventHandler() {},
            deregisterEventHandler: function deregisterEventHandler() {}
          }
        );
      }

      /**
       * @param {!MDCLineRippleAdapter=} adapter
       */

    }]);

    function MDCLineRippleFoundation() {
      var adapter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : /** @type {!MDCLineRippleAdapter} */{};
      classCallCheck(this, MDCLineRippleFoundation);

      /** @private {function(!Event): undefined} */
      var _this = possibleConstructorReturn(this, (MDCLineRippleFoundation.__proto__ || Object.getPrototypeOf(MDCLineRippleFoundation)).call(this, _extends(MDCLineRippleFoundation.defaultAdapter, adapter)));

      _this.transitionEndHandler_ = function (evt) {
        return _this.handleTransitionEnd(evt);
      };
      return _this;
    }

    createClass(MDCLineRippleFoundation, [{
      key: 'init',
      value: function init() {
        this.adapter_.registerEventHandler('transitionend', this.transitionEndHandler_);
      }
    }, {
      key: 'destroy',
      value: function destroy() {
        this.adapter_.deregisterEventHandler('transitionend', this.transitionEndHandler_);
      }

      /**
       * Activates the line ripple
       */

    }, {
      key: 'activate',
      value: function activate() {
        this.adapter_.removeClass(cssClasses$8.LINE_RIPPLE_DEACTIVATING);
        this.adapter_.addClass(cssClasses$8.LINE_RIPPLE_ACTIVE);
      }

      /**
       * Sets the center of the ripple animation to the given X coordinate.
       * @param {number} xCoordinate
       */

    }, {
      key: 'setRippleCenter',
      value: function setRippleCenter(xCoordinate) {
        this.adapter_.setStyle('transform-origin', xCoordinate + 'px center');
      }

      /**
       * Deactivates the line ripple
       */

    }, {
      key: 'deactivate',
      value: function deactivate() {
        this.adapter_.addClass(cssClasses$8.LINE_RIPPLE_DEACTIVATING);
      }

      /**
       * Handles a transition end event
       * @param {!Event} evt
       */

    }, {
      key: 'handleTransitionEnd',
      value: function handleTransitionEnd(evt) {
        // Wait for the line ripple to be either transparent or opaque
        // before emitting the animation end event
        var isDeactivating = this.adapter_.hasClass(cssClasses$8.LINE_RIPPLE_DEACTIVATING);

        if (evt.propertyName === 'opacity') {
          if (isDeactivating) {
            this.adapter_.removeClass(cssClasses$8.LINE_RIPPLE_ACTIVE);
            this.adapter_.removeClass(cssClasses$8.LINE_RIPPLE_DEACTIVATING);
          }
        }
      }
    }]);
    return MDCLineRippleFoundation;
  }(MDCFoundation);

  /**
   * @license
   * Copyright 2018 Google Inc. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
   * @extends {MDCComponent<!MDCLineRippleFoundation>}
   * @final
   */

  var MDCLineRipple = function (_MDCComponent) {
    inherits(MDCLineRipple, _MDCComponent);

    function MDCLineRipple() {
      classCallCheck(this, MDCLineRipple);
      return possibleConstructorReturn(this, (MDCLineRipple.__proto__ || Object.getPrototypeOf(MDCLineRipple)).apply(this, arguments));
    }

    createClass(MDCLineRipple, [{
      key: 'activate',


      /**
       * Activates the line ripple
       */
      value: function activate() {
        this.foundation_.activate();
      }

      /**
       * Deactivates the line ripple
       */

    }, {
      key: 'deactivate',
      value: function deactivate() {
        this.foundation_.deactivate();
      }

      /**
       * Sets the transform origin given a user's click location. The `rippleCenter` is the
       * x-coordinate of the middle of the ripple.
       * @param {number} xCoordinate
       */

    }, {
      key: 'setRippleCenter',
      value: function setRippleCenter(xCoordinate) {
        this.foundation_.setRippleCenter(xCoordinate);
      }

      /**
       * @return {!MDCLineRippleFoundation}
       */

    }, {
      key: 'getDefaultFoundation',
      value: function getDefaultFoundation() {
        var _this2 = this;

        return new MDCLineRippleFoundation( /** @type {!MDCLineRippleAdapter} */_extends({
          addClass: function addClass(className) {
            return _this2.root_.classList.add(className);
          },
          removeClass: function removeClass(className) {
            return _this2.root_.classList.remove(className);
          },
          hasClass: function hasClass(className) {
            return _this2.root_.classList.contains(className);
          },
          setStyle: function setStyle(propertyName, value) {
            return _this2.root_.style[propertyName] = value;
          },
          registerEventHandler: function registerEventHandler(evtType, handler) {
            return _this2.root_.addEventListener(evtType, handler);
          },
          deregisterEventHandler: function deregisterEventHandler(evtType, handler) {
            return _this2.root_.removeEventListener(evtType, handler);
          }
        }));
      }
    }], [{
      key: 'attachTo',

      /**
       * @param {!Element} root
       * @return {!MDCLineRipple}
       */
      value: function attachTo(root) {
        return new MDCLineRipple(root);
      }
    }]);
    return MDCLineRipple;
  }(MDCComponent);

  /**
   * @license
   * Copyright 2017 Google Inc. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
   * @extends {MDCComponent<!MDCTextFieldHelperTextFoundation>}
   * @final
   */

  var MDCTextFieldHelperText = function (_MDCComponent) {
    inherits(MDCTextFieldHelperText, _MDCComponent);

    function MDCTextFieldHelperText() {
      classCallCheck(this, MDCTextFieldHelperText);
      return possibleConstructorReturn(this, (MDCTextFieldHelperText.__proto__ || Object.getPrototypeOf(MDCTextFieldHelperText)).apply(this, arguments));
    }

    createClass(MDCTextFieldHelperText, [{
      key: 'getDefaultFoundation',


      /**
       * @return {!MDCTextFieldHelperTextFoundation}
       */
      value: function getDefaultFoundation() {
        var _this2 = this;

        return new MDCTextFieldHelperTextFoundation( /** @type {!MDCTextFieldHelperTextAdapter} */_extends({
          addClass: function addClass(className) {
            return _this2.root_.classList.add(className);
          },
          removeClass: function removeClass(className) {
            return _this2.root_.classList.remove(className);
          },
          hasClass: function hasClass(className) {
            return _this2.root_.classList.contains(className);
          },
          setAttr: function setAttr(attr, value) {
            return _this2.root_.setAttribute(attr, value);
          },
          removeAttr: function removeAttr(attr) {
            return _this2.root_.removeAttribute(attr);
          },
          setContent: function setContent(content) {
            _this2.root_.textContent = content;
          }
        }));
      }
    }, {
      key: 'foundation',


      /**
       * @return {!MDCTextFieldHelperTextFoundation}
       */
      get: function get$$1() {
        return this.foundation_;
      }
    }], [{
      key: 'attachTo',

      /**
       * @param {!Element} root
       * @return {!MDCTextFieldHelperText}
       */
      value: function attachTo(root) {
        return new MDCTextFieldHelperText(root);
      }
    }]);
    return MDCTextFieldHelperText;
  }(MDCComponent);

  /**
   * @license
   * Copyright 2017 Google Inc. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
   * @extends {MDCComponent<!MDCTextFieldIconFoundation>}
   * @final
   */

  var MDCTextFieldIcon = function (_MDCComponent) {
    inherits(MDCTextFieldIcon, _MDCComponent);

    function MDCTextFieldIcon() {
      classCallCheck(this, MDCTextFieldIcon);
      return possibleConstructorReturn(this, (MDCTextFieldIcon.__proto__ || Object.getPrototypeOf(MDCTextFieldIcon)).apply(this, arguments));
    }

    createClass(MDCTextFieldIcon, [{
      key: 'getDefaultFoundation',


      /**
       * @return {!MDCTextFieldIconFoundation}
       */
      value: function getDefaultFoundation() {
        var _this2 = this;

        return new MDCTextFieldIconFoundation( /** @type {!MDCTextFieldIconAdapter} */_extends({
          getAttr: function getAttr(attr) {
            return _this2.root_.getAttribute(attr);
          },
          setAttr: function setAttr(attr, value) {
            return _this2.root_.setAttribute(attr, value);
          },
          removeAttr: function removeAttr(attr) {
            return _this2.root_.removeAttribute(attr);
          },
          registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
            return _this2.root_.addEventListener(evtType, handler);
          },
          deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
            return _this2.root_.removeEventListener(evtType, handler);
          },
          notifyIconAction: function notifyIconAction() {
            return _this2.emit(MDCTextFieldIconFoundation.strings.ICON_EVENT, {} /* evtData */, true /* shouldBubble */);
          }
        }));
      }
    }, {
      key: 'foundation',


      /**
       * @return {!MDCTextFieldIconFoundation}
       */
      get: function get$$1() {
        return this.foundation_;
      }
    }], [{
      key: 'attachTo',

      /**
       * @param {!Element} root
       * @return {!MDCTextFieldIcon}
       */
      value: function attachTo(root) {
        return new MDCTextFieldIcon(root);
      }
    }]);
    return MDCTextFieldIcon;
  }(MDCComponent);

  /**
   * @license
   * Copyright 2017 Google Inc. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /* eslint no-unused-vars: [2, {"args": "none"}] */

  /**
   * Adapter for MDC Floating Label.
   *
   * Defines the shape of the adapter expected by the foundation. Implement this
   * adapter to integrate the floating label into your framework. See
   * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
   * for more information.
   *
   * @record
   */
  var MDCFloatingLabelAdapter = function () {
    function MDCFloatingLabelAdapter() {
      classCallCheck(this, MDCFloatingLabelAdapter);
    }

    createClass(MDCFloatingLabelAdapter, [{
      key: "addClass",

      /**
       * Adds a class to the label element.
       * @param {string} className
       */
      value: function addClass(className) {}

      /**
       * Removes a class from the label element.
       * @param {string} className
       */

    }, {
      key: "removeClass",
      value: function removeClass(className) {}

      /**
       * Returns the width of the label element.
       * @return {number}
       */

    }, {
      key: "getWidth",
      value: function getWidth() {}

      /**
       * Registers an event listener on the root element for a given event.
       * @param {string} evtType
       * @param {function(!Event): undefined} handler
       */

    }, {
      key: "registerInteractionHandler",
      value: function registerInteractionHandler(evtType, handler) {}

      /**
       * Deregisters an event listener on the root element for a given event.
       * @param {string} evtType
       * @param {function(!Event): undefined} handler
       */

    }, {
      key: "deregisterInteractionHandler",
      value: function deregisterInteractionHandler(evtType, handler) {}
    }]);
    return MDCFloatingLabelAdapter;
  }();

  /**
   * @license
   * Copyright 2016 Google Inc. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /** @enum {string} */
  var cssClasses$9 = {
    LABEL_FLOAT_ABOVE: 'mdc-floating-label--float-above',
    LABEL_SHAKE: 'mdc-floating-label--shake'
  };

  /**
   * @license
   * Copyright 2016 Google Inc. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
   * @extends {MDCFoundation<!MDCFloatingLabelAdapter>}
   * @final
   */

  var MDCFloatingLabelFoundation = function (_MDCFoundation) {
    inherits(MDCFloatingLabelFoundation, _MDCFoundation);
    createClass(MDCFloatingLabelFoundation, null, [{
      key: 'cssClasses',

      /** @return enum {string} */
      get: function get$$1() {
        return cssClasses$9;
      }

      /**
       * {@see MDCFloatingLabelAdapter} for typing information on parameters and return
       * types.
       * @return {!MDCFloatingLabelAdapter}
       */

    }, {
      key: 'defaultAdapter',
      get: function get$$1() {
        return (/** @type {!MDCFloatingLabelAdapter} */{
            addClass: function addClass() {},
            removeClass: function removeClass() {},
            getWidth: function getWidth() {},
            registerInteractionHandler: function registerInteractionHandler() {},
            deregisterInteractionHandler: function deregisterInteractionHandler() {}
          }
        );
      }

      /**
       * @param {!MDCFloatingLabelAdapter} adapter
       */

    }]);

    function MDCFloatingLabelFoundation(adapter) {
      classCallCheck(this, MDCFloatingLabelFoundation);

      /** @private {function(!Event): undefined} */
      var _this = possibleConstructorReturn(this, (MDCFloatingLabelFoundation.__proto__ || Object.getPrototypeOf(MDCFloatingLabelFoundation)).call(this, _extends(MDCFloatingLabelFoundation.defaultAdapter, adapter)));

      _this.shakeAnimationEndHandler_ = function () {
        return _this.handleShakeAnimationEnd_();
      };
      return _this;
    }

    createClass(MDCFloatingLabelFoundation, [{
      key: 'init',
      value: function init() {
        this.adapter_.registerInteractionHandler('animationend', this.shakeAnimationEndHandler_);
      }
    }, {
      key: 'destroy',
      value: function destroy() {
        this.adapter_.deregisterInteractionHandler('animationend', this.shakeAnimationEndHandler_);
      }

      /**
       * Returns the width of the label element.
       * @return {number}
       */

    }, {
      key: 'getWidth',
      value: function getWidth() {
        return this.adapter_.getWidth();
      }

      /**
       * Styles the label to produce the label shake for errors.
       * @param {boolean} shouldShake adds shake class if true,
       * otherwise removes shake class.
       */

    }, {
      key: 'shake',
      value: function shake(shouldShake) {
        var LABEL_SHAKE = MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;

        if (shouldShake) {
          this.adapter_.addClass(LABEL_SHAKE);
        } else {
          this.adapter_.removeClass(LABEL_SHAKE);
        }
      }

      /**
       * Styles the label to float or dock.
       * @param {boolean} shouldFloat adds float class if true, otherwise remove
       * float and shake class to dock label.
       */

    }, {
      key: 'float',
      value: function float(shouldFloat) {
        var _MDCFloatingLabelFoun = MDCFloatingLabelFoundation.cssClasses,
            LABEL_FLOAT_ABOVE = _MDCFloatingLabelFoun.LABEL_FLOAT_ABOVE,
            LABEL_SHAKE = _MDCFloatingLabelFoun.LABEL_SHAKE;

        if (shouldFloat) {
          this.adapter_.addClass(LABEL_FLOAT_ABOVE);
        } else {
          this.adapter_.removeClass(LABEL_FLOAT_ABOVE);
          this.adapter_.removeClass(LABEL_SHAKE);
        }
      }

      /**
       * Handles an interaction event on the root element.
       */

    }, {
      key: 'handleShakeAnimationEnd_',
      value: function handleShakeAnimationEnd_() {
        var LABEL_SHAKE = MDCFloatingLabelFoundation.cssClasses.LABEL_SHAKE;

        this.adapter_.removeClass(LABEL_SHAKE);
      }
    }]);
    return MDCFloatingLabelFoundation;
  }(MDCFoundation);

  /**
   * @license
   * Copyright 2016 Google Inc. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
   * @extends {MDCComponent<!MDCFloatingLabelFoundation>}
   * @final
   */

  var MDCFloatingLabel = function (_MDCComponent) {
    inherits(MDCFloatingLabel, _MDCComponent);

    function MDCFloatingLabel() {
      classCallCheck(this, MDCFloatingLabel);
      return possibleConstructorReturn(this, (MDCFloatingLabel.__proto__ || Object.getPrototypeOf(MDCFloatingLabel)).apply(this, arguments));
    }

    createClass(MDCFloatingLabel, [{
      key: 'shake',


      /**
       * Styles the label to produce the label shake for errors.
       * @param {boolean} shouldShake styles the label to shake by adding shake class
       * if true, otherwise will stop shaking by removing shake class.
       */
      value: function shake(shouldShake) {
        this.foundation_.shake(shouldShake);
      }

      /**
       * Styles label to float/dock.
       * @param {boolean} shouldFloat styles the label to float by adding float class
       * if true, otherwise docks the label by removing the float class.
       */

    }, {
      key: 'float',
      value: function float(shouldFloat) {
        this.foundation_.float(shouldFloat);
      }

      /**
       * @return {number}
       */

    }, {
      key: 'getWidth',
      value: function getWidth() {
        return this.foundation_.getWidth();
      }

      /**
       * @return {!MDCFloatingLabelFoundation}
       */

    }, {
      key: 'getDefaultFoundation',
      value: function getDefaultFoundation() {
        var _this2 = this;

        return new MDCFloatingLabelFoundation({
          addClass: function addClass(className) {
            return _this2.root_.classList.add(className);
          },
          removeClass: function removeClass(className) {
            return _this2.root_.classList.remove(className);
          },
          getWidth: function getWidth() {
            return _this2.root_.offsetWidth;
          },
          registerInteractionHandler: function registerInteractionHandler(evtType, handler) {
            return _this2.root_.addEventListener(evtType, handler);
          },
          deregisterInteractionHandler: function deregisterInteractionHandler(evtType, handler) {
            return _this2.root_.removeEventListener(evtType, handler);
          }
        });
      }
    }], [{
      key: 'attachTo',

      /**
       * @param {!Element} root
       * @return {!MDCFloatingLabel}
       */
      value: function attachTo(root) {
        return new MDCFloatingLabel(root);
      }
    }]);
    return MDCFloatingLabel;
  }(MDCComponent);

  /**
   * @license
   * Copyright 2017 Google Inc. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /* eslint no-unused-vars: [2, {"args": "none"}] */

  /**
   * Adapter for MDC Notched Outline.
   *
   * Defines the shape of the adapter expected by the foundation. Implement this
   * adapter to integrate the Notched Outline into your framework. See
   * https://github.com/material-components/material-components-web/blob/master/docs/authoring-components.md
   * for more information.
   *
   * @record
   */
  var MDCNotchedOutlineAdapter = function () {
    function MDCNotchedOutlineAdapter() {
      classCallCheck(this, MDCNotchedOutlineAdapter);
    }

    createClass(MDCNotchedOutlineAdapter, [{
      key: "getWidth",

      /**
       * Returns the width of the root element.
       * @return {number}
       */
      value: function getWidth() {}

      /**
       * Returns the height of the root element.
       * @return {number}
       */

    }, {
      key: "getHeight",
      value: function getHeight() {}

      /**
       * Adds a class to the root element.
       * @param {string} className
       */

    }, {
      key: "addClass",
      value: function addClass(className) {}

      /**
       * Removes a class from the root element.
       * @param {string} className
       */

    }, {
      key: "removeClass",
      value: function removeClass(className) {}

      /**
       * Sets the "d" attribute of the outline element's SVG path.
       * @param {string} value
       */

    }, {
      key: "setOutlinePathAttr",
      value: function setOutlinePathAttr(value) {}

      /**
       * Returns the idle outline element's computed style value of the given css property `propertyName`.
       * We achieve this via `getComputedStyle(...).getPropertyValue(propertyName)`.
       * @param {string} propertyName
       * @return {string}
       */

    }, {
      key: "getIdleOutlineStyleValue",
      value: function getIdleOutlineStyleValue(propertyName) {}
    }]);
    return MDCNotchedOutlineAdapter;
  }();

  /**
   * @license
   * Copyright 2018 Google Inc. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /** @enum {string} */
  var strings$9 = {
    PATH_SELECTOR: '.mdc-notched-outline__path',
    IDLE_OUTLINE_SELECTOR: '.mdc-notched-outline__idle'
  };

  /** @enum {string} */
  var cssClasses$a = {
    OUTLINE_NOTCHED: 'mdc-notched-outline--notched'
  };

  /**
   * @license
   * Copyright 2017 Google Inc. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
   * @extends {MDCFoundation<!MDCNotchedOutlineAdapter>}
   * @final
   */

  var MDCNotchedOutlineFoundation = function (_MDCFoundation) {
    inherits(MDCNotchedOutlineFoundation, _MDCFoundation);
    createClass(MDCNotchedOutlineFoundation, null, [{
      key: 'strings',

      /** @return enum {string} */
      get: function get$$1() {
        return strings$9;
      }

      /** @return enum {string} */

    }, {
      key: 'cssClasses',
      get: function get$$1() {
        return cssClasses$a;
      }

      /**
       * {@see MDCNotchedOutlineAdapter} for typing information on parameters and return
       * types.
       * @return {!MDCNotchedOutlineAdapter}
       */

    }, {
      key: 'defaultAdapter',
      get: function get$$1() {
        return (/** @type {!MDCNotchedOutlineAdapter} */{
            getWidth: function getWidth() {},
            getHeight: function getHeight() {},
            addClass: function addClass() {},
            removeClass: function removeClass() {},
            setOutlinePathAttr: function setOutlinePathAttr() {},
            getIdleOutlineStyleValue: function getIdleOutlineStyleValue() {}
          }
        );
      }

      /**
       * @param {!MDCNotchedOutlineAdapter} adapter
       */

    }]);

    function MDCNotchedOutlineFoundation(adapter) {
      classCallCheck(this, MDCNotchedOutlineFoundation);
      return possibleConstructorReturn(this, (MDCNotchedOutlineFoundation.__proto__ || Object.getPrototypeOf(MDCNotchedOutlineFoundation)).call(this, _extends(MDCNotchedOutlineFoundation.defaultAdapter, adapter)));
    }

    /**
     * Adds the outline notched selector and updates the notch width
     * calculated based off of notchWidth and isRtl.
     * @param {number} notchWidth
     * @param {boolean=} isRtl
     */


    createClass(MDCNotchedOutlineFoundation, [{
      key: 'notch',
      value: function notch(notchWidth) {
        var isRtl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED;

        this.adapter_.addClass(OUTLINE_NOTCHED);
        this.updateSvgPath_(notchWidth, isRtl);
      }

      /**
       * Removes notched outline selector to close the notch in the outline.
       */

    }, {
      key: 'closeNotch',
      value: function closeNotch() {
        var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation.cssClasses.OUTLINE_NOTCHED;

        this.adapter_.removeClass(OUTLINE_NOTCHED);
      }

      /**
       * Updates the SVG path of the focus outline element based on the notchWidth
       * and the RTL context.
       * @param {number} notchWidth
       * @param {boolean=} isRtl
       * @private
       */

    }, {
      key: 'updateSvgPath_',
      value: function updateSvgPath_(notchWidth, isRtl) {
        // Fall back to reading a specific corner's style because Firefox doesn't report the style on border-radius.
        var radiusStyleValue = this.adapter_.getIdleOutlineStyleValue('border-radius') || this.adapter_.getIdleOutlineStyleValue('border-top-left-radius');
        var radius = parseFloat(radiusStyleValue);
        var width = this.adapter_.getWidth();
        var height = this.adapter_.getHeight();
        var cornerWidth = radius + 1.2;
        var leadingStrokeLength = Math.abs(11 - cornerWidth);
        var paddedNotchWidth = notchWidth + 8;

        // The right, bottom, and left sides of the outline follow the same SVG path.
        var pathMiddle = 'a' + radius + ',' + radius + ' 0 0 1 ' + radius + ',' + radius + 'v' + (height - 2 * cornerWidth) + 'a' + radius + ',' + radius + ' 0 0 1 ' + -radius + ',' + radius + 'h' + (-width + 2 * cornerWidth) + 'a' + radius + ',' + radius + ' 0 0 1 ' + -radius + ',' + -radius + 'v' + (-height + 2 * cornerWidth) + 'a' + radius + ',' + radius + ' 0 0 1 ' + radius + ',' + -radius;

        var path = void 0;
        if (!isRtl) {
          path = 'M' + (cornerWidth + leadingStrokeLength + paddedNotchWidth) + ',' + 1 + 'h' + (width - 2 * cornerWidth - paddedNotchWidth - leadingStrokeLength) + pathMiddle + 'h' + leadingStrokeLength;
        } else {
          path = 'M' + (width - cornerWidth - leadingStrokeLength) + ',' + 1 + 'h' + leadingStrokeLength + pathMiddle + 'h' + (width - 2 * cornerWidth - paddedNotchWidth - leadingStrokeLength);
        }

        this.adapter_.setOutlinePathAttr(path);
      }
    }]);
    return MDCNotchedOutlineFoundation;
  }(MDCFoundation);

  /**
   * @license
   * Copyright 2017 Google Inc. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
   * @extends {MDCComponent<!MDCNotchedOutlineFoundation>}
   * @final
   */

  var MDCNotchedOutline = function (_MDCComponent) {
    inherits(MDCNotchedOutline, _MDCComponent);

    function MDCNotchedOutline() {
      classCallCheck(this, MDCNotchedOutline);
      return possibleConstructorReturn(this, (MDCNotchedOutline.__proto__ || Object.getPrototypeOf(MDCNotchedOutline)).apply(this, arguments));
    }

    createClass(MDCNotchedOutline, [{
      key: 'notch',


      /**
        * Updates outline selectors and SVG path to open notch.
        * @param {number} notchWidth The notch width in the outline.
        * @param {boolean=} isRtl Determines if outline is rtl. If rtl is true, notch
        * will be right justified in outline path, otherwise left justified.
        */
      value: function notch(notchWidth, isRtl) {
        this.foundation_.notch(notchWidth, isRtl);
      }

      /**
       * Updates the outline selectors to close notch and return it to idle state.
       */

    }, {
      key: 'closeNotch',
      value: function closeNotch() {
        this.foundation_.closeNotch();
      }

      /**
       * @return {!MDCNotchedOutlineFoundation}
       */

    }, {
      key: 'getDefaultFoundation',
      value: function getDefaultFoundation() {
        var _this2 = this;

        return new MDCNotchedOutlineFoundation({
          getWidth: function getWidth() {
            return _this2.root_.offsetWidth;
          },
          getHeight: function getHeight() {
            return _this2.root_.offsetHeight;
          },
          addClass: function addClass(className) {
            return _this2.root_.classList.add(className);
          },
          removeClass: function removeClass(className) {
            return _this2.root_.classList.remove(className);
          },
          setOutlinePathAttr: function setOutlinePathAttr(value) {
            var path = _this2.root_.querySelector(strings$9.PATH_SELECTOR);
            path.setAttribute('d', value);
          },
          getIdleOutlineStyleValue: function getIdleOutlineStyleValue(propertyName) {
            var idleOutlineElement = _this2.root_.parentNode.querySelector(strings$9.IDLE_OUTLINE_SELECTOR);
            return window.getComputedStyle(idleOutlineElement).getPropertyValue(propertyName);
          }
        });
      }
    }], [{
      key: 'attachTo',

      /**
       * @param {!Element} root
       * @return {!MDCNotchedOutline}
       */
      value: function attachTo(root) {
        return new MDCNotchedOutline(root);
      }
    }]);
    return MDCNotchedOutline;
  }(MDCComponent);

  /**
   * @license
   * Copyright 2016 Google Inc. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  /* eslint-enable no-unused-vars */

  /**
   * @extends {MDCComponent<!MDCTextFieldFoundation>}
   * @final
   */

  var MDCTextField = function (_MDCComponent) {
    inherits(MDCTextField, _MDCComponent);

    /**
     * @param {...?} args
     */
    function MDCTextField() {
      var _ref;

      classCallCheck(this, MDCTextField);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      /** @private {?Element} */
      var _this = possibleConstructorReturn(this, (_ref = MDCTextField.__proto__ || Object.getPrototypeOf(MDCTextField)).call.apply(_ref, [this].concat(args)));

      _this.input_;
      /** @type {?MDCRipple} */
      _this.ripple;
      /** @private {?MDCLineRipple} */
      _this.lineRipple_;
      /** @private {?MDCTextFieldHelperText} */
      _this.helperText_;
      /** @private {?MDCTextFieldIcon} */
      _this.icon_;
      /** @private {?MDCFloatingLabel} */
      _this.label_;
      /** @private {?MDCNotchedOutline} */
      _this.outline_;
      return _this;
    }

    /**
     * @param {!Element} root
     * @return {!MDCTextField}
     */


    createClass(MDCTextField, [{
      key: 'initialize',


      /**
       * @param {(function(!Element): !MDCRipple)=} rippleFactory A function which
       * creates a new MDCRipple.
       * @param {(function(!Element): !MDCLineRipple)=} lineRippleFactory A function which
       * creates a new MDCLineRipple.
       * @param {(function(!Element): !MDCTextFieldHelperText)=} helperTextFactory A function which
       * creates a new MDCTextFieldHelperText.
       * @param {(function(!Element): !MDCTextFieldIcon)=} iconFactory A function which
       * creates a new MDCTextFieldIcon.
       * @param {(function(!Element): !MDCFloatingLabel)=} labelFactory A function which
       * creates a new MDCFloatingLabel.
       * @param {(function(!Element): !MDCNotchedOutline)=} outlineFactory A function which
       * creates a new MDCNotchedOutline.
       */
      value: function initialize() {
        var rippleFactory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (el, foundation) {
          return new MDCRipple(el, foundation);
        };
        var lineRippleFactory = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (el) {
          return new MDCLineRipple(el);
        };
        var helperTextFactory = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function (el) {
          return new MDCTextFieldHelperText(el);
        };
        var iconFactory = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function (el) {
          return new MDCTextFieldIcon(el);
        };

        var _this2 = this;

        var labelFactory = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : function (el) {
          return new MDCFloatingLabel(el);
        };
        var outlineFactory = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : function (el) {
          return new MDCNotchedOutline(el);
        };

        this.input_ = this.root_.querySelector(strings$6.INPUT_SELECTOR);
        var labelElement = this.root_.querySelector(strings$6.LABEL_SELECTOR);
        if (labelElement) {
          this.label_ = labelFactory(labelElement);
        }
        var lineRippleElement = this.root_.querySelector(strings$6.LINE_RIPPLE_SELECTOR);
        if (lineRippleElement) {
          this.lineRipple_ = lineRippleFactory(lineRippleElement);
        }
        var outlineElement = this.root_.querySelector(strings$6.OUTLINE_SELECTOR);
        if (outlineElement) {
          this.outline_ = outlineFactory(outlineElement);
        }
        if (this.input_.hasAttribute(strings$6.ARIA_CONTROLS)) {
          var helperTextElement = document.getElementById(this.input_.getAttribute(strings$6.ARIA_CONTROLS));
          if (helperTextElement) {
            this.helperText_ = helperTextFactory(helperTextElement);
          }
        }
        var iconElement = this.root_.querySelector(strings$6.ICON_SELECTOR);
        if (iconElement) {
          this.icon_ = iconFactory(iconElement);
        }

        this.ripple = null;
        if (this.root_.classList.contains(cssClasses$6.BOX)) {
          var MATCHES = getMatchesProperty(HTMLElement.prototype);
          var adapter = _extends(MDCRipple.createAdapter( /** @type {!RippleCapableSurface} */this), {
            isSurfaceActive: function isSurfaceActive() {
              return _this2.input_[MATCHES](':active');
            },
            registerInteractionHandler: function registerInteractionHandler(type, handler) {
              return _this2.input_.addEventListener(type, handler);
            },
            deregisterInteractionHandler: function deregisterInteractionHandler(type, handler) {
              return _this2.input_.removeEventListener(type, handler);
            }
          });
          var foundation = new MDCRippleFoundation(adapter);
          this.ripple = rippleFactory(this.root_, foundation);
        }
      }
    }, {
      key: 'destroy',
      value: function destroy() {
        if (this.ripple) {
          this.ripple.destroy();
        }
        if (this.lineRipple_) {
          this.lineRipple_.destroy();
        }
        if (this.helperText_) {
          this.helperText_.destroy();
        }
        if (this.icon_) {
          this.icon_.destroy();
        }
        if (this.label_) {
          this.label_.destroy();
        }
        if (this.outline_) {
          this.outline_.destroy();
        }
        get(MDCTextField.prototype.__proto__ || Object.getPrototypeOf(MDCTextField.prototype), 'destroy', this).call(this);
      }

      /**
       * Initiliazes the Text Field's internal state based on the environment's
       * state.
       */

    }, {
      key: 'initialSyncWithDom',
      value: function initialSyncWithDom() {
        this.disabled = this.input_.disabled;
      }

      /**
       * @return {string} The value of the input.
       */

    }, {
      key: 'layout',


      /**
       * Recomputes the outline SVG path for the outline element.
       */
      value: function layout() {
        var openNotch = this.foundation_.shouldFloat;
        this.foundation_.notchOutline(openNotch);
      }

      /**
       * @return {!MDCTextFieldFoundation}
       */

    }, {
      key: 'getDefaultFoundation',
      value: function getDefaultFoundation() {
        var _this3 = this;

        return new MDCTextFieldFoundation(
        /** @type {!MDCTextFieldAdapter} */_extends({
          addClass: function addClass(className) {
            return _this3.root_.classList.add(className);
          },
          removeClass: function removeClass(className) {
            return _this3.root_.classList.remove(className);
          },
          hasClass: function hasClass(className) {
            return _this3.root_.classList.contains(className);
          },
          registerTextFieldInteractionHandler: function registerTextFieldInteractionHandler(evtType, handler) {
            return _this3.root_.addEventListener(evtType, handler);
          },
          deregisterTextFieldInteractionHandler: function deregisterTextFieldInteractionHandler(evtType, handler) {
            return _this3.root_.removeEventListener(evtType, handler);
          },
          registerValidationAttributeChangeHandler: function registerValidationAttributeChangeHandler(handler) {
            var observer = new MutationObserver(handler);
            var targetNode = _this3.root_.querySelector(strings$6.INPUT_SELECTOR);
            var config = { attributes: true };
            observer.observe(targetNode, config);
            return observer;
          },
          deregisterValidationAttributeChangeHandler: function deregisterValidationAttributeChangeHandler(observer) {
            return observer.disconnect();
          },
          isFocused: function isFocused() {
            return document.activeElement === _this3.root_.querySelector(strings$6.INPUT_SELECTOR);
          },
          isRtl: function isRtl() {
            return window.getComputedStyle(_this3.root_).getPropertyValue('direction') === 'rtl';
          }
        }, this.getInputAdapterMethods_(), this.getLabelAdapterMethods_(), this.getLineRippleAdapterMethods_(), this.getOutlineAdapterMethods_()), this.getFoundationMap_());
      }

      /**
       * @return {!{
       *   shakeLabel: function(boolean): undefined,
       *   floatLabel: function(boolean): undefined,
       *   hasLabel: function(): boolean,
       *   getLabelWidth: function(): number,
       * }}
       */

    }, {
      key: 'getLabelAdapterMethods_',
      value: function getLabelAdapterMethods_() {
        var _this4 = this;

        return {
          shakeLabel: function shakeLabel(shouldShake) {
            return _this4.label_.shake(shouldShake);
          },
          floatLabel: function floatLabel(shouldFloat) {
            return _this4.label_.float(shouldFloat);
          },
          hasLabel: function hasLabel() {
            return !!_this4.label_;
          },
          getLabelWidth: function getLabelWidth() {
            return _this4.label_.getWidth();
          }
        };
      }

      /**
       * @return {!{
       *   activateLineRipple: function(): undefined,
       *   deactivateLineRipple: function(): undefined,
       *   setLineRippleTransformOrigin: function(number): undefined,
       * }}
       */

    }, {
      key: 'getLineRippleAdapterMethods_',
      value: function getLineRippleAdapterMethods_() {
        var _this5 = this;

        return {
          activateLineRipple: function activateLineRipple() {
            if (_this5.lineRipple_) {
              _this5.lineRipple_.activate();
            }
          },
          deactivateLineRipple: function deactivateLineRipple() {
            if (_this5.lineRipple_) {
              _this5.lineRipple_.deactivate();
            }
          },
          setLineRippleTransformOrigin: function setLineRippleTransformOrigin(normalizedX) {
            if (_this5.lineRipple_) {
              _this5.lineRipple_.setRippleCenter(normalizedX);
            }
          }
        };
      }

      /**
       * @return {!{
       *   notchOutline: function(number, boolean): undefined,
       *   hasOutline: function(): boolean,
       * }}
       */

    }, {
      key: 'getOutlineAdapterMethods_',
      value: function getOutlineAdapterMethods_() {
        var _this6 = this;

        return {
          notchOutline: function notchOutline(labelWidth, isRtl) {
            return _this6.outline_.notch(labelWidth, isRtl);
          },
          closeOutline: function closeOutline() {
            return _this6.outline_.closeNotch();
          },
          hasOutline: function hasOutline() {
            return !!_this6.outline_;
          }
        };
      }

      /**
       * @return {!{
       *   registerInputInteractionHandler: function(string, function()): undefined,
       *   deregisterInputInteractionHandler: function(string, function()): undefined,
       *   getNativeInput: function(): ?Element,
       * }}
       */

    }, {
      key: 'getInputAdapterMethods_',
      value: function getInputAdapterMethods_() {
        var _this7 = this;

        return {
          registerInputInteractionHandler: function registerInputInteractionHandler(evtType, handler) {
            return _this7.input_.addEventListener(evtType, handler);
          },
          deregisterInputInteractionHandler: function deregisterInputInteractionHandler(evtType, handler) {
            return _this7.input_.removeEventListener(evtType, handler);
          },
          getNativeInput: function getNativeInput() {
            return _this7.input_;
          }
        };
      }

      /**
       * Returns a map of all subcomponents to subfoundations.
       * @return {!FoundationMapType}
       */

    }, {
      key: 'getFoundationMap_',
      value: function getFoundationMap_() {
        return {
          helperText: this.helperText_ ? this.helperText_.foundation : undefined,
          icon: this.icon_ ? this.icon_.foundation : undefined
        };
      }
    }, {
      key: 'value',
      get: function get$$1() {
        return this.foundation_.getValue();
      }

      /**
       * @param {string} value The value to set on the input.
       */
      ,
      set: function set$$1(value) {
        this.foundation_.setValue(value);
      }

      /**
       * @return {boolean} True if the Text Field is disabled.
       */

    }, {
      key: 'disabled',
      get: function get$$1() {
        return this.foundation_.isDisabled();
      }

      /**
       * @param {boolean} disabled Sets the Text Field disabled or enabled.
       */
      ,
      set: function set$$1(disabled) {
        this.foundation_.setDisabled(disabled);
      }

      /**
       * @return {boolean} valid True if the Text Field is valid.
       */

    }, {
      key: 'valid',
      get: function get$$1() {
        return this.foundation_.isValid();
      }

      /**
       * @param {boolean} valid Sets the Text Field valid or invalid.
       */
      ,
      set: function set$$1(valid) {
        this.foundation_.setValid(valid);
      }

      /**
       * @return {boolean} True if the Text Field is required.
       */

    }, {
      key: 'required',
      get: function get$$1() {
        return this.input_.required;
      }

      /**
       * @param {boolean} required Sets the Text Field to required.
       */
      ,
      set: function set$$1(required) {
        this.input_.required = required;
      }

      /**
       * @return {string} The input element's validation pattern.
       */

    }, {
      key: 'pattern',
      get: function get$$1() {
        return this.input_.pattern;
      }

      /**
       * @param {string} pattern Sets the input element's validation pattern.
       */
      ,
      set: function set$$1(pattern) {
        this.input_.pattern = pattern;
      }

      /**
       * @return {number} The input element's minLength.
       */

    }, {
      key: 'minLength',
      get: function get$$1() {
        return this.input_.minLength;
      }

      /**
       * @param {number} minLength Sets the input element's minLength.
       */
      ,
      set: function set$$1(minLength) {
        this.input_.minLength = minLength;
      }

      /**
       * @return {number} The input element's maxLength.
       */

    }, {
      key: 'maxLength',
      get: function get$$1() {
        return this.input_.maxLength;
      }

      /**
       * @param {number} maxLength Sets the input element's maxLength.
       */
      ,
      set: function set$$1(maxLength) {
        // Chrome throws exception if maxLength is set < 0
        if (maxLength < 0) {
          this.input_.removeAttribute('maxLength');
        } else {
          this.input_.maxLength = maxLength;
        }
      }

      /**
       * @return {string} The input element's min.
       */

    }, {
      key: 'min',
      get: function get$$1() {
        return this.input_.min;
      }

      /**
       * @param {string} min Sets the input element's min.
       */
      ,
      set: function set$$1(min) {
        this.input_.min = min;
      }

      /**
       * @return {string} The input element's max.
       */

    }, {
      key: 'max',
      get: function get$$1() {
        return this.input_.max;
      }

      /**
       * @param {string} max Sets the input element's max.
       */
      ,
      set: function set$$1(max) {
        this.input_.max = max;
      }

      /**
       * @return {string} The input element's step.
       */

    }, {
      key: 'step',
      get: function get$$1() {
        return this.input_.step;
      }

      /**
       * @param {string} step Sets the input element's step.
       */
      ,
      set: function set$$1(step) {
        this.input_.step = step;
      }

      /**
       * Sets the helper text element content.
       * @param {string} content
       */

    }, {
      key: 'helperTextContent',
      set: function set$$1(content) {
        this.foundation_.setHelperTextContent(content);
      }
    }], [{
      key: 'attachTo',
      value: function attachTo(root) {
        return new MDCTextField(root);
      }
    }]);
    return MDCTextField;
  }(MDCComponent);

  var _templateObject$m = taggedTemplateLiteral(['<style>.mdc-floating-label{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;line-height:1.75rem;font-weight:400;letter-spacing:.00937em;text-decoration:inherit;text-transform:inherit;position:absolute;bottom:8px;left:0;transform-origin:left top;transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1);line-height:1.15rem;cursor:text}[dir="rtl"] .mdc-floating-label,.mdc-floating-label[dir="rtl"]{right:0;left:auto;transform-origin:right top}.mdc-floating-label--float-above{cursor:auto}.mdc-floating-label--float-above{transform:translateY(-100%) scale(.75)}.mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-standard 250ms 1}@keyframes mdc-floating-label-shake-float-above-standard{0%{transform:translateX(calc(0 - 0%)) translateY(-100%) scale(.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.70173, 0.49582);transform:translateX(calc(4% - 0%)) translateY(-100%) scale(.75)}66%{animation-timing-function:cubic-bezier(0.30244, 0.38135, 0.55, 0.95635);transform:translateX(calc(-4% - 0%)) translateY(-100%) scale(.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-100%) scale(.75)}}.mdc-line-ripple{position:absolute;bottom:0;left:0;width:100%;height:2px;transform:scaleX(0);transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0;z-index:2}.mdc-line-ripple--active{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating{opacity:0}.mdc-notched-outline{position:absolute;top:0;left:0;width:calc(100% - 1px);height:calc(100% - 2px);transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0;overflow:hidden}.mdc-notched-outline svg{position:absolute;width:100%;height:100%}.mdc-notched-outline__idle{position:absolute;top:0;left:0;width:calc(100% - 4px);height:calc(100% - 4px);transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1),border-color 150ms cubic-bezier(0.4, 0, 0.2, 1);border:1px solid;opacity:1}.mdc-notched-outline__path{stroke-width:1px;transition:stroke 150ms cubic-bezier(0.4, 0, 0.2, 1),stroke-width 150ms cubic-bezier(0.4, 0, 0.2, 1);fill:transparent}.mdc-notched-outline--notched{opacity:1}.mdc-notched-outline--notched ~ .mdc-notched-outline__idle{opacity:0}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var: 1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug::before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-text-field-helper-text{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.75rem;line-height:1.25rem;font-weight:400;letter-spacing:.03333em;text-decoration:inherit;text-transform:inherit;margin:0;transition:opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0;font-size:.75rem;will-change:opacity}.mdc-text-field+.mdc-text-field-helper-text{margin-bottom:8px}.mdc-text-field-helper-text--persistent{transition:none;opacity:1;will-change:initial}.mdc-text-field--with-leading-icon .mdc-text-field__icon,.mdc-text-field--with-trailing-icon .mdc-text-field__icon{position:absolute;bottom:16px;cursor:pointer}.mdc-text-field__icon:not([tabindex]),.mdc-text-field__icon[tabindex="-1"]{cursor:default;pointer-events:none}.mdc-text-field{display:inline-block;position:relative;margin-bottom:8px;will-change:opacity, transform, color}.mdc-text-field:not(.mdc-text-field--disabled):not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mdc-text-field__input{border-bottom-color:rgba(0,0,0,0.42)}.mdc-text-field:not(.mdc-text-field--disabled):not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mdc-text-field__input:hover{border-bottom-color:rgba(0,0,0,0.87)}.mdc-text-field .mdc-line-ripple{background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input{color:rgba(0,0,0,0.87)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-floating-label{color:rgba(0,0,0,0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:rgba(0,0,0,0.6)}.mdc-text-field:not(.mdc-text-field--disabled)+.mdc-text-field-helper-text{color:rgba(0,0,0,0.6)}.mdc-text-field:not(.mdc-text-field--disabled):not(.mdc-text-field--textarea){border-bottom-color:rgba(0,0,0,0.12)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon{color:rgba(0,0,0,0.54)}.mdc-text-field__input{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;line-height:1.75rem;font-weight:400;letter-spacing:.00937em;text-decoration:inherit;text-transform:inherit;width:100%;height:30px;padding:20px 0 1px;transition:opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);border:none;border-bottom:1px solid;border-radius:0;background:none;appearance:none}.mdc-text-field__input::placeholder{transition:color 180ms cubic-bezier(0.4, 0, 0.2, 1);opacity:1}.mdc-text-field__input:focus{outline:none}.mdc-text-field__input:invalid{box-shadow:none}.mdc-text-field__input:-webkit-autofill+.mdc-floating-label{transform:translateY(-100%) scale(0.75);cursor:auto}.mdc-text-field--outlined{height:56px;border:none}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__idle{border-color:rgba(0,0,0,0.24)}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__path{stroke:rgba(0,0,0,0.24)}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover ~ .mdc-notched-outline__idle,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover ~ .mdc-notched-outline__idle{border-color:rgba(0,0,0,0.87)}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover ~ .mdc-notched-outline .mdc-notched-outline__path,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover ~ .mdc-notched-outline .mdc-notched-outline__path{stroke:rgba(0,0,0,0.87)}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__path{stroke:#6200ee;stroke:var(--mdc-theme-primary, #6200ee)}.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-130%) scale(.75)}.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined 250ms 1}.mdc-text-field--outlined .mdc-notched-outline{border-radius:4px}.mdc-text-field--outlined .mdc-notched-outline__idle{border-radius:4px}.mdc-text-field--outlined .mdc-text-field__input{display:flex;padding:12px;border:none;background-color:transparent;z-index:1}.mdc-text-field--outlined .mdc-floating-label{left:16px;right:initial;position:absolute;bottom:20px}[dir="rtl"] .mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--outlined .mdc-floating-label[dir="rtl"]{left:initial;right:16px}.mdc-text-field--outlined .mdc-text-field__icon{z-index:2}.mdc-text-field--outlined.mdc-text-field--focused .mdc-notched-outline__path{stroke-width:2px}.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input{color:rgba(0,0,0,0.6)}.mdc-text-field--outlined.mdc-text-field--disabled .mdc-notched-outline__idle{border-color:rgba(0,0,0,0.06)}.mdc-text-field--outlined.mdc-text-field--disabled .mdc-notched-outline__path{stroke:rgba(0,0,0,0.06)}.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input{border-bottom:none}.mdc-text-field--outlined.mdc-text-field--dense{height:48px}.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--float-above{transform:translateY(-110%) scale(.923)}.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-dense 250ms 1}.mdc-text-field--outlined.mdc-text-field--dense .mdc-text-field__input{padding:12px 12px 7px}.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label{bottom:16px}.mdc-text-field--outlined.mdc-text-field--dense .mdc-text-field__icon{top:12px}.mdc-text-field--box{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:transparent;will-change:transform, opacity;border-radius:4px 4px 0 0;display:inline-flex;position:relative;height:56px;margin-top:16px;overflow:hidden}.mdc-text-field--box::before,.mdc-text-field--box::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-text-field--box::before{transition:opacity 15ms linear;z-index:1}.mdc-text-field--box.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-text-field--box.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-text-field--box.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-text-field--box.mdc-ripple-upgraded--foreground-activation::after{animation:225ms mdc-ripple-fg-radius-in forwards,75ms mdc-ripple-fg-opacity-in forwards}.mdc-text-field--box.mdc-ripple-upgraded--foreground-deactivation::after{animation:150ms mdc-ripple-fg-opacity-out;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-text-field--box::before,.mdc-text-field--box::after{background-color:rgba(0,0,0,0.87)}.mdc-text-field--box:hover::before{opacity:.04}.mdc-text-field--box:not(.mdc-ripple-upgraded):focus::before,.mdc-text-field--box:not(.mdc-ripple-upgraded):focus-within::before,.mdc-text-field--box.mdc-ripple-upgraded--background-focused::before{transition-duration:75ms;opacity:.12}.mdc-text-field--box::before,.mdc-text-field--box::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-text-field--box.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-text-field--box:not(.mdc-text-field--disabled){background-color:#f5f5f5}.mdc-text-field--box .mdc-floating-label--float-above{transform:translateY(-50%) scale(.75)}.mdc-text-field--box .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-box 250ms 1}.mdc-text-field--box .mdc-text-field__input{align-self:flex-end;box-sizing:border-box;height:100%;padding:20px 16px 0}.mdc-text-field--box .mdc-floating-label{left:16px;right:initial;position:absolute;bottom:20px;width:calc(100% - 48px);text-overflow:ellipsis;white-space:nowrap;pointer-events:none;overflow:hidden;will-change:transform}[dir="rtl"] .mdc-text-field--box .mdc-floating-label,.mdc-text-field--box .mdc-floating-label[dir="rtl"]{left:initial;right:16px}.mdc-text-field--box.mdc-text-field--disabled{background-color:#fafafa;border-bottom:none}.mdc-text-field--box.mdc-text-field--disabled .mdc-text-field__input{border-bottom-color:rgba(0,0,0,0.06)}.mdc-text-field--box.mdc-text-field--disabled:not(.mdc-text-field--disabled) .mdc-floating-label{color:rgba(0,0,0,0.37)}.mdc-text-field--box.mdc-text-field--disabled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:rgba(0,0,0,0.37)}.mdc-text-field--box.mdc-text-field--dense .mdc-floating-label--float-above{transform:translateY(-70%) scale(.923)}.mdc-text-field--box.mdc-text-field--dense .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-box-dense 250ms 1}.mdc-text-field--box.mdc-text-field--dense .mdc-text-field__input{padding:12px 12px 0}.mdc-text-field--with-leading-icon .mdc-text-field__icon{left:15px;right:initial}[dir="rtl"] .mdc-text-field--with-leading-icon .mdc-text-field__icon,.mdc-text-field--with-leading-icon .mdc-text-field__icon[dir="rtl"]{left:initial;right:15px}.mdc-text-field--with-leading-icon .mdc-text-field__input{padding-left:48px;padding-right:15px}[dir="rtl"] .mdc-text-field--with-leading-icon .mdc-text-field__input,.mdc-text-field--with-leading-icon .mdc-text-field__input[dir="rtl"]{padding-left:15px;padding-right:48px}.mdc-text-field--with-leading-icon .mdc-floating-label{left:48px;right:initial}[dir="rtl"] .mdc-text-field--with-leading-icon .mdc-floating-label,.mdc-text-field--with-leading-icon .mdc-floating-label[dir="rtl"]{left:initial;right:48px}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-130%) translateX(-32px) scale(.75)}[dir="rtl"] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above[dir="rtl"]{transform:translateY(-130%) translateX(32px) scale(.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}[dir="rtl"] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake,.mdc-text-field--with-leading-icon.mdc-text-field--outlined[dir="rtl"] .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-rtl 250ms 1}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--float-above{transform:translateY(-110%) translateX(-21px) scale(.923)}[dir="rtl"] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--float-above[dir="rtl"]{transform:translateY(-110%) translateX(21px) scale(.923)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-dense 250ms 1}[dir="rtl"] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--shake,.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense[dir="rtl"] .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-dense-rtl 250ms 1}.mdc-text-field--with-trailing-icon .mdc-text-field__icon{left:initial;right:15px}[dir="rtl"] .mdc-text-field--with-trailing-icon .mdc-text-field__icon,.mdc-text-field--with-trailing-icon .mdc-text-field__icon[dir="rtl"]{left:15px;right:initial}.mdc-text-field--with-trailing-icon .mdc-text-field__input{padding-left:15px;padding-right:48px}[dir="rtl"] .mdc-text-field--with-trailing-icon .mdc-text-field__input,.mdc-text-field--with-trailing-icon .mdc-text-field__input[dir="rtl"]{padding-left:48px;padding-right:15px}.mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__icon,.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon{bottom:16px;transform:scale(0.8)}.mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__icon{left:12px;right:initial}[dir="rtl"] .mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__icon,.mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__icon[dir="rtl"]{left:initial;right:12px}.mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__input{padding-left:38px;padding-right:12px}[dir="rtl"] .mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__input,.mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__input[dir="rtl"]{padding-left:12px;padding-right:38px}.mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-floating-label{left:38px;right:initial}[dir="rtl"] .mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-floating-label[dir="rtl"]{left:initial;right:38px}.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon{left:initial;right:12px}[dir="rtl"] .mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon,.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon[dir="rtl"]{left:12px;right:initial}.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__input{padding-left:12px;padding-right:38px}[dir="rtl"] .mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__input,.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__input[dir="rtl"]{padding-left:38px;padding-right:12px}.mdc-text-field--upgraded:not(.mdc-text-field--fullwidth):not(.mdc-text-field--box){display:inline-flex;position:relative;align-items:flex-end;box-sizing:border-box;margin-top:16px}.mdc-text-field--upgraded:not(.mdc-text-field--fullwidth):not(.mdc-text-field--box):not(.mdc-text-field--textarea):not(.mdc-text-field--outlined){height:48px}.mdc-text-field--dense{margin-top:12px;margin-bottom:4px}.mdc-text-field--dense .mdc-floating-label--float-above{transform:translateY(-110%) scale(.923)}.mdc-text-field--dense .mdc-floating-label{font-size:.813rem}.mdc-text-field__input:required+.mdc-floating-label::after{margin-left:1px;content:"*"}.mdc-text-field--textarea{border-radius:4px;display:flex;width:fit-content;height:initial;transition:none;border:1px solid;overflow:hidden}.mdc-text-field--textarea .mdc-floating-label{border-radius:4px 4px 0 0}.mdc-text-field--textarea .mdc-text-field__input{border-radius:2px}.mdc-text-field--textarea:not(.mdc-text-field--disabled){border-color:rgba(0,0,0,0.73)}.mdc-text-field--textarea:not(.mdc-text-field--disabled) .mdc-text-field__input:focus{border-color:rgba(0,0,0,0.73)}.mdc-text-field--textarea .mdc-floating-label--float-above{transform:translateY(-50%) scale(.923)}.mdc-text-field--textarea .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea 250ms 1}.mdc-text-field--textarea .mdc-text-field__input{margin:0;padding:16px;padding-top:32px;border:1px solid transparent}.mdc-text-field--textarea .mdc-floating-label{left:1px;right:initial;background-color:#fff;top:18px;bottom:auto;margin-top:2px;margin-left:8px;padding:8px;line-height:1.15}[dir="rtl"] .mdc-text-field--textarea .mdc-floating-label,.mdc-text-field--textarea .mdc-floating-label[dir="rtl"]{left:initial;right:1px}.mdc-text-field--fullwidth{width:100%}.mdc-text-field--fullwidth .mdc-text-field__input{resize:vertical}.mdc-text-field--fullwidth:not(.mdc-text-field--textarea){display:block;box-sizing:border-box;height:56px;margin:0;border:none;border-bottom:1px solid;outline:none}.mdc-text-field--fullwidth:not(.mdc-text-field--textarea) .mdc-text-field__input{width:100%;height:100%;padding:0;resize:none;border:none !important}.mdc-text-field--fullwidth.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--textarea){border-bottom-color:#c51162}.mdc-text-field--dense+.mdc-text-field-helper-text{margin-bottom:4px}.mdc-text-field--box+.mdc-text-field-helper-text,.mdc-text-field--outlined+.mdc-text-field-helper-text{margin-right:16px;margin-left:16px}.mdc-form-field>.mdc-text-field+label{align-self:flex-start}.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-floating-label{color:rgba(98,0,238,0.87)}.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:rgba(98,0,238,0.87)}.mdc-text-field--focused .mdc-text-field__input:required+.mdc-floating-label::after{color:#c51162}.mdc-text-field--focused+.mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg){opacity:1}.mdc-text-field--textarea.mdc-text-field--focused:not(.mdc-text-field--disabled){border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field--textarea.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-text-field__input:focus{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mdc-text-field__input{border-bottom-color:#c51162}.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mdc-text-field__input:hover{border-bottom-color:#c51162}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple{background-color:#c51162}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-floating-label{color:#c51162}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:#c51162}.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--invalid+.mdc-text-field-helper-text--validation-msg{color:#c51162}.mdc-text-field--invalid.mdc-text-field--with-trailing-icon:not(.mdc-text-field--disabled) .mdc-text-field__icon{color:#c51162}.mdc-text-field--invalid+.mdc-text-field-helper-text--validation-msg{opacity:1}.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled){border-color:#c51162}.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input:focus{border-color:#c51162}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__idle{border-color:#c51162}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__path{stroke:#c51162}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover ~ .mdc-notched-outline__idle,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover ~ .mdc-notched-outline__idle{border-color:#c51162}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover ~ .mdc-notched-outline .mdc-notched-outline__path,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover ~ .mdc-notched-outline .mdc-notched-outline__path{stroke:#c51162}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__path{stroke:#c51162}.mdc-text-field--disabled{pointer-events:none}.mdc-text-field--disabled .mdc-text-field__input{border-bottom-color:rgba(35,31,32,0.26)}.mdc-text-field--disabled .mdc-text-field__input{color:rgba(0,0,0,0.37)}.mdc-text-field--disabled .mdc-floating-label{color:rgba(0,0,0,0.37)}.mdc-text-field--disabled .mdc-text-field__input::placeholder{color:rgba(0,0,0,0.37)}.mdc-text-field--disabled+.mdc-text-field-helper-text{color:rgba(0,0,0,0.37)}.mdc-text-field--disabled .mdc-text-field__icon{color:rgba(0,0,0,0.3)}.mdc-text-field--disabled:not(.mdc-text-field--textarea){border-bottom-color:rgba(0,0,0,0.12)}.mdc-text-field--disabled .mdc-text-field__input{border-bottom:1px dotted}.mdc-text-field--disabled .mdc-floating-label{cursor:default}.mdc-text-field--textarea.mdc-text-field--disabled{border-color:rgba(35,31,32,0.26);background-color:#f9f9f9;border-style:solid}.mdc-text-field--textarea.mdc-text-field--disabled .mdc-text-field__input:focus{border-color:rgba(35,31,32,0.26)}.mdc-text-field--textarea.mdc-text-field--disabled .mdc-text-field__input{border:1px solid transparent}.mdc-text-field--textarea.mdc-text-field--disabled .mdc-floating-label{background-color:#f9f9f9}@keyframes mdc-floating-label-shake-float-above-text-field-box{0%{transform:translateX(calc(0 - 0%)) translateY(-50%) scale(.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.70173, 0.49582);transform:translateX(calc(4% - 0%)) translateY(-50%) scale(.75)}66%{animation-timing-function:cubic-bezier(0.30244, 0.38135, 0.55, 0.95635);transform:translateX(calc(-4% - 0%)) translateY(-50%) scale(.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-50%) scale(.75)}}@keyframes mdc-floating-label-shake-float-above-text-field-box-dense{0%{transform:translateX(calc(0 - 0%)) translateY(-70%) scale(.923)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.70173, 0.49582);transform:translateX(calc(4% - 0%)) translateY(-70%) scale(.923)}66%{animation-timing-function:cubic-bezier(0.30244, 0.38135, 0.55, 0.95635);transform:translateX(calc(-4% - 0%)) translateY(-70%) scale(.923)}100%{transform:translateX(calc(0 - 0%)) translateY(-70%) scale(.923)}}@keyframes mdc-floating-label-shake-float-above-text-field-outlined{0%{transform:translateX(calc(0 - 0%)) translateY(-130%) scale(.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.70173, 0.49582);transform:translateX(calc(4% - 0%)) translateY(-130%) scale(.75)}66%{animation-timing-function:cubic-bezier(0.30244, 0.38135, 0.55, 0.95635);transform:translateX(calc(-4% - 0%)) translateY(-130%) scale(.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-130%) scale(.75)}}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-dense{0%{transform:translateX(calc(0 - 0%)) translateY(-110%) scale(.923)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.70173, 0.49582);transform:translateX(calc(4% - 0%)) translateY(-110%) scale(.923)}66%{animation-timing-function:cubic-bezier(0.30244, 0.38135, 0.55, 0.95635);transform:translateX(calc(-4% - 0%)) translateY(-110%) scale(.923)}100%{transform:translateX(calc(0 - 0%)) translateY(-110%) scale(.923)}}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon{0%{transform:translateX(calc(0 - 32px)) translateY(-130%) scale(.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.70173, 0.49582);transform:translateX(calc(4% - 32px)) translateY(-130%) scale(.75)}66%{animation-timing-function:cubic-bezier(0.30244, 0.38135, 0.55, 0.95635);transform:translateX(calc(-4% - 32px)) translateY(-130%) scale(.75)}100%{transform:translateX(calc(0 - 32px)) translateY(-130%) scale(.75)}}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-dense{0%{transform:translateX(calc(0 - 21px)) translateY(-110%) scale(.923)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.70173, 0.49582);transform:translateX(calc(4% - 21px)) translateY(-110%) scale(.923)}66%{animation-timing-function:cubic-bezier(0.30244, 0.38135, 0.55, 0.95635);transform:translateX(calc(-4% - 21px)) translateY(-110%) scale(.923)}100%{transform:translateX(calc(0 - 21px)) translateY(-110%) scale(.923)}}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-rtl{0%{transform:translateX(calc(0 - -32px)) translateY(-130%) scale(.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.70173, 0.49582);transform:translateX(calc(4% - -32px)) translateY(-130%) scale(.75)}66%{animation-timing-function:cubic-bezier(0.30244, 0.38135, 0.55, 0.95635);transform:translateX(calc(-4% - -32px)) translateY(-130%) scale(.75)}100%{transform:translateX(calc(0 - -32px)) translateY(-130%) scale(.75)}}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-dense-rtl{0%{transform:translateX(calc(0 - -21px)) translateY(-110%) scale(.923)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.70173, 0.49582);transform:translateX(calc(4% - -21px)) translateY(-110%) scale(.923)}66%{animation-timing-function:cubic-bezier(0.30244, 0.38135, 0.55, 0.95635);transform:translateX(calc(-4% - -21px)) translateY(-110%) scale(.923)}100%{transform:translateX(calc(0 - -21px)) translateY(-110%) scale(.923)}}@keyframes mdc-floating-label-shake-float-above-textarea{0%{transform:translateX(calc(0 - 0%)) translateY(-50%) scale(.923)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.70173, 0.49582);transform:translateX(calc(4% - 0%)) translateY(-50%) scale(.923)}66%{animation-timing-function:cubic-bezier(0.30244, 0.38135, 0.55, 0.95635);transform:translateX(calc(-4% - 0%)) translateY(-50%) scale(.923)}100%{transform:translateX(calc(0 - 0%)) translateY(-50%) scale(.923)}}.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:\'liga\';-webkit-font-smoothing:antialiased}:host(:not([fullwidth])){display:inline-block}\n</style>'], ['<style>.mdc-floating-label{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;line-height:1.75rem;font-weight:400;letter-spacing:.00937em;text-decoration:inherit;text-transform:inherit;position:absolute;bottom:8px;left:0;transform-origin:left top;transition:transform 150ms cubic-bezier(0.4, 0, 0.2, 1),color 150ms cubic-bezier(0.4, 0, 0.2, 1);line-height:1.15rem;cursor:text}[dir="rtl"] .mdc-floating-label,.mdc-floating-label[dir="rtl"]{right:0;left:auto;transform-origin:right top}.mdc-floating-label--float-above{cursor:auto}.mdc-floating-label--float-above{transform:translateY(-100%) scale(.75)}.mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-standard 250ms 1}@keyframes mdc-floating-label-shake-float-above-standard{0%{transform:translateX(calc(0 - 0%)) translateY(-100%) scale(.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.70173, 0.49582);transform:translateX(calc(4% - 0%)) translateY(-100%) scale(.75)}66%{animation-timing-function:cubic-bezier(0.30244, 0.38135, 0.55, 0.95635);transform:translateX(calc(-4% - 0%)) translateY(-100%) scale(.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-100%) scale(.75)}}.mdc-line-ripple{position:absolute;bottom:0;left:0;width:100%;height:2px;transform:scaleX(0);transition:transform 180ms cubic-bezier(0.4, 0, 0.2, 1),opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0;z-index:2}.mdc-line-ripple--active{transform:scaleX(1);opacity:1}.mdc-line-ripple--deactivating{opacity:0}.mdc-notched-outline{position:absolute;top:0;left:0;width:calc(100% - 1px);height:calc(100% - 2px);transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0;overflow:hidden}.mdc-notched-outline svg{position:absolute;width:100%;height:100%}.mdc-notched-outline__idle{position:absolute;top:0;left:0;width:calc(100% - 4px);height:calc(100% - 4px);transition:opacity 150ms cubic-bezier(0.4, 0, 0.2, 1),border-color 150ms cubic-bezier(0.4, 0, 0.2, 1);border:1px solid;opacity:1}.mdc-notched-outline__path{stroke-width:1px;transition:stroke 150ms cubic-bezier(0.4, 0, 0.2, 1),stroke-width 150ms cubic-bezier(0.4, 0, 0.2, 1);fill:transparent}.mdc-notched-outline--notched{opacity:1}.mdc-notched-outline--notched ~ .mdc-notched-outline__idle{opacity:0}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug{--mdc-ripple-surface-test-edge-var: 1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug::before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-text-field-helper-text{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.75rem;line-height:1.25rem;font-weight:400;letter-spacing:.03333em;text-decoration:inherit;text-transform:inherit;margin:0;transition:opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);opacity:0;font-size:.75rem;will-change:opacity}.mdc-text-field+.mdc-text-field-helper-text{margin-bottom:8px}.mdc-text-field-helper-text--persistent{transition:none;opacity:1;will-change:initial}.mdc-text-field--with-leading-icon .mdc-text-field__icon,.mdc-text-field--with-trailing-icon .mdc-text-field__icon{position:absolute;bottom:16px;cursor:pointer}.mdc-text-field__icon:not([tabindex]),.mdc-text-field__icon[tabindex="-1"]{cursor:default;pointer-events:none}.mdc-text-field{display:inline-block;position:relative;margin-bottom:8px;will-change:opacity, transform, color}.mdc-text-field:not(.mdc-text-field--disabled):not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mdc-text-field__input{border-bottom-color:rgba(0,0,0,0.42)}.mdc-text-field:not(.mdc-text-field--disabled):not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mdc-text-field__input:hover{border-bottom-color:rgba(0,0,0,0.87)}.mdc-text-field .mdc-line-ripple{background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input{color:rgba(0,0,0,0.87)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-floating-label{color:rgba(0,0,0,0.6)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:rgba(0,0,0,0.6)}.mdc-text-field:not(.mdc-text-field--disabled)+.mdc-text-field-helper-text{color:rgba(0,0,0,0.6)}.mdc-text-field:not(.mdc-text-field--disabled):not(.mdc-text-field--textarea){border-bottom-color:rgba(0,0,0,0.12)}.mdc-text-field:not(.mdc-text-field--disabled) .mdc-text-field__icon{color:rgba(0,0,0,0.54)}.mdc-text-field__input{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:1rem;line-height:1.75rem;font-weight:400;letter-spacing:.00937em;text-decoration:inherit;text-transform:inherit;width:100%;height:30px;padding:20px 0 1px;transition:opacity 180ms cubic-bezier(0.4, 0, 0.2, 1);border:none;border-bottom:1px solid;border-radius:0;background:none;appearance:none}.mdc-text-field__input::placeholder{transition:color 180ms cubic-bezier(0.4, 0, 0.2, 1);opacity:1}.mdc-text-field__input:focus{outline:none}.mdc-text-field__input:invalid{box-shadow:none}.mdc-text-field__input:-webkit-autofill+.mdc-floating-label{transform:translateY(-100%) scale(0.75);cursor:auto}.mdc-text-field--outlined{height:56px;border:none}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__idle{border-color:rgba(0,0,0,0.24)}.mdc-text-field--outlined:not(.mdc-text-field--disabled) .mdc-notched-outline__path{stroke:rgba(0,0,0,0.24)}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover ~ .mdc-notched-outline__idle,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover ~ .mdc-notched-outline__idle{border-color:rgba(0,0,0,0.87)}.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover ~ .mdc-notched-outline .mdc-notched-outline__path,.mdc-text-field--outlined:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover ~ .mdc-notched-outline .mdc-notched-outline__path{stroke:rgba(0,0,0,0.87)}.mdc-text-field--outlined:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__path{stroke:#6200ee;stroke:var(--mdc-theme-primary, #6200ee)}.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-130%) scale(.75)}.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined 250ms 1}.mdc-text-field--outlined .mdc-notched-outline{border-radius:4px}.mdc-text-field--outlined .mdc-notched-outline__idle{border-radius:4px}.mdc-text-field--outlined .mdc-text-field__input{display:flex;padding:12px;border:none;background-color:transparent;z-index:1}.mdc-text-field--outlined .mdc-floating-label{left:16px;right:initial;position:absolute;bottom:20px}[dir="rtl"] .mdc-text-field--outlined .mdc-floating-label,.mdc-text-field--outlined .mdc-floating-label[dir="rtl"]{left:initial;right:16px}.mdc-text-field--outlined .mdc-text-field__icon{z-index:2}.mdc-text-field--outlined.mdc-text-field--focused .mdc-notched-outline__path{stroke-width:2px}.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input{color:rgba(0,0,0,0.6)}.mdc-text-field--outlined.mdc-text-field--disabled .mdc-notched-outline__idle{border-color:rgba(0,0,0,0.06)}.mdc-text-field--outlined.mdc-text-field--disabled .mdc-notched-outline__path{stroke:rgba(0,0,0,0.06)}.mdc-text-field--outlined.mdc-text-field--disabled .mdc-text-field__input{border-bottom:none}.mdc-text-field--outlined.mdc-text-field--dense{height:48px}.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--float-above{transform:translateY(-110%) scale(.923)}.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-dense 250ms 1}.mdc-text-field--outlined.mdc-text-field--dense .mdc-text-field__input{padding:12px 12px 7px}.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label{bottom:16px}.mdc-text-field--outlined.mdc-text-field--dense .mdc-text-field__icon{top:12px}.mdc-text-field--box{--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:transparent;will-change:transform, opacity;border-radius:4px 4px 0 0;display:inline-flex;position:relative;height:56px;margin-top:16px;overflow:hidden}.mdc-text-field--box::before,.mdc-text-field--box::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}.mdc-text-field--box::before{transition:opacity 15ms linear;z-index:1}.mdc-text-field--box.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}.mdc-text-field--box.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}.mdc-text-field--box.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}.mdc-text-field--box.mdc-ripple-upgraded--foreground-activation::after{animation:225ms mdc-ripple-fg-radius-in forwards,75ms mdc-ripple-fg-opacity-in forwards}.mdc-text-field--box.mdc-ripple-upgraded--foreground-deactivation::after{animation:150ms mdc-ripple-fg-opacity-out;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}.mdc-text-field--box::before,.mdc-text-field--box::after{background-color:rgba(0,0,0,0.87)}.mdc-text-field--box:hover::before{opacity:.04}.mdc-text-field--box:not(.mdc-ripple-upgraded):focus::before,.mdc-text-field--box:not(.mdc-ripple-upgraded):focus-within::before,.mdc-text-field--box.mdc-ripple-upgraded--background-focused::before{transition-duration:75ms;opacity:.12}.mdc-text-field--box::before,.mdc-text-field--box::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}.mdc-text-field--box.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}.mdc-text-field--box:not(.mdc-text-field--disabled){background-color:#f5f5f5}.mdc-text-field--box .mdc-floating-label--float-above{transform:translateY(-50%) scale(.75)}.mdc-text-field--box .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-box 250ms 1}.mdc-text-field--box .mdc-text-field__input{align-self:flex-end;box-sizing:border-box;height:100%;padding:20px 16px 0}.mdc-text-field--box .mdc-floating-label{left:16px;right:initial;position:absolute;bottom:20px;width:calc(100% - 48px);text-overflow:ellipsis;white-space:nowrap;pointer-events:none;overflow:hidden;will-change:transform}[dir="rtl"] .mdc-text-field--box .mdc-floating-label,.mdc-text-field--box .mdc-floating-label[dir="rtl"]{left:initial;right:16px}.mdc-text-field--box.mdc-text-field--disabled{background-color:#fafafa;border-bottom:none}.mdc-text-field--box.mdc-text-field--disabled .mdc-text-field__input{border-bottom-color:rgba(0,0,0,0.06)}.mdc-text-field--box.mdc-text-field--disabled:not(.mdc-text-field--disabled) .mdc-floating-label{color:rgba(0,0,0,0.37)}.mdc-text-field--box.mdc-text-field--disabled:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:rgba(0,0,0,0.37)}.mdc-text-field--box.mdc-text-field--dense .mdc-floating-label--float-above{transform:translateY(-70%) scale(.923)}.mdc-text-field--box.mdc-text-field--dense .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-box-dense 250ms 1}.mdc-text-field--box.mdc-text-field--dense .mdc-text-field__input{padding:12px 12px 0}.mdc-text-field--with-leading-icon .mdc-text-field__icon{left:15px;right:initial}[dir="rtl"] .mdc-text-field--with-leading-icon .mdc-text-field__icon,.mdc-text-field--with-leading-icon .mdc-text-field__icon[dir="rtl"]{left:initial;right:15px}.mdc-text-field--with-leading-icon .mdc-text-field__input{padding-left:48px;padding-right:15px}[dir="rtl"] .mdc-text-field--with-leading-icon .mdc-text-field__input,.mdc-text-field--with-leading-icon .mdc-text-field__input[dir="rtl"]{padding-left:15px;padding-right:48px}.mdc-text-field--with-leading-icon .mdc-floating-label{left:48px;right:initial}[dir="rtl"] .mdc-text-field--with-leading-icon .mdc-floating-label,.mdc-text-field--with-leading-icon .mdc-floating-label[dir="rtl"]{left:initial;right:48px}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above{transform:translateY(-130%) translateX(-32px) scale(.75)}[dir="rtl"] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--float-above[dir="rtl"]{transform:translateY(-130%) translateX(32px) scale(.75)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon 250ms 1}[dir="rtl"] .mdc-text-field--with-leading-icon.mdc-text-field--outlined .mdc-floating-label--shake,.mdc-text-field--with-leading-icon.mdc-text-field--outlined[dir="rtl"] .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-rtl 250ms 1}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--float-above{transform:translateY(-110%) translateX(-21px) scale(.923)}[dir="rtl"] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--float-above,.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--float-above[dir="rtl"]{transform:translateY(-110%) translateX(21px) scale(.923)}.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-dense 250ms 1}[dir="rtl"] .mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense .mdc-floating-label--shake,.mdc-text-field--with-leading-icon.mdc-text-field--outlined.mdc-text-field--dense[dir="rtl"] .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-dense-rtl 250ms 1}.mdc-text-field--with-trailing-icon .mdc-text-field__icon{left:initial;right:15px}[dir="rtl"] .mdc-text-field--with-trailing-icon .mdc-text-field__icon,.mdc-text-field--with-trailing-icon .mdc-text-field__icon[dir="rtl"]{left:15px;right:initial}.mdc-text-field--with-trailing-icon .mdc-text-field__input{padding-left:15px;padding-right:48px}[dir="rtl"] .mdc-text-field--with-trailing-icon .mdc-text-field__input,.mdc-text-field--with-trailing-icon .mdc-text-field__input[dir="rtl"]{padding-left:48px;padding-right:15px}.mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__icon,.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon{bottom:16px;transform:scale(0.8)}.mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__icon{left:12px;right:initial}[dir="rtl"] .mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__icon,.mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__icon[dir="rtl"]{left:initial;right:12px}.mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__input{padding-left:38px;padding-right:12px}[dir="rtl"] .mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__input,.mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-text-field__input[dir="rtl"]{padding-left:12px;padding-right:38px}.mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-floating-label{left:38px;right:initial}[dir="rtl"] .mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-floating-label,.mdc-text-field--with-leading-icon.mdc-text-field--dense .mdc-floating-label[dir="rtl"]{left:initial;right:38px}.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon{left:initial;right:12px}[dir="rtl"] .mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon,.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__icon[dir="rtl"]{left:12px;right:initial}.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__input{padding-left:12px;padding-right:38px}[dir="rtl"] .mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__input,.mdc-text-field--with-trailing-icon.mdc-text-field--dense .mdc-text-field__input[dir="rtl"]{padding-left:38px;padding-right:12px}.mdc-text-field--upgraded:not(.mdc-text-field--fullwidth):not(.mdc-text-field--box){display:inline-flex;position:relative;align-items:flex-end;box-sizing:border-box;margin-top:16px}.mdc-text-field--upgraded:not(.mdc-text-field--fullwidth):not(.mdc-text-field--box):not(.mdc-text-field--textarea):not(.mdc-text-field--outlined){height:48px}.mdc-text-field--dense{margin-top:12px;margin-bottom:4px}.mdc-text-field--dense .mdc-floating-label--float-above{transform:translateY(-110%) scale(.923)}.mdc-text-field--dense .mdc-floating-label{font-size:.813rem}.mdc-text-field__input:required+.mdc-floating-label::after{margin-left:1px;content:"*"}.mdc-text-field--textarea{border-radius:4px;display:flex;width:fit-content;height:initial;transition:none;border:1px solid;overflow:hidden}.mdc-text-field--textarea .mdc-floating-label{border-radius:4px 4px 0 0}.mdc-text-field--textarea .mdc-text-field__input{border-radius:2px}.mdc-text-field--textarea:not(.mdc-text-field--disabled){border-color:rgba(0,0,0,0.73)}.mdc-text-field--textarea:not(.mdc-text-field--disabled) .mdc-text-field__input:focus{border-color:rgba(0,0,0,0.73)}.mdc-text-field--textarea .mdc-floating-label--float-above{transform:translateY(-50%) scale(.923)}.mdc-text-field--textarea .mdc-floating-label--shake{animation:mdc-floating-label-shake-float-above-textarea 250ms 1}.mdc-text-field--textarea .mdc-text-field__input{margin:0;padding:16px;padding-top:32px;border:1px solid transparent}.mdc-text-field--textarea .mdc-floating-label{left:1px;right:initial;background-color:#fff;top:18px;bottom:auto;margin-top:2px;margin-left:8px;padding:8px;line-height:1.15}[dir="rtl"] .mdc-text-field--textarea .mdc-floating-label,.mdc-text-field--textarea .mdc-floating-label[dir="rtl"]{left:initial;right:1px}.mdc-text-field--fullwidth{width:100%}.mdc-text-field--fullwidth .mdc-text-field__input{resize:vertical}.mdc-text-field--fullwidth:not(.mdc-text-field--textarea){display:block;box-sizing:border-box;height:56px;margin:0;border:none;border-bottom:1px solid;outline:none}.mdc-text-field--fullwidth:not(.mdc-text-field--textarea) .mdc-text-field__input{width:100%;height:100%;padding:0;resize:none;border:none !important}.mdc-text-field--fullwidth.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--textarea){border-bottom-color:#c51162}.mdc-text-field--dense+.mdc-text-field-helper-text{margin-bottom:4px}.mdc-text-field--box+.mdc-text-field-helper-text,.mdc-text-field--outlined+.mdc-text-field-helper-text{margin-right:16px;margin-left:16px}.mdc-form-field>.mdc-text-field+label{align-self:flex-start}.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-floating-label{color:rgba(98,0,238,0.87)}.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:rgba(98,0,238,0.87)}.mdc-text-field--focused .mdc-text-field__input:required+.mdc-floating-label::after{color:#c51162}.mdc-text-field--focused+.mdc-text-field-helper-text:not(.mdc-text-field-helper-text--validation-msg){opacity:1}.mdc-text-field--textarea.mdc-text-field--focused:not(.mdc-text-field--disabled){border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field--textarea.mdc-text-field--focused:not(.mdc-text-field--disabled) .mdc-text-field__input:focus{border-color:#6200ee;border-color:var(--mdc-theme-primary, #6200ee)}.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mdc-text-field__input{border-bottom-color:#c51162}.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--outlined):not(.mdc-text-field--textarea) .mdc-text-field__input:hover{border-bottom-color:#c51162}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-line-ripple{background-color:#c51162}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-floating-label{color:#c51162}.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input::placeholder{color:#c51162}.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--invalid+.mdc-text-field-helper-text--validation-msg{color:#c51162}.mdc-text-field--invalid.mdc-text-field--with-trailing-icon:not(.mdc-text-field--disabled) .mdc-text-field__icon{color:#c51162}.mdc-text-field--invalid+.mdc-text-field-helper-text--validation-msg{opacity:1}.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled){border-color:#c51162}.mdc-text-field--textarea.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-text-field__input:focus{border-color:#c51162}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__idle{border-color:#c51162}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled) .mdc-notched-outline__path{stroke:#c51162}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover ~ .mdc-notched-outline__idle,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover ~ .mdc-notched-outline__idle{border-color:#c51162}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__input:hover ~ .mdc-notched-outline .mdc-notched-outline__path,.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled):not(.mdc-text-field--focused) .mdc-text-field__icon:hover ~ .mdc-notched-outline .mdc-notched-outline__path{stroke:#c51162}.mdc-text-field--outlined.mdc-text-field--invalid:not(.mdc-text-field--disabled).mdc-text-field--focused .mdc-notched-outline__path{stroke:#c51162}.mdc-text-field--disabled{pointer-events:none}.mdc-text-field--disabled .mdc-text-field__input{border-bottom-color:rgba(35,31,32,0.26)}.mdc-text-field--disabled .mdc-text-field__input{color:rgba(0,0,0,0.37)}.mdc-text-field--disabled .mdc-floating-label{color:rgba(0,0,0,0.37)}.mdc-text-field--disabled .mdc-text-field__input::placeholder{color:rgba(0,0,0,0.37)}.mdc-text-field--disabled+.mdc-text-field-helper-text{color:rgba(0,0,0,0.37)}.mdc-text-field--disabled .mdc-text-field__icon{color:rgba(0,0,0,0.3)}.mdc-text-field--disabled:not(.mdc-text-field--textarea){border-bottom-color:rgba(0,0,0,0.12)}.mdc-text-field--disabled .mdc-text-field__input{border-bottom:1px dotted}.mdc-text-field--disabled .mdc-floating-label{cursor:default}.mdc-text-field--textarea.mdc-text-field--disabled{border-color:rgba(35,31,32,0.26);background-color:#f9f9f9;border-style:solid}.mdc-text-field--textarea.mdc-text-field--disabled .mdc-text-field__input:focus{border-color:rgba(35,31,32,0.26)}.mdc-text-field--textarea.mdc-text-field--disabled .mdc-text-field__input{border:1px solid transparent}.mdc-text-field--textarea.mdc-text-field--disabled .mdc-floating-label{background-color:#f9f9f9}@keyframes mdc-floating-label-shake-float-above-text-field-box{0%{transform:translateX(calc(0 - 0%)) translateY(-50%) scale(.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.70173, 0.49582);transform:translateX(calc(4% - 0%)) translateY(-50%) scale(.75)}66%{animation-timing-function:cubic-bezier(0.30244, 0.38135, 0.55, 0.95635);transform:translateX(calc(-4% - 0%)) translateY(-50%) scale(.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-50%) scale(.75)}}@keyframes mdc-floating-label-shake-float-above-text-field-box-dense{0%{transform:translateX(calc(0 - 0%)) translateY(-70%) scale(.923)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.70173, 0.49582);transform:translateX(calc(4% - 0%)) translateY(-70%) scale(.923)}66%{animation-timing-function:cubic-bezier(0.30244, 0.38135, 0.55, 0.95635);transform:translateX(calc(-4% - 0%)) translateY(-70%) scale(.923)}100%{transform:translateX(calc(0 - 0%)) translateY(-70%) scale(.923)}}@keyframes mdc-floating-label-shake-float-above-text-field-outlined{0%{transform:translateX(calc(0 - 0%)) translateY(-130%) scale(.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.70173, 0.49582);transform:translateX(calc(4% - 0%)) translateY(-130%) scale(.75)}66%{animation-timing-function:cubic-bezier(0.30244, 0.38135, 0.55, 0.95635);transform:translateX(calc(-4% - 0%)) translateY(-130%) scale(.75)}100%{transform:translateX(calc(0 - 0%)) translateY(-130%) scale(.75)}}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-dense{0%{transform:translateX(calc(0 - 0%)) translateY(-110%) scale(.923)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.70173, 0.49582);transform:translateX(calc(4% - 0%)) translateY(-110%) scale(.923)}66%{animation-timing-function:cubic-bezier(0.30244, 0.38135, 0.55, 0.95635);transform:translateX(calc(-4% - 0%)) translateY(-110%) scale(.923)}100%{transform:translateX(calc(0 - 0%)) translateY(-110%) scale(.923)}}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon{0%{transform:translateX(calc(0 - 32px)) translateY(-130%) scale(.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.70173, 0.49582);transform:translateX(calc(4% - 32px)) translateY(-130%) scale(.75)}66%{animation-timing-function:cubic-bezier(0.30244, 0.38135, 0.55, 0.95635);transform:translateX(calc(-4% - 32px)) translateY(-130%) scale(.75)}100%{transform:translateX(calc(0 - 32px)) translateY(-130%) scale(.75)}}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-dense{0%{transform:translateX(calc(0 - 21px)) translateY(-110%) scale(.923)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.70173, 0.49582);transform:translateX(calc(4% - 21px)) translateY(-110%) scale(.923)}66%{animation-timing-function:cubic-bezier(0.30244, 0.38135, 0.55, 0.95635);transform:translateX(calc(-4% - 21px)) translateY(-110%) scale(.923)}100%{transform:translateX(calc(0 - 21px)) translateY(-110%) scale(.923)}}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-rtl{0%{transform:translateX(calc(0 - -32px)) translateY(-130%) scale(.75)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.70173, 0.49582);transform:translateX(calc(4% - -32px)) translateY(-130%) scale(.75)}66%{animation-timing-function:cubic-bezier(0.30244, 0.38135, 0.55, 0.95635);transform:translateX(calc(-4% - -32px)) translateY(-130%) scale(.75)}100%{transform:translateX(calc(0 - -32px)) translateY(-130%) scale(.75)}}@keyframes mdc-floating-label-shake-float-above-text-field-outlined-leading-icon-dense-rtl{0%{transform:translateX(calc(0 - -21px)) translateY(-110%) scale(.923)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.70173, 0.49582);transform:translateX(calc(4% - -21px)) translateY(-110%) scale(.923)}66%{animation-timing-function:cubic-bezier(0.30244, 0.38135, 0.55, 0.95635);transform:translateX(calc(-4% - -21px)) translateY(-110%) scale(.923)}100%{transform:translateX(calc(0 - -21px)) translateY(-110%) scale(.923)}}@keyframes mdc-floating-label-shake-float-above-textarea{0%{transform:translateX(calc(0 - 0%)) translateY(-50%) scale(.923)}33%{animation-timing-function:cubic-bezier(0.5, 0, 0.70173, 0.49582);transform:translateX(calc(4% - 0%)) translateY(-50%) scale(.923)}66%{animation-timing-function:cubic-bezier(0.30244, 0.38135, 0.55, 0.95635);transform:translateX(calc(-4% - 0%)) translateY(-50%) scale(.923)}100%{transform:translateX(calc(0 - 0%)) translateY(-50%) scale(.923)}}.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-feature-settings:\'liga\';-webkit-font-smoothing:antialiased}:host(:not([fullwidth])){display:inline-block}\n</style>']);

  var style$b = html$1(_templateObject$m);

  var _templateObject$n = taggedTemplateLiteral(['\n      ', '\n      <div class$="mdc-text-field mdc-text-field--upgraded ', '">\n        ', '\n        ', '\n        ', '\n        ', '\n      </div>\n      ', ''], ['\n      ', '\n      <div class$="mdc-text-field mdc-text-field--upgraded ', '">\n        ', '\n        ', '\n        ', '\n        ', '\n      </div>\n      ', '']),
      _templateObject2$2 = taggedTemplateLiteral(['<i class="material-icons mdc-text-field__icon" tabindex="0">', '</i>'], ['<i class="material-icons mdc-text-field__icon" tabindex="0">', '</i>']),
      _templateObject3 = taggedTemplateLiteral(['<label class$="mdc-floating-label ', '" for="text-field">', '</label>'], ['<label class$="mdc-floating-label ', '" for="text-field">', '</label>']),
      _templateObject4 = taggedTemplateLiteral(['<div class="mdc-notched-outline">\n            <svg><path class="mdc-notched-outline__path"/></svg>\n          </div>\n          <div class="mdc-notched-outline__idle"></div>'], ['<div class="mdc-notched-outline">\n            <svg><path class="mdc-notched-outline__path"/></svg>\n          </div>\n          <div class="mdc-notched-outline__idle"></div>']),
      _templateObject5 = taggedTemplateLiteral(['<div class="mdc-line-ripple"></div>'], ['<div class="mdc-line-ripple"></div>']),
      _templateObject6 = taggedTemplateLiteral(['<p class="mdc-text-field-helper-text" aria-hidden="true">', '</p>'], ['<p class="mdc-text-field-helper-text" aria-hidden="true">', '</p>']),
      _templateObject7 = taggedTemplateLiteral(['<input type="text" type$="', '" placeholder$="', '" required?="', '" class$="mdc-text-field__input ', '" id="text-field" value="', '" aria-label$="', '">'], ['<input type="text" type$="', '" placeholder$="', '" required?="', '" class$="mdc-text-field__input ', '" id="text-field" value="', '" aria-label$="', '">']);

  var MDCWCTextField = function (_MDCWebComponentMixin) {
    inherits(MDCWCTextField, _MDCWebComponentMixin);

    function MDCWCTextField() {
      classCallCheck(this, MDCWCTextField);
      return possibleConstructorReturn(this, (MDCWCTextField.__proto__ || Object.getPrototypeOf(MDCWCTextField)).apply(this, arguments));
    }

    return MDCWCTextField;
  }(MDCWebComponentMixin(MDCTextField));

  var Textfield = function (_ComponentElement) {
    inherits(Textfield, _ComponentElement);
    createClass(Textfield, null, [{
      key: 'ComponentClass',
      get: function get$$1() {
        return MDCWCTextField;
      }
    }, {
      key: 'componentSelector',
      get: function get$$1() {
        return '.mdc-text-field';
      }
    }, {
      key: 'properties',
      get: function get$$1() {
        return {
          value: String,
          label: String,
          icon: String,
          iconTrailing: Boolean,
          box: Boolean,
          outlined: Boolean,
          disabled: Boolean,
          fullWidth: Boolean,
          required: Boolean,
          helperText: '',
          placeHolder: '',
          type: ''
        };
      }
    }]);

    function Textfield() {
      classCallCheck(this, Textfield);

      var _this2 = possibleConstructorReturn(this, (Textfield.__proto__ || Object.getPrototypeOf(Textfield)).call(this));

      _this2._asyncComponent = true;
      _this2.required = false;
      _this2.value = '';
      _this2.label = '';
      _this2.icon = '';
      _this2.iconTrailing = false;
      _this2.helperText = '';
      _this2.box = false;
      _this2.outlined = false;
      _this2.disabled = false;
      _this2.fullWidth = false;
      _this2.placeHolder = '';
      _this2.type = '';
      return _this2;
    }

    createClass(Textfield, [{
      key: '_renderStyle',
      value: function _renderStyle() {
        return style$b;
      }

      // TODO(sorvell) #css: styling for fullwidth

    }, {
      key: '_render',
      value: function _render(_ref) {
        var value = _ref.value,
            label = _ref.label,
            box = _ref.box,
            outlined = _ref.outlined,
            disabled = _ref.disabled,
            icon = _ref.icon,
            iconTrailing = _ref.iconTrailing,
            fullWidth = _ref.fullWidth,
            required = _ref.required,
            placeHolder = _ref.placeHolder,
            helperText = _ref.helperText,
            type = _ref.type;

        var hostClasses = classString({
          'mdc-text-field--with-leading-icon': icon && !iconTrailing,
          'mdc-text-field--with-trailing-icon': icon && iconTrailing,
          'mdc-text-field--box': !fullWidth && box,
          'mdc-text-field--outlined': !fullWidth && outlined,
          'mdc-text-field--disabled': disabled,
          'mdc-text-field--fullwidth': fullWidth
        });
        return html$1(_templateObject$n, this._renderStyle(), hostClasses, !fullWidth && icon ? html$1(_templateObject2$2, icon) : '', this._renderInput({ value: value, required: required, type: type, placeHolder: placeHolder, label: label }), !fullWidth && label ? html$1(_templateObject3, value ? 'mdc-floating-label--float-above' : '', label) : '', !fullWidth && outlined ? html$1(_templateObject4) : html$1(_templateObject5), helperText ? html$1(_templateObject6, helperText) : '');
      }
    }, {
      key: '_renderInput',
      value: function _renderInput(_ref2) {
        var value = _ref2.value,
            required = _ref2.required,
            type = _ref2.type,
            placeHolder = _ref2.placeHolder,
            label = _ref2.label;

        return html$1(_templateObject7, type, placeHolder, required, value ? 'mdc-text-field--upgraded' : '', value, label);
      }
    }, {
      key: 'ready',
      value: function ready() {
        get(Textfield.prototype.__proto__ || Object.getPrototypeOf(Textfield.prototype), 'ready', this).call(this);
        this._input = this._root.querySelector('input');
      }
    }, {
      key: 'click',
      value: function click() {
        this._input.click();
      }
    }, {
      key: 'focus',
      value: function focus() {
        this._input.focus();
      }
    }, {
      key: 'valid',
      get: function get$$1() {
        return this._component && this._component.isValid();
      },
      set: function set$$1(value) {
        this.componentReady().then(function (component) {
          component.setValid(value);
        });
      }
    }]);
    return Textfield;
  }(ComponentElement);

  customElements.define('mwc-textfield', Textfield);

}());
